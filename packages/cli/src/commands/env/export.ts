import { CommandModule } from 'yargs';

import { IContext } from '../../context';
import { Project } from '../../project';

type Args = {
  name?: string;
};

export function Export({ envs }: IContext): CommandModule<{}, Args> {
  return {
    command: 'export [name]',
    describe: 'export an environment to an environment file in your project',
    builder: (b) => {
      return b.positional('name', {
        type: 'string',
        describe: 'the environment name to export (defaults to active)',
        choices: envs.list().map(e => e.name)
      });
    },
    handler: async ({ name = envs.active.name }) => {
      const builder = Project.load();
      const env = envs.getByName(name);

      if (!env) {
        console.error('environment not found');
        return;
      }

      for (const { key, value } of env.list()) {
        builder.addEnv(key, value);
      }

      const project = builder.build();
      await project.up();
    },
  };
}
