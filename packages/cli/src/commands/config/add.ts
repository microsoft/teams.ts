import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { CommandModule } from 'yargs';

import { String } from '@microsoft/teams.common';

import { IContext } from '../../context';
import { Project } from '../../project';

type Args = {
  name: string;
};

export function Add(_: IContext): CommandModule<{}, Args> {
  const configsPath = path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs');

  return {
    command: 'add <name>',
    describe: 'add a configuration',
    builder: (b) => {
      return b.positional('name', {
        type: 'string',
        demandOption: true,
        choices: fs
          .readdirSync(configsPath)
          .map((name) => {
            // If no language is detected, default to configs available for typescript
            const language = Project.detectLanguage() ?? 'typescript';
            const atkPath = path.join(configsPath, name);

            return fs.readdirSync(atkPath)
              .filter((type) => fs.existsSync(path.join(atkPath, type, language)))
              .map((type) => `${name}.${type}`);
          })
          .flat(),
      }).check(() => {
        if (!Project.detectLanguage()) {
          throw new Error('Are you in the right folder? Expected a package.json (Typescript) or .sln (C#) file.');
        }

        return true;
      });
    },
    handler: async ({ name }) => {
      const [type, subType] = name.split('.');
      const builder = Project.load();

      if (type === 'atk') {
        builder.addAgentsToolkit(subType);
      }

      const project = builder.build();
      await project.up();
      console.log(
        new String().bold(new String().green(`✅ config "${name}" successfully added`)).toString()
      );
    },
  };
}
