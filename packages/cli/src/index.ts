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
  yargs(hideBin(process.argv))
    .scriptName('spark')
    .command(commands.New(context))
    .command(commands.Env(context))
    .command(commands.Config(context))
    .parse();
})();
