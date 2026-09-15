const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

function loadManifest(instanceDirectory) {
  const manifestPath = path.join(instanceDirectory, 'instance.json');
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (error) {
    throw new Error(`Unable to read instance manifest: ${error.message}`);
  }
  if (manifest?.schemaVersion !== 1) throw new Error('Unsupported or missing schemaVersion');
  if (manifest?.server?.host !== '127.0.0.1') throw new Error('Instance server host must be 127.0.0.1');
  if (!Number.isInteger(manifest?.server?.port) || manifest.server.port < 1024 || manifest.server.port > 65535) throw new Error('Instance server port must be between 1024 and 65535');
  if (!manifest.slug || !manifest.displayName) throw new Error('Instance slug and displayName are required');
  return manifest;
}

function safeInstanceView(manifest) {
  return {
    schemaVersion: manifest.schemaVersion,
    slug: manifest.slug,
    displayName: manifest.displayName,
    research: manifest.research,
    email: {
      mode: manifest.email?.mode,
      humanSendRequired: manifest.email?.humanSendRequired
    },
    knowledgeConnector: manifest.knowledgeConnector
  };
}

function sendJson(response, status, body) {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  response.end(`${JSON.stringify(body)}\n`);
}

function createInstanceServer(manifest) {
  return http.createServer((request, response) => {
    if (request.method !== 'GET') return sendJson(response, 405, { error: 'method_not_allowed' });
    if (request.url === '/health') return sendJson(response, 200, { status: 'ok', instance: manifest.slug });
    if (request.url === '/api/instance') return sendJson(response, 200, safeInstanceView(manifest));
    return sendJson(response, 404, { error: 'not_found' });
  });
}

function startInstance(instanceDirectory) {
  const manifest = loadManifest(instanceDirectory);
  const server = createInstanceServer(manifest);
  server.listen(manifest.server.port, manifest.server.host);
  return { manifest, server };
}

if (require.main === module) {
  const instanceDirectory = process.argv[2];
  if (!instanceDirectory) throw new Error('Usage: npm run start-instance -- <instance-directory>');
  const { manifest, server } = startInstance(path.resolve(instanceDirectory));
  server.on('listening', () => process.stdout.write(`Running ${manifest.slug} at http://${manifest.server.host}:${manifest.server.port}\n`));
  server.on('error', (error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}

module.exports = { createInstanceServer, loadManifest, safeInstanceView, startInstance };
