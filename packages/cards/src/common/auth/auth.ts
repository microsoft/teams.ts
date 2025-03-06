import { IAuthCardButton } from './auth-card-button';
import { ITokenExchangeResource } from './token-exchange-resource';

/**
 * Defines authentication information associated with a card. This maps to the OAuthCard type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.oauthcard)
 */
export interface IAuth {
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
  tokenExchangeResource?: ITokenExchangeResource;

  /**
   * Buttons that should be displayed to the user when prompting for authentication. The array MUST contain one button of type “signin”. Other button types are not currently supported.
   */
  buttons?: IAuthCardButton[];
}

/**
 * Defines authentication information associated with a card. This maps to the OAuthCard type defined by the Bot Framework (https://docs.microsoft.com/dotnet/api/microsoft.bot.schema.oauthcard)
 */
export class Auth implements IAuth {
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
  tokenExchangeResource?: ITokenExchangeResource;

  /**
   * Buttons that should be displayed to the user when prompting for authentication. The array MUST contain one button of type “signin”. Other button types are not currently supported.
   */
  buttons?: IAuthCardButton[];

  constructor(options: IAuth = {}) {
    Object.assign(this, options);
  }

  withText(value: string) {
    this.text = value;
    return this;
  }

  withConnectionName(value: string) {
    this.connectionName = value;
    return this;
  }

  withTokenExchangeResource(value: ITokenExchangeResource) {
    this.tokenExchangeResource = value;
    return this;
  }

  addButtons(...value: IAuthCardButton[]) {
    if (!this.buttons) {
      this.buttons = [];
    }

    this.buttons.push(...value);
    return this;
  }
}
