import { IActivity } from '../activity';

export interface IInstalledActivity extends IActivity<'installationUpdate'> {
  /**
   * install update action
   */
  action: 'add';
}
