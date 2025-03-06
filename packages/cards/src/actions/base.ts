export interface IAction {
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
  fallback?: IAction | string;

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

export class Action implements IAction {
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
  fallback?: IAction | string;

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

  constructor(value: IAction = {}) {
    Object.assign(this, value);
  }

  withId(value: string) {
    this.id = value;
    return this;
  }

  withTitle(value: string) {
    this.title = value;
    return this;
  }

  withIconUrl(value: string) {
    this.iconUrl = value;
    return this;
  }

  withStyle(value: 'default' | 'positive' | 'destructive') {
    this.style = value;
    return this;
  }

  withFallback(value: IAction | string) {
    this.fallback = value;
    return this;
  }

  withMode(value: 'primary' | 'secondary') {
    this.mode = value;
    return this;
  }

  withTooltip(value: string) {
    this.tooltip = value;
    return this;
  }

  withEnabled(value = true) {
    this.isEnabled = value;
    return this;
  }

  withRequires(value: Record<string, string>) {
    this.requires = value;
    return this;
  }

  withRequire(key: string, value: string) {
    if (!this.requires) {
      this.requires = {};
    }

    this.requires[key] = value;
    return this;
  }
}
