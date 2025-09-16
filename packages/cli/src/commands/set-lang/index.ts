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

  const choices = ['ts', 'cs', 'py', 'typescript', 'csharp', 'python'];
  return {
    command: 'set-lang <language>',
    describe: `set the programming language for the project (typescript, csharp or python). ${currentLanguage}`,
    builder: (b) => {
      return b
        .positional('language', {
          describe: 'programming language to use (typescript, csharp or python)',
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
      } else if (['py', 'python'].includes(language)) {
        settings.language = 'python';
      }

      settings.save();
      console.log(`Language set to ${settings.language}`);
    },
  };
}
