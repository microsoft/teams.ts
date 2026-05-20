import fs from 'node:fs';
import path from 'node:path';

// Architectural test: locks the trust-boundary contract on JsonWebToken.
//
// JsonWebToken is a typed accessor over an *already-validated* JWT payload.
// Constructing it does not verify the signature. The only legitimate places
// to construct it are:
//
//   1. After the HTTP-boundary validator has executed
//      (signature verified, issuer/audience/expiry checked).
//   2. From tokens sourced by trusted identity infrastructure
//      (MSAL acquisitions, Bot Framework API responses).
//
// If a new file in the monorepo starts constructing JsonWebToken, this test
// fails so the addition is reviewed against the trust-boundary contract.
// Add the file to ALLOWLIST below only after verifying it satisfies one of
// the conditions above.

const REPO_ROOT = path.resolve(__dirname, '../../../..');

const ALLOWLIST = new Set([
  // MSAL / credentials acquisitions — tokens are sourced from Microsoft
  // identity infrastructure and are intrinsically trusted.
  'packages/apps/src/token-manager.ts',
  // Devtools test harness — environment-guarded against production via
  // the DevtoolsPlugin's NODE_ENV check.
  'packages/dev/src/routes/v3/conversations/activities/create.ts',
]);

const CONSTRUCT_PATTERN = /\bnew\s+JsonWebToken\s*\(/;
const SKIP_DIRS = new Set(['node_modules', 'dist', 'coverage', '.git', '.turbo']);

function collectSourceFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) collectSourceFiles(full, files);
      continue;
    }
    if (!entry.name.endsWith('.ts')) continue;
    if (entry.name.endsWith('.spec.ts') || entry.name.endsWith('.test.ts')) continue;
    files.push(full);
  }
  return files;
}

describe('JsonWebToken trust-boundary contract', () => {
  it('is constructed only at allowlisted sites', () => {
    const packagesRoot = path.join(REPO_ROOT, 'packages');
    const files = collectSourceFiles(packagesRoot);

    const offenders: string[] = [];
    for (const file of files) {
      const contents = fs.readFileSync(file, 'utf8');
      if (!CONSTRUCT_PATTERN.test(contents)) continue;
      // Skip the class's own definition file.
      if (file.endsWith('packages/api/src/auth/json-web-token.ts')) continue;
      const rel = path.relative(REPO_ROOT, file);
      if (!ALLOWLIST.has(rel)) offenders.push(rel);
    }

    expect(offenders).toEqual([]);
  });
});
