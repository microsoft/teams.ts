import { MessageEntity } from './message-entity';

export type SensitiveUsageEntity = MessageEntity & {
  /**
   * As part of the usage field
   */
  usageInfo?: SensitiveUsage;
};

export type SensitiveUsage = {
  /** @deprecated Not part of the usageInfo contract. */
  readonly type?: 'https://schema.org/Message';

  /**
   * The schema.org type, typically 'CreativeWork'
   */
  '@type': string;

  /**
   * The Purview sensitivity label ID
   */
  '@id'?: string;

  /**
   * Title of the content
   */
  name?: string;

  /**
   * Description of the content
   */
  description?: string;

  /**
   * Priority of the label, used to pick the most restrictive label
   */
  position?: number;

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
};
