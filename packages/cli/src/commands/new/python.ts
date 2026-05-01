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
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
});

/**
 * Prints next steps to start the app.
 */
function printNextSteps(name: string): void {
  console.log(new String().bold('Next steps to start the app:').toString());
  console.log(new String().cyan(`  cd ${name}`).toString());
  console.log(new String().cyan('  python -m venv .venv').toString());
  console.log(new String().gray('  # activate your venv, then:').toString());
  console.log(new String().cyan('  pip install -e .').toString());
  console.log(new String().cyan('  python src/main.py').toString());
}

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
    handler: async ({ name, template, atk, clientId, clientSecret }) => {
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

      const project = builder.build();
      await project.up();

      console.log(
        new String()
          .bold(new String().green(`✅ App "${name}" created successfully at ${projectDir}`))
          .toString()
      );

      printNextSteps(name);
    },
  };
}
