export type MessageEntity = {
  readonly type: 'https://schema.org/Message';

  /**
   * Required as 'Message'
   */
  '@type': 'Message';

  /**
   * Required as 'https://schema.org'
   */
  '@context': 'https://schema.org';

  /**
   * Must be left blank. This is for Bot Framework schema.
   */
  '@id': '';

  /**
   * additional content type tags
   */
  additionalType?: string[];

  /**
   * other properties
   */
  [key: string]: any;
};
