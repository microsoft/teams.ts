export interface SensitiveUsageEntity {
  readonly type: 'https://schema.org/Message';

  /**
   * Required as 'CreativeWork'
   */
  '@type': 'CreativeWork';

  /**
   * Title of the content
   */
  name: string;

  /**
   * Description of the content
   */
  description?: string;

  /**
   * The pattern
   */
  pattern?: {
    '@type': 'DefinedTerm';
    inDefinedTermSet: string;
    name: string;
    termCode: string;
  };

  /**
   * other properties
   */
  [key: string]: any;
}
