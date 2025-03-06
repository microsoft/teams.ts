import { ICommandResultActivity } from './command-result';
import { ICommandSendActivity } from './command-send';

export type CommandActivity<T = any> = ICommandSendActivity<T> | ICommandResultActivity<T>;

export * from './command-result';
export * from './command-send';
