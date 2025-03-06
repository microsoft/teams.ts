import { Activity } from '../../activities';
import { Message } from '../message';
import { TaskModuleRequest } from '../task-module';

/**
 *
 * An interface representing MessagingExtensionAction.
 * Messaging extension action
 *
 * @extends TaskModuleRequest
 */
export type MessagingExtensionAction = TaskModuleRequest & {
  /**
   * @member {string} [commandId] Id of the command assigned by Bot
   */
  commandId?: string;

  /**
   * @member {CommandContext} [commandContext] The context from which the
   * command originates. Possible values include: 'message', 'compose',
   * 'commandbox'
   */
  commandContext: 'message' | 'compose' | 'commandbox';

  /**
   * @member {BotMessagePreviewActionType} [botMessagePreviewAction] Bot message
   * preview action taken by user. Possible values include: 'edit', 'send'
   */
  botMessagePreviewAction: 'edit' | 'send';

  /**
   * @member {Activity[]} [botActivityPreview]
   */
  botActivityPreview?: Activity[];

  /**
   * @member {MessageActionsPayload} [messagePayload] Message content sent as
   * part of the command request.
   */
  messagePayload?: Message;
};
