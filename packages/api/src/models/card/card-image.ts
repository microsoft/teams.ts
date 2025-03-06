import { CardAction } from './card-action';

/**
 * An image on a card
 */
export type CardImage = {
  /**
   * URL thumbnail image for major content property
   */
  url: string;

  /**
   * Image description intended for screen readers
   */
  alt?: string;

  /**
   * Action assigned to specific Attachment
   */
  tap?: CardAction;
};
