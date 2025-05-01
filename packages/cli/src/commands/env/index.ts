import { CommandModule } from 'yargs';

import { IContext } from '../../context';

import { Del } from './del';
import { Export } from './export';
import { List } from './list';
import { Select } from './select';
import { Set } from './set';

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
