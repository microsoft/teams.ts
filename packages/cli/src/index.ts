#! /usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import * as commands from './commands';
import { IContext } from './context';
import { EnvStorage } from './environment';
import { Settings } from './settings';

// Check Node.js version
const checkNodeVersion = () => {
  const currentVersion = process.versions.node;
  const majorVersion = parseInt(currentVersion.split('.')[0], 10);

  if (majorVersion < 20) {
    console.error(
      `Error: Node.js version 20 or higher is required. Current version: ${currentVersion}`
    );
    process.exit(1);
  }
};

(async () => {
  checkNodeVersion();

  const settings = Settings.load();
  const envs = EnvStorage.load(settings);
  const context: IContext = { settings, envs };

  envs.select(settings.env);

  const argv = hideBin(process.argv);
  const yargsInstance = yargs(argv)
    .scriptName('spark')
    .version()
    .command(commands.New(context))
    .command(commands.Env(context))
    .command(commands.Config(context))
    .demandCommand(1, 'Please specify a command')
    .showHelpOnFail(true)
    .recommendCommands();

  // Show help when no arguments are provided
  if (argv.length === 0) {
    yargsInstance.showHelp();
  } else {
    yargsInstance.parse();
  }
})();
