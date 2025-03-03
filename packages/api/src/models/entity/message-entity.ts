export interface MessageEntity {
  readonly type: 'message';

  /**
   * additional content type tags
   */
  additionalType?: string[];

  /**
   * other properties
   */
  [key: string]: any;
}
