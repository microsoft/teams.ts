import { IInstalledActivity } from './add';
import { IUnInstalledActivity } from './remove';

export type InstallUpdateActivity = IInstalledActivity | IUnInstalledActivity;

export * from './add';
export * from './remove';
