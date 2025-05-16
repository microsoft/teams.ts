import { CommandModule } from 'yargs';

import { IContext } from '../../context';

import { Settings } from '../../settings';

import { CSharp } from './csharp';
import { Typescript } from './typescript';

export function New(context: IContext): CommandModule<{}, {}> {
  const language = Settings.load().language ?? '';

  return {
    command: 'new',
    aliases: 'n',
    describe: `create a new app project${language ? ` in ${language}` : ''}. You can update language with the "set-lang" command.`,
    builder: (b) => {
      return b
        .command(Typescript(context))
        .command(CSharp(context));
    },
    handler: () => { },
  };
}
