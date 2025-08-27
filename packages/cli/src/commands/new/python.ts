import cp from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { CommandModule } from 'yargs';
import { z } from 'zod';

import { String } from '@microsoft/teams.common';

import { IContext } from '../../context';
import { Project } from '../../project';
import { Settings } from '../../settings';

const ArgsSchema = z.object({
  name: z.string(),
  template: z.string(),
  atk: z.string().optional(),
  start: z.boolean().optional(),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
});

export function Python(_: IContext): CommandModule<{}, z.infer<typeof ArgsSchema>> {
  const isPython = Settings.load().language == 'python';
  const atkPath = path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs', 'atk');

  return {
    command: ['python <name>', ...(isPython ? ['$0 <name>'] : [])],
    aliases: 'py',
    describe: 'create a new python app project',
    builder: (b) => {
      return b
        .positional('name', {
          alias: 'n',
          type: 'string',
          describe: 'the apps name',
          demandOption: true,
          coerce: (name: string) => {
            return name // normalize: trim, lowercase, replace spaces and invalid chars for package naming
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
            path.resolve(url.fileURLToPath(import.meta.url), '../..', 'templates', 'python')
          ),
        })
        .option('start', {
          alias: 's',
          type: 'boolean',
          describe: 'start the project',
          default: false,
        })
        .option('toolkit', {
          alias: 'atk',
          type: 'string',
          describe: 'include M365 Agents Toolkit configuration',
          choices: fs.readdirSync(atkPath)
            .filter((type) => fs.existsSync(path.join(atkPath, type, 'python')))
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
        .check((args: z.infer<typeof ArgsSchema>) => {
          const res = ArgsSchema.safeParse(args);

          if (res.error) {
            throw new Error(
              res.error.errors.map((err) => `${err.path.join('.')} => ${err.message}`).join('\n')
            );
          }

          return true;
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
    handler: async ({ name, template, atk, start, clientId, clientSecret }) => {
      const projectDir = path.join(process.cwd(), name);
      const builder = Project.builder()
        .withPath(projectDir)
        .withName(name)
        .withLanguage('python')
        .addTemplate(template);

      if (atk) {
        builder.addAgentsToolkit(atk);
      }

      if (clientId) {
        builder.addEnv('CLIENT_ID', clientId);
      }

      if (clientSecret) {
        builder.addEnv('CLIENT_SECRET', clientSecret);
      }

      if (process.env.OPENAI_API_KEY) {
        builder.addEnv('OPENAI_API_KEY', process.env.OPENAI_API_KEY);
      }

      if (process.env.AZURE_OPENAI_API_KEY) {
        builder.addEnv('AZURE_OPENAI_API_KEY', process.env.AZURE_OPENAI_API_KEY);
      }

      if (process.env.AZURE_OPENAI_ENDPOINT) {
        builder.addEnv('AZURE_OPENAI_ENDPOINT', process.env.AZURE_OPENAI_ENDPOINT);
      }

      const project = builder.build();
      await project.up();
      console.log(
        new String()
          .bold(new String().green(`✅ App "${name}" created successfully at ${projectDir}`))
          .toString()
      );

      const uvCheck = cp.spawnSync('uv', ['--version'], {
        encoding: 'utf-8',
        shell: true,
      });
      if (uvCheck.status !== 0) {
        throw new Error(
          '"uv" is required but was not found in your PATH. Please install uv (https://github.com/astral-sh/uv) and run "cd ${name} && uv venv && uv sync && uv run src/main.py".'
        );
      }

      if (start) {
        console.log(`cd ${name} && uv venv && uv sync && uv run src/main.py`);

        cp.spawnSync('uv', ['venv' , '&&', 'uv', 'sync', '&&', 'uv', 'run', 'src/main.py'], {
          stdio: 'inherit',
          shell: true,
          cwd: name,
        });

      } else {
        console.log('Next steps to start the app:');
        console.log(`cd ${name} && uv venv && uv sync && uv run src/main.py`);
      }
    },
  };
}
