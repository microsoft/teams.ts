import { FrameContext } from '../window';

/**
 * Represents Page information.
 */
export type PageContext = {
  /**
   * The developer-defined unique ID for the page this content points to.
   */
  id: string;

  /**
   * The context where page url is loaded (content, task, setting, remove, sidePanel)
   */
  frameContext: FrameContext;

  /**
   * The developer-defined unique ID for the sub-page this content points to.
   * This field should be used to restore to a specific state within a page,
   * such as scrolling to or activating a specific piece of content.
   */
  subPageId?: string;

  /**
   * Indication whether the page is in full-screen mode.
   */
  isFullScreen?: boolean;

  /**
   * Indication whether the page is in a pop out window
   */
  isMultiWindow?: boolean;

  /**
   * Indicates whether the page is being loaded in the background as
   * part of an opt-in performance enhancement.
   */
  isBackgroundLoad?: boolean;

  /**
   * Source origin from where the page is opened
   */
  sourceOrigin?: string;
};
