import { CommandModule } from 'yargs';

import { z } from 'zod';

import { IContext } from '../../context';
import { Settings } from '../../settings';

const ArgsSchema = z.object({
    language: z.string(),
  });

export function SetLang(_: IContext): CommandModule<{}, z.infer<typeof ArgsSchema>> {
  const language = Settings.load().language ?? '';
  const currentLanguage = language ? `It is currently set to ${language}.` : '';

  const pythonEnabled = process.env.ENABLE_EXPERIMENTAL_PYTHON_OPTIONS === 'true' || process.env.ENABLE_EXPERIMENTAL_PYTHON_OPTIONS === '1';
  const choices = pythonEnabled
    ? ['ts', 'cs', 'py', 'typescript', 'csharp', 'python']
    : ['ts', 'cs', 'typescript', 'csharp'];

  return {
    command: 'set-lang <language>',
    describe: `set the programming language for the project (typescript, csharp${pythonEnabled ? ', or python' : ''}). ${currentLanguage}`,
    builder: (b) => {
      return b
        .positional('language', {
          describe: `programming language to use (typescript, csharp${pythonEnabled ? ', or python' : ''})`,
          type: 'string',
          choices,
          demandOption: true,
        });
    },
    handler: async ({ language }) => {
      const settings = Settings.load();
      if (['ts', 'typescript'].includes(language)) {
        settings.language = 'typescript';
      } else if (['cs', 'csharp'].includes(language)) {
        settings.language = 'csharp';
      } else if (pythonEnabled && ['py', 'python'].includes(language)) {
        settings.language = 'python';
      }

      settings.save();
      console.log(`Language set to ${settings.language}`);
    },
  };
}
