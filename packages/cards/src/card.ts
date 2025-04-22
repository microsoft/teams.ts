import { Action, SelectAction } from './actions';
import { IAuth, Refresh, VerticalAlignment } from './common';
import { IBackgroundImage } from './medias';
import { Element } from './element';

/**
 * An Adaptive Card, containing a free-form body of card elements, and an optional set of actions.
 */
export interface ICard {
  type: 'AdaptiveCard';

  /**
   * The Adaptive Card schema.
   */
  $schema?: string;

  /**
   * Schema version that this card requires. If a client is lower than this version, the fallbackText will be rendered. NOTE: Version is not required for cards within an Action.ShowCard. However, it is required for the top-level card.
   */
  version: '1.0' | '1.1' | '1.2' | '1.3' | '1.4' | '1.5' | '1.6';

  /**
   * Defines how the card can be refreshed by making a request to the target Bot.
   */
  refresh?: Refresh;

  /**
   * Defines authentication information to enable on-behalf-of single sign on or just-in-time OAuth.
   */
  authentication?: IAuth;

  /**
   * The card elements to show in the primary card region.
   */
  body?: Element[];

  /**
   * The Actions to show in the card’s action bar.
   */
  actions?: Action[];

  /**
   * An Action that will be invoked when the card is tapped or selected. Action.ShowCard is not supported.
   */
  selectAction?: SelectAction;

  /**
   * Text shown when the client doesn’t support the version specified (may contain markdown).
   */
  fallbackText?: string;

  /**
   * Specifies the background image of the card.
   */
  backgroundImage?: IBackgroundImage | string;

  /**
   * Specifies the minimum height of the card.
   */
  minHeight?: string;

  /**
   * When true content in this Adaptive Card should be presented right to left. When ‘false’ content in this Adaptive Card should be presented left to right. If unset, the default platform behavior will apply.
   */
  rtl?: boolean;

  /**
   * Specifies what should be spoken for this entire card. This is simple text or SSML fragment.
   */
  speak?: string;

  /**
   * The 2-letter ISO-639-1 language used in the card. Used to localize any date/time functions.
   */
  lang?: string;

  /**
   * Defines how the content should be aligned vertically within the container. Only relevant for fixed-height cards, or cards with a minHeight specified.
   */
  verticalContentAlignment?: VerticalAlignment;

  /**
   * Extra Teams data for the card.
   */
  msteams?: MSTeamsCardInfo;
}

/**
 * Card metadata for Microsoft Teams.
 */
export type MSTeamsCardInfo = {
  /**
   * Expands the card to take up the full width of the message.
   */
  width?: 'Full';

  /**
   * Conditional visibility of elements on different viewports.
   */
  targetWidth?:
    | 'veryNarrow'
    | 'narrow'
    | 'standard'
    | 'wide'
    | 'atLeast:veryNarrow'
    | 'atLeast:narrow'
    | 'atLeast:standard'
    | 'atLeast:wide'
    | 'atMost:veryNarrow'
    | 'atMost:narrow'
    | 'atMost:standard'
    | 'atMost:wide';
};

export type CardOptions = Omit<Partial<ICard>, 'body' | 'type' | 'msteams'> &
  Partial<MSTeamsCardInfo>;

/**
 * An Adaptive Card, containing a free-form body of card elements, and an optional set of actions.
 */
export class Card implements ICard {
  type: 'AdaptiveCard';

  /**
   * The Adaptive Card schema.
   */
  $schema?: string;

  /**
   * Schema version that this card requires. If a client is lower than this version, the fallbackText will be rendered. NOTE: Version is not required for cards within an Action.ShowCard. However, it is required for the top-level card.
   */
  version: '1.0' | '1.1' | '1.2' | '1.3' | '1.4' | '1.5' | '1.6';

  /**
   * Defines how the card can be refreshed by making a request to the target Bot.
   */
  refresh?: Refresh;

  /**
   * Defines authentication information to enable on-behalf-of single sign on or just-in-time OAuth.
   */
  authentication?: IAuth;

  /**
   * The card elements to show in the primary card region.
   */
  body: Element[];

  /**
   * The Actions to show in the card’s action bar.
   */
  actions?: Action[];

  /**
   * An Action that will be invoked when the card is tapped or selected. Action.ShowCard is not supported.
   */
  selectAction?: SelectAction;

  /**
   * Text shown when the client doesn’t support the version specified (may contain markdown).
   */
  fallbackText?: string;

  /**
   * Specifies the background image of the card.
   */
  backgroundImage?: IBackgroundImage | string;

  /**
   * Specifies the minimum height of the card.
   */
  minHeight?: string;

  /**
   * When true content in this Adaptive Card should be presented right to left. When ‘false’ content in this Adaptive Card should be presented left to right. If unset, the default platform behavior will apply.
   */
  rtl?: boolean;

  /**
   * Specifies what should be spoken for this entire card. This is simple text or SSML fragment.
   */
  speak?: string;

  /**
   * The 2-letter ISO-639-1 language used in the card. Used to localize any date/time functions.
   */
  lang?: string;

  /**
   * Defines how the content should be aligned vertically within the container. Only relevant for fixed-height cards, or cards with a minHeight specified.
   */
  verticalContentAlignment?: VerticalAlignment;

  /**
   * Extra Teams data for the card.
   */
  msteams?: MSTeamsCardInfo;

  constructor(...body: Element[]) {
    this.type = 'AdaptiveCard';
    this.body = body;
    this.version = '1.6';
  }

  withOptions(value: CardOptions) {
    Object.assign(this, value);
    return this;
  }

  withSchema(value: string) {
    this.$schema = value;
    return this;
  }

  withVersion(value: '1.0' | '1.1' | '1.2' | '1.3' | '1.4' | '1.5' | '1.6') {
    this.version = value;
    return this;
  }

  withRefresh(value: Refresh) {
    this.refresh = value;
    return this;
  }

  withAuth(value: IAuth) {
    this.authentication = value;
    return this;
  }

  withSelectedAction(value: SelectAction) {
    this.selectAction = value;
    return this;
  }

  withBody(...value: Element[]) {
    this.body = value;
    return this;
  }

  addCards(...value: Element[]) {
    this.body.push(...value);
    return this;
  }

  addActions(...value: Action[]) {
    if (!this.actions) {
      this.actions = [];
    }

    this.actions.push(...value);
    return this;
  }
}

/**
 * @hidden
 * @internal
 *
 * Type guard to check if a value is a Card.
 * @param value value to compare
 * @returns true if value is type of Card
 */
export function isCard(value: any): value is ICard {
  return typeof value === 'object' && value.type === 'AdaptiveCard';
}
