import {
  type AuthError,
  type Configuration,
  type IPublicClientApplication,
  InteractionRequiredAuthError,
  LogLevel,
  type SilentRequest,
} from '@azure/msal-browser';

import type { ILogger } from '@microsoft/teams.common';

/**
 * Checks if an error from the NAA bridge should be treated as requiring user interaction.
 * On Teams Desktop, the OneAuth/WAM broker may return errors like `ApiContractViolation`
 * (e.g., "declined scopes") that are not mapped to `InteractionRequiredAuthError` by MSAL,
 * but should still trigger a popup-based consent attempt.
 */
const shouldTryPopup = (ex: unknown): boolean => {
  if (ex instanceof InteractionRequiredAuthError) {
    return true;
  }

  // On Desktop (NAA via OneAuth), "ApiContractViolation" with declined scopes
  // indicates the broker couldn't silently satisfy the request -- try interactive.
  const errorCode = (ex as AuthError)?.errorCode ?? '';
  if (errorCode === 'ApiContractViolation') {
    return true;
  }

  return false;
};

/**
 * Gets a silent request used to acquire an Entra access token for invoking remote functions on behalf of a user.
 * @param resource The resource to use, e.g 'api://<clientId>'.
 * @param permission The permission to request. Defaults to 'access_as_user'.
 * @returns
 */
export const getStandardExecSilentRequest = (
  resource: string,
  permission = 'access_as_user'
): SilentRequest => ({
  scopes: [`${resource}/${permission}`],
});

/**
 * Builds a default MSAL configuration for the specified client ID.
 * @param clientId The application client ID.
 * @param logger The logger instance to use for logging MSAL events.
 * @returns A default MSAL configuration object suitable for creating a
 * @see{IPublicClientApplication} instance for a multi-tenant application.
 */
export const buildMsalConfig = (clientId: string, logger: ILogger): Configuration => {
  return {
    auth: {
      clientId,
      supportsNestedAppAuth: true,
      redirectUri: '/',
      postLogoutRedirectUri: '/',
    },
    system: {
      loggerOptions: {
        piiLoggingEnabled: false,
        loggerCallback: (level, message) => {
          switch (level) {
            case LogLevel.Error:
              logger.error(message);
              return;
            case LogLevel.Info:
              logger.info(message);
              return;
            case LogLevel.Verbose:
              logger.debug(message);
              return;
            case LogLevel.Warning:
              logger.warn(message);
              return;
            default:
              return;
          }
        },
      },
    },
  };
};

/**
 * Acquires an access token using MSAL. It first attempts to acquire the token silently,
 * and if that fails with an InteractionRequiredAuthError, it falls back to acquiring the
 * token via a popup.
 * @param msalInstance The MSAL instance to use for acquiring the token.
 * @param request The token request object.
 * @param logger The logger instance to use for logging errors.
 * @returns A promise that resolves to the acquired access token.
 */
export const acquireMsalAccessToken = async (
  msalInstance: Pick<IPublicClientApplication, 'acquireTokenSilent' | 'acquireTokenPopup'>,
  request: SilentRequest,
  logger: ILogger
): Promise<string> => {
  try {
    const response = await msalInstance.acquireTokenSilent(request);
    return response.accessToken;
  } catch (ex) {
    // InteractionRequiredAuthError or broker-level errors (e.g., ApiContractViolation on
    // Teams Desktop) indicate that the user may not have consented to the requested scope,
    // or the broker couldn't satisfy it silently -- fall back on acquireTokenPopup.
    if (!shouldTryPopup(ex)) {
      logger.error('acquireTokenSilent failed', ex);
      throw ex;
    }
  }

  try {
    logger.debug('acquireTokenSilent failed; trying acquireTokenPopup');
    const response = await msalInstance.acquireTokenPopup(request);
    return response.accessToken;
  } catch (ex) {
    const errorCode = (ex as AuthError)?.errorCode ?? '';
    if (errorCode === 'ApiContractViolation') {
      logger.error(
        'acquireTokenPopup failed with ApiContractViolation. On Teams Desktop, the OneAuth broker ' +
        'cannot resolve the \'.default\' scope. Set explicit scopes in msalOptions.prewarmScopes ' +
        '(e.g., [\'User.Read\']) for Desktop compatibility.',
        ex
      );
    } else {
      logger.error('acquireTokenPopup failed', ex);
    }
    throw ex;
  }
};

/**
 * Tests whether the user has consented to the specified scopes by attempting to acquire a token silently.
 * If the token acquisition is successful, it indicates that the user has consented to the scopes.
 * If it fails, it indicates that the user has not consented to the scopes.
 * @param msalInstance The MSAL instance to use.
 * @param scopes The scopes to check consent for. The scopes should not mix resources, or mix default scope with non-default scopes.
 * @param logger The logger instance to use.
 * @returns A promise that resolves to a boolean indicating whether the user has consented to the scopes.
 */
export const hasConsentForScopes = async (
  msalInstance: Pick<IPublicClientApplication, 'acquireTokenSilent'>,
  scopes: string[],
  logger: ILogger
): Promise<boolean> => {
  try {
    await msalInstance.acquireTokenSilent({
      scopes,
    });

    return true;
  } catch (ex) {
    // InteractionRequiredAuthError indicates that the user has not consented to the requested scope yet.
    // This is not an error, but may be interesting when trouble shooting.
    const acquireTokenPopupNeeded = ex instanceof InteractionRequiredAuthError;
    const logLevel = acquireTokenPopupNeeded ? 'debug' : 'error';
    logger.log(logLevel, 'hasConsentForScopes failed', ex);
    return false;
  }
};
