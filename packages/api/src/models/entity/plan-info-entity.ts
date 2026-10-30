import type { CitationIconName } from './citation-entity';

import type { Entity } from './index';

/**
 * Plan lifecycle operation.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export type PlanType = 'start' | 'continue' | 'complete' | 'stop' | 'error';

/**
 * Progress state of a Plan step.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export type StepStatus = 'active' | 'proposed' | 'completed' | 'blocked' | 'error';

/**
 * A source displayed alongside a step.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export type StepSource = {
  /** Display title of the source. */
  title: string;
  /** URL of the source. */
  url: string;
  /** Optional icon from the shared citation icon names. */
  icon?: CitationIconName;
};

/**
 * A versioned progress update; the application owns ordering and execution.
 * Keep the same ID and increment the version whenever any step field changes.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export type Step = {
  /** Stable identifier for this step within the Plan. */
  id: string;
  /** Revision number; increment for every status, title, description, or source change. */
  version: number;
  /** Display title of the step. */
  title: string;
  /** Current progress state. */
  status: StepStatus;
  /** Optional details about the work or current state. */
  description?: string;
  /** Optional reference sources associated with this step. */
  sources?: StepSource[];
};

/**
 * Prompt-bound Plan metadata carried in an activity's entities.
 * Start begins a Plan, continue adds or updates steps, and the remaining operations end it.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export type PlanInfoEntity = {
  /** Wire discriminator for Plan metadata. */
  readonly type: 'planInfo';
  /** Lifecycle operation to send. */
  planType: PlanType;
  /** Optional step updates; increment the version of every changed step. */
  steps?: Step[];
};

/**
 * Read the first Plan entity from an activity, if present.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsPlan
 */
export function getPlanInfo(activity: { entities?: readonly Entity[] }): PlanInfoEntity | undefined {
  return activity.entities?.find((entity): entity is PlanInfoEntity => entity.type === 'planInfo');
}
