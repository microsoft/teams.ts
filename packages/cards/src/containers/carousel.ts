import { Action } from '../actions';
import { IElement, Element as $Element } from '../base';
import { VerticalAlignment } from '../common';
import { Element } from '../element';
import { Layout } from '../layouts';
import { IBackgroundImage } from '../medias';

import { ContainerStyle } from './container';

/**
 * A carousel with sliding pages.
 */
export interface ICarousel extends IElement {
  type: 'Carousel';

  /**
   * Controls if the container should bleed into its parent. A bleeding container extends into its parent's padding.
   */
  bleed?: boolean;

  /**
   * The minimum height, in pixels, of the container, in the <number>px format.
   * @example `<number>px`
   */
  minHeight?: string;

  /**
   * Controls the type of animation to use to navigate between pages.
   * @default `slide`
   */
  pageAnimation?: 'slide' | 'crossFade' | 'none';

  /**
   * The pages in the carousel.
   */
  pages: ICarouselPage[];
}

export type CarouselOptions = Omit<ICarousel, 'type' | 'pages'>;

/**
 * A carousel with sliding pages.
 */
export class Carousel extends $Element implements ICarousel {
  type: 'Carousel';

  /**
   * Controls if the container should bleed into its parent. A bleeding container extends into its parent's padding.
   */
  bleed?: boolean;

  /**
   * The minimum height, in pixels, of the container, in the <number>px format.
   * @example `<number>px`
   */
  minHeight?: string;

  /**
   * Controls the type of animation to use to navigate between pages.
   * @default `slide`
   */
  pageAnimation?: 'slide' | 'crossFade' | 'none';

  /**
   * The pages in the carousel.
   */
  pages: ICarouselPage[];

  constructor(...pages: ICarouselPage[]) {
    super();
    this.type = 'Carousel';
    this.pages = pages;
  }

  withOptions(value: CarouselOptions) {
    Object.assign(this, value);
    return this;
  }

  withBleed(value = true) {
    this.bleed = value;
    return this;
  }

  withMinHeight(value: string) {
    this.minHeight = value;
    return this;
  }

  withPageAnimation(value: 'slide' | 'crossFade' | 'none' = 'slide') {
    this.pageAnimation = value;
    return this;
  }

  addPages(...value: ICarouselPage[]) {
    this.pages.push(...value);
    return this;
  }
}

/**
 * A page inside a Carousel element.
 */
export interface ICarouselPage extends IElement {
  type: 'CarouselPage';

  /**
   * The card elements to render inside the `CarouselPage`.
   */
  items: Element[];

  /**
   * Specifies the background image. Acceptable formats are `PNG`, `JPEG`, and `GIF`
   */
  backgroundImage?: IBackgroundImage | string;

  /**
   * The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See Container layouts for more details.
   */
  layouts?: Array<Layout>;

  /**
   * The maximum height, in pixels, of the container, in the <number>px format. When the content of a container exceeds the container's maximum height, a vertical scrollbar is displayed.
   * @example `<number>px`
   */
  maxHeight?: string;

  /**
   * The minimum height, in pixels, of the container, in the <number>px format.
   * @example `<number>px`
   */
  minHeight?: string;

  /**
   * Controls if the container should have rounded corners.
   * @default false
   */
  roundedCorners?: boolean;

  /**
   * Controls if the content of the card is to be rendered left-to-right or right-to-left.
   */
  rtl?: boolean;

  /**
   * Controls if a border should be displayed around the container.
   * @default false
   */
  showBorder?: boolean;

  /**
   * The style of the container. Container styles control the colors of the background, border and text inside the container, in such a way that contrast requirements are always met.
   */
  style?: ContainerStyle;

  /**
   * Controls how the container's content should be vertically aligned.
   */
  verticalContentAlignment?: VerticalAlignment;

  /**
   * An Action that will be invoked when the element is tapped or clicked. Action.ShowCard is not supported.
   */
  selectAction?: Action;
}

export type CarouselPageOptions = Omit<ICarouselPage, 'type' | 'items'>;

/**
 * A page inside a Carousel element.
 */
export class CarouselPage extends $Element implements ICarouselPage {
  type: 'CarouselPage';

  /**
   * The card elements to render inside the `CarouselPage`.
   */
  items: Element[];

  /**
   * Specifies the background image. Acceptable formats are `PNG`, `JPEG`, and `GIF`
   */
  backgroundImage?: IBackgroundImage | string;

  /**
   * The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See Container layouts for more details.
   */
  layouts?: Array<Layout>;

  /**
   * The maximum height, in pixels, of the container, in the <number>px format. When the content of a container exceeds the container's maximum height, a vertical scrollbar is displayed.
   * @example `<number>px`
   */
  maxHeight?: string;

  /**
   * The minimum height, in pixels, of the container, in the <number>px format.
   * @example `<number>px`
   */
  minHeight?: string;

  /**
   * Controls if the container should have rounded corners.
   * @default false
   */
  roundedCorners?: boolean;

  /**
   * Controls if the content of the card is to be rendered left-to-right or right-to-left.
   */
  rtl?: boolean;

  /**
   * Controls if a border should be displayed around the container.
   * @default false
   */
  showBorder?: boolean;

  /**
   * The style of the container. Container styles control the colors of the background, border and text inside the container, in such a way that contrast requirements are always met.
   */
  style?: ContainerStyle;

  /**
   * Controls how the container's content should be vertically aligned.
   */
  verticalContentAlignment?: VerticalAlignment;

  /**
   * An Action that will be invoked when the element is tapped or clicked. Action.ShowCard is not supported.
   */
  selectAction?: Action;

  constructor(...items: Element[]) {
    super();
    this.type = 'CarouselPage';
    this.items = items;
  }

  withOptions(value: CarouselPageOptions) {
    Object.assign(this, value);
    return this;
  }

  withBackgroundImage(value: IBackgroundImage | string) {
    this.backgroundImage = value;
    return this;
  }

  withMinHeight(value: string) {
    this.minHeight = value;
    return this;
  }

  withRoundedCorners(value = true) {
    this.roundedCorners = value;
    return this;
  }

  withRtl(value = true) {
    this.rtl = value;
    return this;
  }

  withShowBorder(value = true) {
    this.showBorder = value;
    return this;
  }

  withStyle(value: ContainerStyle) {
    this.style = value;
    return this;
  }

  withVeritcalAlignment(value: VerticalAlignment) {
    this.verticalContentAlignment = value;
    return this;
  }

  withSelectAction(value: Action) {
    this.selectAction = value;
    return this;
  }

  addLayouts(...value: Layout[]) {
    if (!this.layouts) {
      this.layouts = [];
    }

    this.layouts.push(...value);
    return this;
  }

  addCards(...value: Element[]) {
    this.items.push(...value);
    return this;
  }
}
