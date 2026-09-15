const fs = require('node:fs');
const path = require('node:path');

function validateBrief(brief) {
  const errors = [];
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(brief.slug || '')) errors.push('slug must be kebab-case');
  if (!Number.isInteger(brief.serverPort) || brief.serverPort < 1024 || brief.serverPort > 65535) errors.push('serverPort must be an integer between 1024 and 65535');
  if (!brief.displayName) errors.push('displayName is required');
  if (!brief.research?.kind || !brief.research?.focus || !Array.isArray(brief.research?.geographies) || brief.research.geographies.length === 0) errors.push('research kind, focus, and at least one geography are required');
  if (brief.research?.requiredEvidence !== 'source-url-and-date') errors.push('research.requiredEvidence must be source-url-and-date');
  if (brief.email?.mode !== 'claude-only-drafts') errors.push('email.mode must be claude-only-drafts');
  if (brief.email?.humanSendRequired !== true) errors.push('email.humanSendRequired must be true');
  if (brief.knowledgeConnector?.publication !== 'review-required') errors.push('knowledgeConnector.publication must be review-required');
  return errors;
}

function createInstance(brief, rootDirectory) {
  const errors = validateBrief(brief);
  if (errors.length) throw new Error(`Invalid domain brief: ${errors.join('; ')}`);
  const instanceDirectory = path.join(rootDirectory, brief.slug);
  if (fs.existsSync(instanceDirectory)) throw new Error(`Instance already exists: ${brief.slug}`);
  const manifest = {
    schemaVersion: 1,
    slug: brief.slug,
    displayName: brief.displayName,
    server: { host: '127.0.0.1', port: brief.serverPort },
    research: brief.research,
    email: brief.email,
    knowledgeConnector: brief.knowledgeConnector
  };
  fs.mkdirSync(path.join(instanceDirectory, 'data'), { recursive: true });
  fs.mkdirSync(path.join(instanceDirectory, 'evidence'), { recursive: true });
  fs.mkdirSync(path.join(instanceDirectory, 'runtime'), { recursive: true });
  fs.writeFileSync(path.join(instanceDirectory, 'instance.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(path.join(instanceDirectory, 'README.md'), `# ${brief.displayName}\n\nLocal instance: http://127.0.0.1:${brief.serverPort}\n\nOperational data stays in \`data/\`. Evidence belongs in \`evidence/\`.\n`);
  return { instanceDirectory, manifest };
}

if (require.main === module) {
  const input = process.argv[2];
  if (!input) throw new Error('Usage: npm run create-instance -- <domain-brief.json>');
  const brief = JSON.parse(fs.readFileSync(input, 'utf8'));
  const result = createInstance(brief, path.resolve('instances'));
  process.stdout.write(`Created ${result.instanceDirectory}\n`);
}

module.exports = { createInstance, validateBrief };
