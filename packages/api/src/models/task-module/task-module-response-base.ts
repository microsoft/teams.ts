/**
 *
 * An interface representing TaskModuleResponseBase.
 * Base class for Task Module responses
 *
 */
export type TaskModuleResponseBase = {
  /**
   * @member {BotMessagePreviewType} [type] Choice of action options when responding to the
   * task/submit message. Possible values include: 'message', 'continue'
   */
  type?: 'message' | 'continue';
};
