import { IInstalledActivity } from './add';
import { IUnInstalledActivity } from './remove';
import { IInstalledUpgradeActivity } from './upgrade';

/**
 * An activity sent when an app installation is added, removed, or upgraded.
 */
export type InstallUpdateActivity =
  | IInstalledActivity
  | IUnInstalledActivity
  | IInstalledUpgradeActivity;

export * from './add';
export * from './remove';
export * from './upgrade';
