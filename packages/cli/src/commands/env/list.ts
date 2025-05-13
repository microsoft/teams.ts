import { CommandModule } from 'yargs';

import { IContext } from '../../context';

type Args = {
  name?: string;
};

export function List({ envs }: IContext): CommandModule<{}, Args> {
  return {
    command: 'list [name]',
    aliases: 'ls',
    describe: 'list environments',
    builder: (b) => {
      return b.positional('name', {
        type: 'string',
        describe: 'env name, if provided variables will be listed',
        choices: envs.list().map(e => e.name)
      });
    },
    handler: ({ name }) => {
      if (name) {
        const env = envs.getByName(name);

        if (!env) {
          console.error('environment not found');
          return;
        }

        for (const { key, value } of env.list()) {
          console.log(`${key}: ${value}`);
        }

        return;
      }

      console.log(`active: ${envs.active.name}\n`);

      for (const env of envs.list()) {
        console.log(`${env.name}: ${env.list().length}`);
      }
    },
  };
}
