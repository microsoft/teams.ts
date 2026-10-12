import { spawn } from 'node:child_process';
import { watch } from 'node:fs';

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
let app;
let build;
let queued = false;

const run = (command, args) =>
  new Promise((resolve) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', (code) => resolve(code));
  });

const restart = async () => {
  if (build) {
    queued = true;
    return;
  }

  app?.kill();
  build = run(npm, ['run', 'build']);
  const code = await build;
  build = undefined;

  if (code === 0) {
    app = spawn(npm, ['start'], { stdio: 'inherit' });
  }

  if (queued) {
    queued = false;
    await restart();
  }
};

watch('src', { recursive: true }, () => {
  void restart();
});

process.on('exit', () => app?.kill());
process.on('SIGINT', () => process.exit(130));
process.on('SIGTERM', () => process.exit(143));

void restart();
