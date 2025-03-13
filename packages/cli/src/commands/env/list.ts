import { CommandModule } from 'yargs';

import { IContext } from '../../context';

export function List({ envs }: IContext): CommandModule<{}, {}> {
  return {
    command: 'list',
    aliases: 'ls',
    describe: 'list environments',
    handler: () => {
      console.log(`active: ${envs.active.name}\n`);

      for (const env of envs.list()) {
        console.log(`${env.name}: ${env.list().length}`);
      }
    },
  };
}
