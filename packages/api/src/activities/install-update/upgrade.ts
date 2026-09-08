import { IActivity } from '../activity';

/**
 * An installation update activity sent when an installed app is upgraded.
 */
export interface IInstalledUpgradeActivity extends IActivity<'installationUpdate'> {
  /**
   * Install update action indicating the app was upgraded.
   */
  action: 'upgrade';
}
