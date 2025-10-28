import { Activity } from '../../activities';

import { MessagingExtensionAttachment } from './messaging-extension-attachment';
import { MessagingExtensionAttachmentLayout } from './messaging-extension-attachment-layout';
import { MessagingExtensionSuggestedAction } from './messaging-extension-suggested-action';

/**
 * Defines values for MessagingExtensionResultType.
 * Possible values include: 'result', 'auth', 'config', 'message', 'botMessagePreview', 'silentAuth'.
 *
 * @readonly
 * @enum {string}
 */
export type MessagingExtensionResultType =
  | 'result'
  | 'auth'
  | 'config'
  | 'message'
  | 'botMessagePreview'
  | 'silentAuth';

/**
 *
 * An interface representing MessagingExtensionResult.
 * Messaging extension result
 *
 */
export type MessagingExtensionResult = {
  /**
   * @member {MessagingExtensionAttachmentLayout} [attachmentLayout] Hint for how to deal with
   * multiple attachments. Possible values include: 'list', 'grid'
   */
  attachmentLayout?: MessagingExtensionAttachmentLayout;

  /**
   * @member {MessagingExtensionResultType} [type] The type of the result. Possible values include:
   * 'result', 'auth', 'config', 'message', 'botMessagePreview'
   */
  type?: MessagingExtensionResultType;

  /**
   * @member {MessagingExtensionAttachment[]} [attachments] (Only when type is
   * result) Attachments
   */
  attachments?: MessagingExtensionAttachment[];

  /**
   * @member {MessagingExtensionSuggestedAction} [suggestedActions]
   */
  suggestedActions?: MessagingExtensionSuggestedAction;

  /**
   * @member {string} [text] (Only when type is message) Text
   */
  text?: string;

  /**
   * @member {Activity} [activityPreview] (Only when type is botMessagePreview)
   * Message activity to preview
   */
  activityPreview?: Activity;
};
