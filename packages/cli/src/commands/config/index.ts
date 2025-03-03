import { CommandModule } from 'yargs';

import { Add } from './add';
import { Remove } from './remove';

export function Config(): CommandModule<{}, {}> {
  return {
    command: 'config',
    aliases: 'c',
    describe: 'configure a project',
    builder: (b) => {
      return b.command(Add()).command(Remove()).demandCommand(1);
    },
    handler: () => {},
  };
}
