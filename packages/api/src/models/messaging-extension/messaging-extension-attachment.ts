import { Attachment } from '../attachment';

/**
 *
 * An interface representing MessagingExtensionAttachment.
 * Messaging extension attachment.
 *
 * @extends Attachment
 */
export type MessagingExtensionAttachment = Attachment & {
  /**
   * @member {Attachment} [preview]
   */
  preview?: Attachment;
};
