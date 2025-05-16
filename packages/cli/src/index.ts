#! /usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import * as commands from './commands';
import { IContext } from './context';
import { EnvStorage } from './environment';
import { Settings } from './settings';

(async () => {
  const settings = Settings.load();
  const envs = EnvStorage.load(settings);
  const context: IContext = { settings, envs };

  envs.select(settings.env);

  const argv = hideBin(process.argv);
  const yargsInstance = yargs(argv)
    .scriptName('teams')
    .version()
    .command(commands.New(context))
    .command(commands.Env(context))
    .command(commands.Config(context))
    .command(commands.SetLang(context))
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
