import { ExecuteAction, OpenUrlAction, SubmitAction, ToggleVisibilityAction } from '../actions';
import { BaseElement } from '../base';
import { Layout } from '../layouts';
import { BackgroundImage } from '../medias';

export interface BaseContainerElement extends BaseElement {
  /**
   * The layouts associated with the container. The container can dynamically switch from one layout to another as the card's width changes. See Container layouts for more details.
   */
  layouts?: Array<Layout>;

  /**
   * Specifies the background image. Acceptable formats are PNG, JPEG, and GIF
   */
  backgroundImage?: BackgroundImage | string;

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
  selectAction?: ExecuteAction | OpenUrlAction | SubmitAction | ToggleVisibilityAction;
}
