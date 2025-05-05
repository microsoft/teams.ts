import { CommandModule } from 'yargs';

import { IContext } from '../../context';

import { CSharp } from './csharp';
import { Typescript } from './typescript';

export function New(context: IContext): CommandModule<{}, {}> {
  return {
    command: 'new',
    aliases: 'n',
    describe: 'create a new app project',
    builder: (b) => {
      let args = b.command(Typescript(context));

      if (process.env.TEAMS_CLI_ENV === 'development') {
        args = args.command(CSharp(context));
      }

      return args;
    },
    handler: () => { },
  };
}
