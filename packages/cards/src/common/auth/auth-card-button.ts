/**
 * Defines a button as displayed when prompting a user to authenticate. This maps to the cardAction type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.cardaction).
 */
export interface AuthCardButton {
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

export type AuthCardButtonParams = Omit<AuthCardButton, 'type' | 'value'>;

/**
 * Defines a button as displayed when prompting a user to authenticate. This maps to the cardAction type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.cardaction).
 */
export function AuthCardButton(
  type: string,
  value: string,
  params: AuthCardButtonParams
): AuthCardButton {
  return {
    type,
    value,
    ...params,
  };
}
