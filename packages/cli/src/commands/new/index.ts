import { CommandModule } from 'yargs';

import { IContext } from '../../context';

import { Settings } from '../../settings';

import { CSharp } from './csharp';
import { Python } from './python';
import { Typescript } from './typescript';

export function New(context: IContext): CommandModule<{}, {}> {
  const language = Settings.load().language ?? '';

  return {
    command: 'new',
    aliases: 'n',
    describe: `create a new app project${language ? ` in ${language}` : ''}. You can update language with the "set-lang" command.`,
    builder: (b) => {
      let builder = b
        .command(Typescript(context))
        .command(CSharp(context));
      if (process.env.ENABLE_EXPERIMENTAL_PYTHON_OPTIONS === 'true' || process.env.ENABLE_EXPERIMENTAL_PYTHON_OPTIONS === '1') {
        builder = builder.command(Python(context));
      }
      return builder
        .strict()
        .demandCommand(1, 'You must specify a project type');
    },
    handler: () => { },
  };
}
