import cp from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { CommandModule } from 'yargs';
import { z } from 'zod';

import { IContext } from '../../context';
import { Project } from '../../project';
import { Settings } from '../../settings';

const ArgsSchema = z.object({
  name: z.string(),
  template: z.string(),
  ttk: z.string().optional(),
  start: z.boolean().optional(),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
});

export function CSharp(_: IContext): CommandModule<{}, z.infer<typeof ArgsSchema>> {
  const isCSharp = Settings.load().language == 'csharp';
  const ttkPath = path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs', 'ttk');

  return {
    command: ['csharp <name>', ...(isCSharp ? ['$0 <name>'] : [])],
    aliases: ['cs'],
    describe: 'create a new csharp app project',
    builder: async (b) => {
      const changeCase = await import('change-case');

      return b
        .positional('name', {
          alias: 'n',
          type: 'string',
          describe: 'the apps name',
          demandOption: true,
          coerce: (name: string) => {
            return changeCase.pascalCase(name.trim(), {
              delimiter: '.',
            });
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
        .option('toolkit', {
          alias: 'ttk',
          type: 'string',
          describe: 'include Teams Toolkit configuration',
          choices: fs.readdirSync(ttkPath)
            .filter((type) => fs.existsSync(path.join(ttkPath, type, 'csharp')))
            .flat()
        })
        .option('client-id', {
          type: 'string',
          describe: 'the apps client id (app id)',
          default: process.env.CLIENT_ID,
        })
        .option('client-secret', {
          type: 'string',
          describe: 'the apps client secret',
          default: process.env.CLIENT_SECRET,
        })
        .check(({ name }) => {
          if (fs.existsSync(path.join(process.cwd(), name))) {
            throw new Error(`"${name}" already exists!`);
          }

          return true;
        });
    },
    handler: async ({ name, template, start, ttk, clientId, clientSecret }) => {
      const projectDir = path.join(process.cwd(), name);
      const builder = Project.builder()
        .withPath(projectDir)
        .withName(name)
        .withLanguage('csharp')
        .addTemplate(template);

      if (ttk) {
        builder.addTeamsToolkit(ttk);
      }

      const appSettingsPath = `${name}/appsettings.Development.json`;

      if (clientId) {
        builder.addEnv('Teams.ClientId', clientId, appSettingsPath);
      }

      if (clientSecret) {
        builder.addEnv('Teams.ClientSecret', clientSecret, appSettingsPath);
      }

      if (process.env.OPENAI_API_KEY) {
        builder.addEnv('OPENAI_API_KEY', process.env.OPENAI_API_KEY, appSettingsPath);
      }

      if (process.env.AZURE_OPENAI_API_KEY) {
        builder.addEnv('OPENAI_API_KEY', process.env.AZURE_OPENAI_API_KEY, appSettingsPath);
      }

      if (process.env.AZURE_OPENAI_ENDPOINT) {
        builder.addEnv('OPENAI_ENDPOINT', process.env.AZURE_OPENAI_ENDPOINT, appSettingsPath);
      }

      const project = builder.build();
      await project.up();
      console.log(`✅ App "${name}" created successfully at ${projectDir}`);

      if (start) {
        console.log(`cd ${name}/${name} && dotnet run`);
        cp.spawnSync(`cd ${name}/${name} && dotnet run`, {
          stdio: 'inherit',
          shell: true,
        });
      } else {
        console.log('Next steps to start the app:');
        console.log(`cd ${name}/${name} && dotnet run`);
      }
    },
  };
}
