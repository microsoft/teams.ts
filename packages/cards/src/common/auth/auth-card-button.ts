/**
 * Defines a button as displayed when prompting a user to authenticate. This maps to the cardAction type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.cardaction).
 */
export interface IAuthCardButton {
  /**
   * The type of the button.
   */
  type: string;

  /**
   * The value associated with the button. The meaning of value depends on the button’s type.
   */
  value: string;

  /**
   * The caption of the button.
   */
  title?: string;

  /**
   * A URL to an image to display alongside the button’s caption.
   */
  image?: string;
}

export type AuthCardButtonOptions = Omit<IAuthCardButton, 'type' | 'value'>;

/**
 * Defines a button as displayed when prompting a user to authenticate. This maps to the cardAction type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.cardaction).
 */
export class AuthCardbutton implements IAuthCardButton {
  /**
   * The type of the button.
   */
  type: string;

  /**
   * The value associated with the button. The meaning of value depends on the button’s type.
   */
  value: string;

  /**
   * The caption of the button.
   */
  title?: string;

  /**
   * A URL to an image to display alongside the button’s caption.
   */
  image?: string;

  constructor(type: string, value: string, options: AuthCardButtonOptions = {}) {
    this.type = type;
    this.value = value;
    Object.assign(this, options);
  }

  withType(value: string) {
    this.type = value;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  withTitle(value: string) {
    this.title = value;
    return this;
  }

  withImage(value: string) {
    this.image = value;
    return this;
  }
}
