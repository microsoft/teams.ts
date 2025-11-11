import { InteractionRequiredAuthError, LogLevel } from '@azure/msal-browser';

import {
  acquireMsalAccessToken,
  buildMsalConfig,
  getStandardExecSilentRequest,
  hasConsentForScopes,
} from './msal-utils';

const mockClientId = 'mock-client-id';
const mockLogger = {
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  trace: jest.fn(),
  log: jest.fn(),
  child: jest.fn().mockReturnThis(),
};

describe('msalUtils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getStandardExecSilentRequest', () => {
    it('builds a silent request object with default permission', () => {
      const request = getStandardExecSilentRequest(`api://${mockClientId}`);
      expect(request).toEqual({
        scopes: ['api://mock-client-id/access_as_user'],
      });
    });

    it('builds a silent request object with custom permission', () => {
      const request = getStandardExecSilentRequest(`api://${mockClientId}`, 'my_custom_permission');
      expect(request).toEqual({
        scopes: ['api://mock-client-id/my_custom_permission'],
      });
    });
  });

  describe('buildMsalConfig', () => {
    it('should return a valid MSAL configuration', () => {
      const config = buildMsalConfig(mockClientId, mockLogger);

      expect(config).toEqual({
        auth: {
          clientId: mockClientId,
          authority: '',
          redirectUri: '/',
          postLogoutRedirectUri: '/',
        },
        system: {
          loggerOptions: {
            piiLoggingEnabled: false,
            loggerCallback: expect.any(Function),
          },
        },
      });
    });

    it('forwards MSAL log entries to the appropriate logger method', () => {
      const config = buildMsalConfig(mockClientId, mockLogger);

      const loggerCallback = config.system?.loggerOptions?.loggerCallback;
      expect(loggerCallback).toBeDefined();

      expect(mockLogger.error).not.toHaveBeenCalled();
      loggerCallback?.(LogLevel.Error, 'Test error message', false);
      expect(mockLogger.error).toHaveBeenCalledWith('Test error message');

      expect(mockLogger.info).not.toHaveBeenCalled();
      loggerCallback?.(LogLevel.Info, 'Test info message', false);
      expect(mockLogger.info).toHaveBeenCalledWith('Test info message');

      expect(mockLogger.debug).not.toHaveBeenCalled();
      loggerCallback?.(LogLevel.Verbose, 'Test verbose message', false);
      expect(mockLogger.debug).toHaveBeenCalledWith('Test verbose message');

      expect(mockLogger.warn).not.toHaveBeenCalled();
      loggerCallback?.(LogLevel.Warning, 'Test warning message', false);
      expect(mockLogger.warn).toHaveBeenCalledWith('Test warning message');
    });

    it('ignores MSAL log entries with unexpected log level', () => {
      const config = buildMsalConfig(mockClientId, mockLogger);

      const loggerCallback = config.system?.loggerOptions?.loggerCallback;
      expect(loggerCallback).toBeDefined();

      loggerCallback?.(LogLevel.Trace, 'Test warning message', false);

      expect(mockLogger.error).not.toHaveBeenCalled();
      expect(mockLogger.info).not.toHaveBeenCalled();
      expect(mockLogger.debug).not.toHaveBeenCalled();
      expect(mockLogger.warn).not.toHaveBeenCalled();
    });
  });

  describe('acquireMsalAccessToken', () => {
    const accessToken = 'access token';
    const request = { scopes: ['whatever', 'whatever.else'] };

    it('should call acquireTokenSilent with the correct request', async () => {
      const acquireTokenSilent = jest.fn().mockResolvedValue({ accessToken });
      const acquireTokenPopup = jest.fn().mockRejectedValue(new Error('Oh noes!'));

      const result = await acquireMsalAccessToken(
        { acquireTokenSilent, acquireTokenPopup },
        request,
        mockLogger
      );

      expect(acquireTokenSilent).toHaveBeenCalledWith(request);
      expect(acquireTokenPopup).not.toHaveBeenCalled();
      expect(result).toEqual(accessToken);
    });

    it('should throw if acquireTokenSilent fails and is not an InteractionRequiredAuthError', async () => {
      const acquireTokenSilent = jest.fn().mockRejectedValue(new Error('Oh noes!'));
      const acquireTokenPopup = jest.fn().mockResolvedValue({ accessToken });

      await expect(
        acquireMsalAccessToken({ acquireTokenSilent, acquireTokenPopup }, request, mockLogger)
      ).rejects.toThrow('Oh noes!');
      expect(acquireTokenSilent).toHaveBeenCalledTimes(1);
      expect(acquireTokenPopup).not.toHaveBeenCalled();
    });

    it('should call acquireTokenPopup if acquireTokenSilent fails with InteractionRequiredAuthError', async () => {
      const interactionError = new InteractionRequiredAuthError('Interaction required');
      const acquireTokenSilent = jest.fn().mockRejectedValue(interactionError);
      const acquireTokenPopup = jest.fn().mockResolvedValue({ accessToken });

      const result = await acquireMsalAccessToken(
        { acquireTokenSilent, acquireTokenPopup },
        request,
        mockLogger
      );

      expect(acquireTokenSilent).toHaveBeenCalledTimes(1);
      expect(acquireTokenPopup).toHaveBeenCalledTimes(1);
      expect(result).toEqual(accessToken);
    });

    it('should throw if acquireTokenPopup fails', async () => {
      const interactionError = new InteractionRequiredAuthError('Interaction required');
      const acquireTokenSilent = jest.fn().mockRejectedValue(interactionError);
      const acquireTokenPopup = jest.fn().mockRejectedValue(new Error('Oh noes!'));

      await expect(
        acquireMsalAccessToken({ acquireTokenSilent, acquireTokenPopup }, request, mockLogger)
      ).rejects.toThrow('Oh noes!');
      expect(acquireTokenSilent).toHaveBeenCalledTimes(1);
      expect(acquireTokenPopup).toHaveBeenCalledTimes(1);
    });
  });

  describe('hasConsentForScopes', () => {
    it('returns true when a token can be silently acquired', async () => {
      const acquireTokenSilent = jest.fn();
      const scopes = ['scope1', 'scope2'];

      const result = await hasConsentForScopes({ acquireTokenSilent }, scopes, mockLogger);
      expect(acquireTokenSilent).toHaveBeenCalledTimes(1);
      expect(acquireTokenSilent).toHaveBeenCalledWith({ scopes });
      expect(result).toEqual(true);
    });

    it('returns false when user consent is needed', async () => {
      const interactionError = new InteractionRequiredAuthError('Interaction required');
      const acquireTokenSilent = jest.fn().mockRejectedValue(interactionError);
      const scopes = ['scope1', 'scope2'];

      const result = await hasConsentForScopes({ acquireTokenSilent }, scopes, mockLogger);

      expect(acquireTokenSilent).toHaveBeenCalledTimes(1);
      expect(acquireTokenSilent).toHaveBeenCalledWith({ scopes });
      expect(result).toEqual(false);
      expect(mockLogger.log).toHaveBeenCalledWith(
        'debug',
        'hasConsentForScopes failed',
        interactionError
      );
    });

    it('returns false when a random exception appears', async () => {
      const error = new Error('Oh noes!');
      const acquireTokenSilent = jest.fn().mockRejectedValue(error);
      const scopes = ['scope1', 'scope2'];

      const result = await hasConsentForScopes({ acquireTokenSilent }, scopes, mockLogger);

      expect(acquireTokenSilent).toHaveBeenCalledTimes(1);
      expect(acquireTokenSilent).toHaveBeenCalledWith({ scopes });
      expect(result).toEqual(false);
      expect(mockLogger.log).toHaveBeenCalledWith('error', 'hasConsentForScopes failed', error);
    });
  });
});
