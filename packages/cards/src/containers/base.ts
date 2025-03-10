import { SelectAction } from '../actions';
import { IElement, Element } from '../base';
import { Layout } from '../layouts';
import { IBackgroundImage } from '../medias';

export interface IContainerElement extends IElement {
  /**
   * The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See Container layouts for more details.
   */
  layouts?: Array<Layout>;

  /**
   * Specifies the background image. Acceptable formats are PNG, JPEG, and GIF
   */
  backgroundImage?: IBackgroundImage | string;

  /**
   * Determines whether the column should bleed through its parent's padding.
   */
  bleed?: boolean;

  /**
   * Controls if the container should have rounded corners.
   * @default false
   */
  roundedCorners?: boolean;

  /**
   * When `true` content in this container should be presented right to left. When 'false' content in this container should be presented left to right. When unset layout direction will inherit from parent container or column. If unset in all ancestors, the default platform behavior will apply.
   */
  rtl?: boolean | null;

  /**
   * Controls if a border should be displayed around the container.
   * @default false
   */
  showBorder?: boolean;

  /**
   * An Action that will be invoked when the `Container` is tapped or selected. `Action.ShowCard` is not supported.
   */
  selectAction?: SelectAction;
}

export class ContainerElement extends Element implements IContainerElement {
  /**
   * The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See Container layouts for more details.
   */
  layouts?: Array<Layout>;

  /**
   * Specifies the background image. Acceptable formats are PNG, JPEG, and GIF
   */
  backgroundImage?: IBackgroundImage | string;

  /**
   * Determines whether the column should bleed through its parent's padding.
   */
  bleed?: boolean;

  /**
   * Controls if the container should have rounded corners.
   * @default false
   */
  roundedCorners?: boolean;

  /**
   * When `true` content in this container should be presented right to left. When 'false' content in this container should be presented left to right. When unset layout direction will inherit from parent container or column. If unset in all ancestors, the default platform behavior will apply.
   */
  rtl?: boolean | null;

  /**
   * Controls if a border should be displayed around the container.
   * @default false
   */
  showBorder?: boolean;

  /**
   * An Action that will be invoked when the `Container` is tapped or selected. `Action.ShowCard` is not supported.
   */
  selectAction?: SelectAction;

  withLayouts(...value: Layout[]) {
    this.layouts = value;
    return this;
  }

  withBackgroundImage(value: IBackgroundImage | string) {
    this.backgroundImage = value;
    return this;
  }

  withBleed(value = true) {
    this.bleed = value;
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

  withSelectAction(value: SelectAction) {
    this.selectAction = value;
    return this;
  }
}
