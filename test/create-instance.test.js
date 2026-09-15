const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const { createInstance, validateBrief } = require('../src/create-instance');

const validBrief = {
  slug: 'testing-roles-belgium',
  displayName: 'Testing Roles — Belgium',
  serverPort: 4101,
  research: { kind: 'job-role', focus: 'Software testing', geographies: ['BE'], requiredEvidence: 'source-url-and-date' },
  email: { mode: 'claude-only-drafts', humanSendRequired: true },
  knowledgeConnector: { publication: 'review-required' }
};

test('valid brief produces an isolated local instance contract', (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'dashboard-factory-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const { instanceDirectory, manifest } = createInstance(validBrief, root);
  assert.equal(manifest.server.host, '127.0.0.1');
  assert.equal(manifest.server.port, 4101);
  assert.ok(fs.existsSync(path.join(instanceDirectory, 'data')));
  assert.ok(fs.existsSync(path.join(instanceDirectory, 'evidence')));
  assert.equal(JSON.parse(fs.readFileSync(path.join(instanceDirectory, 'instance.json'))).email.mode, 'claude-only-drafts');
});

test('factory rejects a brief that weakens mandatory controls', () => {
  const weakBrief = structuredClone(validBrief);
  weakBrief.slug = 'Testing Roles';
  weakBrief.serverPort = 80;
  weakBrief.email.mode = 'all-models';
  weakBrief.email.humanSendRequired = false;
  assert.deepEqual(validateBrief(weakBrief), [
    'slug must be kebab-case',
    'serverPort must be an integer between 1024 and 65535',
    'email.mode must be claude-only-drafts',
    'email.humanSendRequired must be true'
  ]);
});
