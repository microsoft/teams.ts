#! /usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import * as commands from './commands';

(async () => {
  yargs(hideBin(process.argv))
    .scriptName('teams')
    .command(commands.New())
    .command(commands.Config())
    .parse();
})();
