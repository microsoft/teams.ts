import { ActivityBase } from '../base';

export interface UnInstalledActivity extends ActivityBase {
  readonly type: 'installationUpdate';

  /**
   * install update action
   */
  action: 'remove';
}
