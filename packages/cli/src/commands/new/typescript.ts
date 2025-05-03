import cp from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { CommandModule } from 'yargs';
import { z } from 'zod';

import { String } from '@microsoft/teams.common';

import { IContext } from '../../context';
import { Project } from '../../project';

const ArgsSchema = z.object({
  name: z.string(),
  template: z.string(),
  ttk: z.string().optional(),
  start: z.boolean().optional(),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
});

export function Typescript(_: IContext): CommandModule<{}, z.infer<typeof ArgsSchema>> {
  return {
    command: ['$0 <name>', 'typescript <name>'],
    aliases: 'ts',
    describe: 'create a new typescript app project',
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
            path.resolve(url.fileURLToPath(import.meta.url), '../..', 'templates', 'typescript')
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
          choices: fs.readdirSync(
            path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs', 'ttk')
          ),
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
    handler: async ({ name, template, ttk, start, clientId, clientSecret }) => {
      const projectDir = path.join(process.cwd(), name);
      const builder = Project.builder()
        .withPath(projectDir)
        .withName(name)
        .withLanguage('typescript')
        .addTemplate(template);

      if (ttk) {
        builder.addTeamsToolkit(ttk);
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

      if (start) {
        console.log(`cd ${name} && npm install && npm run dev`);
        cp.spawnSync(`cd ${name} && npm install && npm run dev`, {
          stdio: 'inherit',
          shell: true,
        });
      } else {
        console.log('Next steps to start the app:');
        console.log(`cd ${name} && npm install && npm run dev`);
      }
    },
  };
}
