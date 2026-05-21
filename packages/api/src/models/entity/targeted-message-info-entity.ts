/**
 * Entity that carries the messageId of the original targeted message
 * for prompt preview rendering.
 *
 * @experimental This API is in preview and may change in the future.
 * Diagnostic: ExperimentalTeamsTargeted
 */
export type TargetedMessageInfoEntity = {
  readonly type: 'targetedMessageInfo';

  /**
   * The message ID of the targeted message.
   */
  messageId: string;

  /**
   * other properties
   */
  [key: string]: any;
};
