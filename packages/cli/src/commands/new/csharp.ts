import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { CommandModule } from 'yargs';

import { IContext } from '../../context';
import { Project } from '../../project';

type Args = {
  readonly name: string;
  readonly template: string;
  readonly ttk?: boolean;
  readonly start?: boolean;
};

export function CSharp(_: IContext): CommandModule<{}, Args> {
  return {
    command: 'csharp <name>',
    aliases: ['c#', 'dotnet', '.net'],
    describe: 'create a new csharp app project',
    builder: (b) => {
      return b
        .positional('name', {
          alias: 'n',
          type: 'string',
          describe: 'the apps name',
          demandOption: true,
          coerce: (name: string) => {
            return name
              .trim()
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/^[._]/, '')
              .replace(/[^a-z\d\-~]+/g, '-');
          },
        })
        .option('template', {
          alias: 't',
          type: 'string',
          describe: 'the app template to use',
          default: 'echo',
          choices: fs.readdirSync(
            path.resolve(url.fileURLToPath(import.meta.url), '../..', 'templates', 'csharp')
          ),
        })
        .option('start', {
          alias: 's',
          type: 'boolean',
          describe: 'start the project',
          default: false,
        })
        .option('ttk', {
          alias: 'ttk',
          type: 'boolean',
          describe: 'include Teams Toolkit configuration',
          default: false,
        })
        .check(({ name }) => {
          if (fs.existsSync(path.join(process.cwd(), name))) {
            throw new Error(`"${name}" already exists!`);
          }

          if (!/^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(name)) {
            throw new Error(`"${name}" is not a valid package name`);
          }

          return true;
        });
    },
    handler: async ({ name, template, ttk }) => {
      const projectDir = path.join(process.cwd(), name);
      const builder = Project.builder()
        .withPath(projectDir)
        .withName(name)
        .withLanguage('csharp')
        .addTemplate(template);

      if (ttk) {
        builder.addTeamsToolkit('basic');
      }

      const project = builder.build();
      await project.up();
      console.log(`✅ App "${name}" created successfully at ${projectDir}`);
    },
  };
}
