const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { createInstanceServer, loadManifest, safeInstanceView } = require('../src/instance-server');

const manifest = {
  schemaVersion: 1,
  slug: 'testing-roles-belgium',
  displayName: 'Testing Roles — Belgium',
  server: { host: '127.0.0.1', port: 4101 },
  research: { kind: 'job-role', focus: 'Software testing', geographies: ['BE'], requiredEvidence: 'source-url-and-date' },
  email: { mode: 'claude-only-drafts', humanSendRequired: true },
  knowledgeConnector: { publication: 'review-required' }
};

function request(server, route, method = 'GET') {
  const address = server.address();
  return new Promise((resolve, reject) => {
    const client = http.request({ host: '127.0.0.1', port: address.port, path: route, method }, (response) => {
      let body = '';
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, body: JSON.parse(body) }));
    });
    client.on('error', reject);
    client.end();
  });
}

test('loopback instance exposes safe health and configuration views', async (t) => {
  const server = createInstanceServer(manifest);
  t.after(() => server.close());
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  assert.deepEqual(await request(server, '/health'), { status: 200, body: { status: 'ok', instance: 'testing-roles-belgium' } });
  const instance = await request(server, '/api/instance');
  assert.equal(instance.status, 200);
  assert.deepEqual(instance.body.email, { mode: 'claude-only-drafts', humanSendRequired: true });
  assert.equal('server' in instance.body, false);
  assert.deepEqual(await request(server, '/missing'), { status: 404, body: { error: 'not_found' } });
  assert.deepEqual(await request(server, '/health', 'POST'), { status: 405, body: { error: 'method_not_allowed' } });
});

test('runtime rejects a manifest that tries to bind beyond loopback', (t) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'instance-server-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  fs.writeFileSync(path.join(directory, 'instance.json'), JSON.stringify({ ...manifest, server: { host: '0.0.0.0', port: 4101 } }));
  assert.throws(() => loadManifest(directory), /host must be 127\.0\.0\.1/);
});

test('safe view excludes the local-server binding', () => {
  assert.equal('server' in safeInstanceView(manifest), false);
});
