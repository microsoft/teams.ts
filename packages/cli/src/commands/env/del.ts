import { CommandModule } from 'yargs';

import { IContext } from '../../context';

type Args = {
  key: string;
};

export function Del({ envs }: IContext): CommandModule<{}, Args> {
  return {
    command: 'del <key>',
    describe: 'delete an environment key',
    builder: (b) => {
      return b.positional('key', {
        type: 'string',
        demandOption: true,
      });
    },
    handler: ({ key }) => {
      envs.del(key);

      if (envs.active.list().length === 0 && envs.active.name !== 'dev') {
        const toDelete = envs.active.name;
        envs.select('dev');
        envs.remove(toDelete);
        return;
      }
    },
  };
}
