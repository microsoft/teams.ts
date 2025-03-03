import { Attachment } from '../attachment';

/**
 * @interface
 * An interface representing MessagingExtensionAttachment.
 * Messaging extension attachment.
 *
 * @extends Attachment
 */
export interface MessagingExtensionAttachment extends Attachment {
  /**
   * @member {Attachment} [preview]
   */
  preview?: Attachment;
}
