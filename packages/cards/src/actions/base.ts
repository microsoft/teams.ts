import { Action } from '.';

export interface BaseAction {
  /**
   * A unique identifier associated with this Action.
   */
  id?: string;

  /**
   * Label for button or link that represents this action.
   */
  title?: string;

  /**
   * Optional icon to be shown on the action in conjunction with the title. Supports data URI in version 1.2+
   */
  iconUrl?: string;

  /**
   * Controls the style of an Action, which influences how the action is displayed, spoken, etc.
   */
  style?: 'default' | 'positive' | 'destructive';

  /**
   * Describes what to do when an unknown element is encountered or the requires of this or any children can’t be met.
   */
  fallback?: Action | string;

  /**
   * Determines whether an action is displayed with a button or is moved to the overflow menu.
   */
  mode?: 'primary' | 'secondary';

  /**
   * Defines text that should be displayed to the end user as they hover the mouse over the action, and read when using narration software.
   */
  tooltip?: string;

  /**
   * Determines whether the action should be enabled.
   */
  isEnabled?: boolean;

  /**
   * A series of key/value pairs indicating features that the item requires with corresponding minimum version. When a feature is missing or of insufficient version, fallback is triggered.
   */
  requires?: Record<string, string>;
}
