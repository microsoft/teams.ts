import { EnvStorage } from './environment';
import { Settings } from './settings';

export interface IContext {
  readonly settings: Settings;
  readonly envs: EnvStorage;
}
