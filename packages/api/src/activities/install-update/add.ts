import { ActivityBase } from '../base';

export interface InstalledActivity extends ActivityBase {
  readonly type: 'installationUpdate';

  /**
   * install update action
   */
  action: 'add';
}
