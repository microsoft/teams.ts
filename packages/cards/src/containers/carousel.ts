import { Action } from '../actions';
import { BaseElement } from '../base';
import { VerticalAlignment } from '../common';
import { Element } from '../element';
import { Layout } from '../layouts';
import { BackgroundImage } from '../medias';
import { ContainerStyle } from './container';

/**
 * A carousel with sliding pages.
 */
export interface Carousel extends BaseElement {
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
  pages: CarouselPage[];
}

export type CarouselParams = Omit<Carousel, 'type' | 'pages'>;

/**
 * A carousel with sliding pages.
 */
export function Carousel(pages: CarouselPage[] = [], params?: CarouselParams): Carousel {
  return {
    type: 'Carousel',
    pages,
    ...params,
  };
}

/**
 * A page inside a Carousel element.
 */
export interface CarouselPage extends BaseElement {
  type: 'CarouselPage';

  /**
   * The card elements to render inside the `CarouselPage`.
   */
  items: Element[];

  /**
   * Specifies the background image. Acceptable formats are `PNG`, `JPEG`, and `GIF`
   */
  backgroundImage?: BackgroundImage | string;

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

export type CarouselPageParams = Omit<CarouselPage, 'type' | 'items'>;

/**
 * A page inside a Carousel element.
 */
export function CarouselPage(items: Element[] = [], params?: CarouselPageParams): CarouselPage {
  return {
    type: 'CarouselPage',
    items,
    ...params,
  };
}
