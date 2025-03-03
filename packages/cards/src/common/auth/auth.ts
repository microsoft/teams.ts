import { AuthCardButton } from './auth-card-button';
import { TokenExchangeResource } from './token-exchange-resource';

/**
 * Defines authentication information associated with a card. This maps to the OAuthCard type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.oauthcard)
 */
export interface Auth {
  /**
   * Text that can be displayed to the end user when prompting them to authenticate.
   */
  text?: string;

  /**
   * The identifier for registered OAuth connection setting information.
   */
  connectionName?: string;

  /**
   * Provides information required to enable on-behalf-of single sign-on user authentication.
   */
  tokenExchangeResource?: TokenExchangeResource;

  /**
   * Buttons that should be displayed to the user when prompting for authentication. The array MUST contain one button of type “signin”. Other button types are not currently supported.
   */
  buttons?: AuthCardButton[];
}

export type AuthParams = Auth;

/**
 * Defines authentication information associated with a card. This maps to the OAuthCard type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.oauthcard)
 */
export function Auth(params: AuthParams): Auth {
  return params;
}
