import { InstalledActivity } from './add';
import { UnInstalledActivity } from './remove';

export type InstallUpdateActivity = InstalledActivity | UnInstalledActivity;

export * from './add';
export * from './remove';
