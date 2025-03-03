import { CommandResultActivity } from './command-result';
import { CommandSendActivity } from './command-send';

export type CommandActivity<T = any> = CommandSendActivity<T> | CommandResultActivity<T>;

export * from './command-result';
export * from './command-send';
