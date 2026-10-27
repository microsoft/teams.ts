import type { Entity } from './index';

export type PlanType = 'start' | 'continue' | 'complete' | 'stop' | 'error';

export type StepStatus = 'active' | 'proposed' | 'completed' | 'blocked' | 'error';

/** A source displayed alongside a step. */
export type StepSource = {
  title: string;
  url: string;
  icon?: string;
};

/** A versioned progress update; the application owns ordering and execution. */
export type Step = {
  id: string;
  version: number;
  title: string;
  status: StepStatus;
  description?: string;
  sources?: StepSource[];
};

/** Prompt-bound Plan metadata carried in an activity's entities. */
export type PlanInfoEntity = {
  readonly type: 'planInfo';
  planType: PlanType;
  steps?: Step[];
};

export function getPlanInfo(activity: { entities?: readonly Entity[] }): PlanInfoEntity | undefined {
  const entities = activity.entities?.filter((entity): entity is PlanInfoEntity => entity.type === 'planInfo') ?? [];

  if (entities.length > 1) {
    throw new TypeError('An activity must contain at most one planInfo entity.');
  }

  return entities[0];
}
