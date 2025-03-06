import { IActivity } from '../activity';

export interface IUnInstalledActivity extends IActivity<'installationUpdate'> {
  /**
   * install update action
   */
  action: 'remove';
}
