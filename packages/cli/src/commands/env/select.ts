import { CommandModule } from 'yargs';

import { IContext } from '../../context';

type Args = {
  name: string;
};

export function Select({ envs }: IContext): CommandModule<{}, Args> {
  return {
    command: 'select <name>',
    describe: 'select an environment',
    builder: (b) => {
      return b.positional('name', {
        type: 'string',
        demandOption: true,
        coerce: (name: string) => {
          return name
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/^[._]/, '')
            .replace(/[^a-z\d\-~]+/g, '-');
        },
      });
    },
    handler: ({ name }) => {
      envs.select(name);
    },
  };
}
