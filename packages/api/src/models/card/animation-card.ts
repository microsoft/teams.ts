import { CardAction } from './card-action';
import { MediaUrl } from './media-url';
import { ThumbnailUrl } from './thumbnail-url';

/**
 * An animation card (Ex: gif or short video clip)
 */
export type AnimationCard = {
  /**
   * Title of this card
   */
  title?: string;

  /**
   * Subtitle of this card
   */
  subtitle?: string;

  /**
   * Text of this card
   */
  text?: string;

  /**
   * Thumbnail placeholder
   */
  image?: ThumbnailUrl;

  /**
   * Media URLs for this card. When this field contains more than one URL, each URL is an
   * alternative format of the same content.
   */
  media?: MediaUrl[];

  /**
   * Actions on this card
   */
  buttons?: CardAction[];

  /**
   * This content may be shared with others (default:true)
   */
  shareable?: boolean;

  /**
   * Should the client loop playback at end of content (default:true)
   */
  autoloop?: boolean;

  /**
   * Should the client automatically start playback of media in this card (default:true)
   */
  autostart?: boolean;

  /**
   * Aspect ratio of thumbnail/media placeholder. Allowed values are "16:9" and "4:3"
   */
  aspect?: string;

  /**
   * Describes the length of the media content without requiring a receiver to open the content.
   * Formatted as an ISO 8601 Duration field.
   */
  duration?: string;

  /**
   * Supplementary parameter for this card
   */
  value?: any;
};
