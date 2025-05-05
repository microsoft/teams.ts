import cp from 'node:child_process';
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
    aliases: ['cs'],
    describe: '⚠️BETA⚠️ create a new csharp app project',
    builder: async (b) => {
      const changeCase = await import('change-case');

      return b
        .positional('name', {
          alias: 'n',
          type: 'string',
          describe: 'the apps name',
          demandOption: true,
          coerce: (name: string) => {
            return changeCase.pascalCase(
              name.trim(),
              { delimiter: '.' }
            );
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

          return true;
        });
    },
    handler: async ({ name, template, start, ttk }) => {
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

      if (start) {
        console.log(`cd ${name} && dotnet run`);
        cp.spawnSync(`cd ${name} && dotnet run`, {
          stdio: 'inherit',
          shell: true,
        });
      } else {
        console.log('Next steps to start the app:');
        console.log(`cd ${name} && dotnet run`);
      }
    },
  };
}
