import { ActivityBase } from './base';

export interface HandoffActivity extends ActivityBase {
  readonly type: 'handoff';
}
