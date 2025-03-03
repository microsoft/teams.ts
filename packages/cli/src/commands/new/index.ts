import { CommandModule } from 'yargs';

import { Typescript } from './typescript';
import { CSharp } from './csharp';

export function New(): CommandModule<{}, {}> {
  return {
    command: 'new',
    aliases: 'n',
    describe: 'create a new app project',
    builder: (b) => {
      let args = b.command(Typescript());

      if (process.env.TEAMS_CLI_ENV === 'development') {
        args = args.command(CSharp());
      }

      return args;
    },
    handler: () => {},
  };
}
