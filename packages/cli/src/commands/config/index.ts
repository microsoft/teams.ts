import { CommandModule } from 'yargs';

import { IContext } from '../../context';

import { Add } from './add';
import { Remove } from './remove';

export function Config(context: IContext): CommandModule<{}, {}> {
  return {
    command: 'config',
    aliases: 'c',
    describe: 'configure a project',
    builder: (b) => {
      return b.command(Add(context)).command(Remove(context)).demandCommand(1);
    },
    handler: () => {},
  };
}
