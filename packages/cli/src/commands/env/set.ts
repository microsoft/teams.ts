import { CommandModule } from 'yargs';

import { IContext } from '../../context';

type Args = {
  key: string;
  value: string;
};

export function Set({ envs }: IContext): CommandModule<{}, Args> {
  return {
    command: 'set <key> [value]',
    describe: 'set an environment key',
    builder: (b) => {
      return b
        .positional('key', {
          type: 'string',
          demandOption: true,
        })
        .positional('value', {
          type: 'string',
          demandOption: true,
        });
    },
    handler: ({ key, value }) => {
      envs.set(key, value);
    },
  };
}
