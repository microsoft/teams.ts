import { CommandModule } from 'yargs';

import { IContext } from '../../context';
import { Set } from './set';
import { Del } from './del';
import { List } from './list';
import { Select } from './select';
import { Export } from './export';

export function Env(context: IContext): CommandModule<{}, {}> {
  return {
    command: 'env',
    aliases: 'e',
    describe: 'manage environments',
    builder: (b) => {
      return b
        .command(List(context))
        .command(Select(context))
        .command(Set(context))
        .command(Del(context))
        .command(Export(context))
        .demandCommand(1);
    },
    handler: () => {},
  };
}
