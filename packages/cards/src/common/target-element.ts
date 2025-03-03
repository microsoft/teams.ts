/**
 * Represents an entry for Action.ToggleVisibility's targetElements property
 */
export interface TargetElement {
  type: 'TargetElement';

  /**
   * Element ID of element to toggle
   */
  elementId: string;

  /**
   * If `true`, always show target element. If `false`, always hide target element. If not supplied, toggle target element's visibility.
   */
  isVisible?: boolean | null;
}
