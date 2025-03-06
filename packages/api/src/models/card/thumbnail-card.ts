import { CardAction } from './card-action';
import { CardImage } from './card-image';

/**
 * A thumbnail card (card with a single, small thumbnail image)
 */
export type ThumbnailCard = {
  /**
   * Title of the card
   */
  title?: string;

  /**
   * Subtitle of the card
   */
  subtitle?: string;

  /**
   * Text for the card
   */
  text?: string;

  /**
   * Array of images for the card
   */
  images?: CardImage[];

  /**
   * Set of actions applicable to the current card
   */
  buttons?: CardAction[];

  /**
   * This action will be activated when user taps on the card itself
   */
  tap?: CardAction;
};
