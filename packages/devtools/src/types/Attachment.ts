/**
 * Represents an attachment in the UI
 */
export interface AttachmentType {
  /**
   * Type of attachment
   */
  type: 'card' | 'file' | 'image';

  /**
   * Content of the attachment - could be a URL, card object, or other content
   */
  content: any;

  /**
   * Optional name of the attachment
   */
  name?: string;
}
