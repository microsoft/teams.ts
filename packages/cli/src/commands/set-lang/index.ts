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
  

  return {
    command: 'set-lang <language>',
    describe: `set the programming language for the project (typescript or csharp). ${currentLanguage}`,
    builder: (b) => {
      return b
        .positional('language', {
          describe: 'programming language to use (typescript or csharp)',
          type: 'string',
          choices: ['ts', 'cs', 'typescript', 'csharp'],
          demandOption: true,
        });
    },
    handler: async ({ language }) => {
      const settings = Settings.load();
      settings.language = ['ts', 'typescript'].includes(language) ? 'typescript' : 'csharp';
      settings.save();
      console.log(`Language set to ${settings.language}`);
    },
  };
} 