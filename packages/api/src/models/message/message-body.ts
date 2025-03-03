/**
 * @interface
 * An interface representing MessageActionsPayloadBody.
 * Plaintext/HTML representation of the content of the message.
 *
 */
export interface MessageBody {
  /**
   * @member {ContentType} [contentType] Type of the content. Possible values
   * include: 'html', 'text'
   */
  contentType?: 'html' | 'text';

  /**
   * @member {string} [content] The content of the body.
   */
  content?: string;

  /**
   * @member {string} [textContent] The text content of the body after
   * stripping HTML tags.
   */
  textContent?: string;
}
