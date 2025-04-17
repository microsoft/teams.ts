import { spawnSync } from 'child_process';
import path from 'path';

const CLI_PATH = path.resolve(__dirname, '..', 'cli.js'); // Adjust if your entry point is different

function runCli(args: string[]) {
  return spawnSync('node', [CLI_PATH, ...args], {
    encoding: 'utf-8',
  });
}

describe('CLI Options', () => {
  it('shows help with --help', () => {
    const result = runCli(['--help']);
    expect(result.stdout).toMatch(/Usage|Help/i);
    expect(result.status).toBe(0);
  });

  it('shows version with --version', () => {
    const result = runCli(['--version']);
    expect(result.stdout).toMatch(/\d+\.\d+\.\d+/);
    expect(result.status).toBe(0);
  });

  // Add more tests for your specific CLI options here
});