import fs from 'fs';
import path from 'path';

import { CommandModule } from 'yargs';

import { IContext } from '../../context';

type Args = {
  name?: string;
};

export function Export({ envs }: IContext): CommandModule<{}, Args> {
  return {
    command: 'export [name]',
    describe: 'export an environment to a .env file in your cwd',
    builder: (b) => {
      return b.positional('name', {
        type: 'string',
        describe: 'the environment name to export (defaults to active)',
      });
    },
    handler: ({ name = envs.active.name }) => {
      const file = path.join(process.cwd(), '.env');
      const env = envs.getByName(name);

      if (!env) {
        console.error('environment not found');
        return;
      }

      fs.writeFileSync(file, env.toString(), 'utf8');
    },
  };
}
