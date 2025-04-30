import { Attachment } from '../attachment';

/**
 *
 * An interface representing BaseTaskModuleTaskInfo.
 *
 */
export type BaseTaskModuleTaskInfo = {
  /**
   * @member {string} [title] Appears below the app name and to the right of
   * the app icon.
   */
  title?: string;

  /**
   * @member {number | 'small' | 'medium' | 'large'} [height] This can be a number, representing the task
   * module's height in pixels, or a string, one of: small, medium, large.
   */
  height?: number | 'small' | 'medium' | 'large';

  /**
   * @member {number | 'small' | 'medium' | 'large'} [width] This can be a number, representing the task module's
   * width in pixels, or a string, one of: small, medium, large.
   */
  width?: number | 'small' | 'medium' | 'large';

  /**
   * @member {string} [fallbackUrl] If a client does not support the task
   * module feature, this URL is opened in a browser tab.
   */
  fallbackUrl?: string;

  /**
   * @member {string} [completionBotId] If a client does not support the task
   * module feature, this URL is opened in a browser tab.
   */
  completionBotId?: string;
};

/**
 *
 * An interface representing CardTaskModuleTaskInfo.
 *
 */
export type CardTaskModuleTaskInfo = BaseTaskModuleTaskInfo & {
  /**
   * @member {Attachment} [card] The JSON for the Adaptive card to appear in
   * the task module.
   */
  card: Attachment;
};

/**
 *
 * An interface representing UrlTaskModuleTaskInfo.
 *
 */
export type UrlTaskModuleTaskInfo = BaseTaskModuleTaskInfo & {
  /**
   * @member {string} [url] The URL of what is loaded as an iframe inside the
   * task module.
   */
  url: string;
};

/**
 *
 * An interface representing TaskModuleTaskInfo.
 * Metadata for a Task Module.
 *
 */
export type TaskModuleTaskInfo = CardTaskModuleTaskInfo | UrlTaskModuleTaskInfo;
