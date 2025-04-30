import * as msal from '@azure/msal-browser';

import { ILogger } from '@microsoft/teams.common/logging';

/**
 * Gets a silent request used to acquire an Entra access token for invoking remote functions on behalf of a user.
 * @param remoteClientId The client ID of the remote application.
 * @param permission The permission to request. Defaults to 'access_as_user'.
 * @returns
 */
export const getStandardExecSilentRequest = (
  remoteClientId: string,
  permission = 'access_as_user'
): msal.SilentRequest => ({
  scopes: [`api://${remoteClientId}/${permission}`],
});

/**
 * Builds a default MSAL configuration for the specified client ID.
 * @param clientId The application client ID.
 * @param logger The logger instance to use for logging MSAL events.
 * @returns A default MSAL configuration object suitable for creating a
 * @see{IPublicClientApplication} instance for a multi-tenant application.
 */
export const buildMsalConfig = (clientId: string, logger: ILogger): msal.Configuration => {
  return {
    auth: {
      clientId,
      authority: '',
      redirectUri: '/',
      postLogoutRedirectUri: '/',
    },
    system: {
      loggerOptions: {
        piiLoggingEnabled: false,
        loggerCallback: (level, message) => {
          switch (level) {
            case msal.LogLevel.Error:
              logger.error(message);
              return;
            case msal.LogLevel.Info:
              logger.info(message);
              return;
            case msal.LogLevel.Verbose:
              logger.debug(message);
              return;
            case msal.LogLevel.Warning:
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
  msalInstance: Pick<msal.IPublicClientApplication, 'acquireTokenSilent' | 'acquireTokenPopup'>,
  request: msal.SilentRequest,
  logger: ILogger
): Promise<string> => {
  try {
    const response = await msalInstance.acquireTokenSilent(request);
    return response.accessToken;
  } catch (ex) {
    // InteractionRequiredAuthError indicates that the user may not have consented to the requested
    // scope yet -- for this, we can fall back on acquireTokenPopup instead.
    const tryAcquireTokenPopup = ex instanceof msal.InteractionRequiredAuthError;
    if (!tryAcquireTokenPopup) {
      logger.error('acquireTokenSilent failed', ex);
      throw ex;
    }
  }

  try {
    logger.debug('acquireTokenSilent failed; trying acquireTokenPopup');
    const response = await msalInstance.acquireTokenPopup(request);
    return response.accessToken;
  } catch (ex) {
    logger.error('acquireTokenPopup failed', ex);
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
  msalInstance: Pick<msal.IPublicClientApplication, 'acquireTokenSilent'>,
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
    const acquireTokenPopupNeeded = ex instanceof msal.InteractionRequiredAuthError;
    const logLevel = acquireTokenPopupNeeded ? 'debug' : 'error';
    logger.log(logLevel, 'hasConsentForScopes failed', ex);
    return false;
  }
};
