const teamsJsInitializeMock = jest.fn();
const msalCreateNPCAppMock = jest.fn();
const msalInitializeMock = jest.fn();
const httpClientPostMock = jest.fn();

import { App } from './app';
import * as MsalUtils from './msal-utils';

jest.mock('@microsoft/teams-js', () => {
  return {
    ...jest.requireActual('@microsoft/teams-js'),
    app: {
      initialize: teamsJsInitializeMock.mockResolvedValue(undefined),
      getContext: jest.fn(() => {
        return Promise.resolve({
          user: {
            id: 'mock-user-id',
            displayName: 'Mock User',
            email: '',
            upn: 'mock-upn',
            tenant: { id: 'mock-tenant-id' },
          },
          team: {
            id: 'mock-team-id',
            name: 'Mock Team',
          },
          channel: {
            id: 'mock-channel-id',
            name: 'Mock Channel',
          },
          chat: {
            id: 'mock-chat-id',
            name: 'Mock Chat',
          },
          meeting: {
            id: 'mock-meeting-id',
            subject: 'Mock Meeting',
          },
          subPageId: 'mock-sub-page-id',
          app: {
            appId: {
              toString: () => 'mock-app-id',
            },
            sessionId: 'mock-session-id',
            parentMessageId: 'mock-parent-message-id',
          },
          page: {
            id: 'mock-page-id',
            subPageId: 'mock-sub-page-id',
          },
        });
      }),
    },
  };
});

jest.mock('@azure/msal-browser', () => {
  return {
    ...jest.requireActual('@azure/msal-browser'),
    createNestablePublicClientApplication: msalCreateNPCAppMock.mockResolvedValue({
      initialize: msalInitializeMock,
    }),
  };
});

jest.mock('@microsoft/teams.common/http', () => {
  return {
    ...jest.requireActual('@microsoft/teams.common/http'),
    Client: jest.fn().mockImplementation(() => {
      return {
        post: httpClientPostMock,
      };
    }),
  };
});

const mockLogger = {
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  log: jest.fn(),
  child: jest.fn().mockReturnThis(),
};

const mockClientId = 'mock-client-id';
const mockAppTenantId = 'mock-app-tenant-id';
const mockDate = new Date('2025-10-01T00:00:00Z');
const mockAccessToken = 'eyJ0MockAccessTokenKmydpg';

describe('App', () => {
  let acquireMsalAccessTokenSpy: jest.SpyInstance;

  beforeEach(() => {
    acquireMsalAccessTokenSpy = jest
      .spyOn(MsalUtils, 'acquireMsalAccessToken')
      .mockResolvedValue(mockAccessToken);
    jest.useFakeTimers().setSystemTime(mockDate);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  describe('constructor', () => {
    it('supports default options', () => {
      const app = new App(mockClientId);
      expect(app.options).toEqual({
        baseUrl: undefined,
        logger: undefined,
        msalOptions: undefined,
      });
      expect(app.clientId).toEqual(mockClientId);
      expect(app.startedAt).toBeUndefined();
      expect(app.msalInstance).toBeUndefined();
      expect(app.log).toBeInstanceOf(Object);
      expect(app.log).not.toEqual(mockLogger);
    });

    it('supports custom options', () => {
      const customOptions = {
        tenantId: mockAppTenantId,
        baseUrl: 'https://example.com',
        logger: mockLogger,
        msalOptions: {
          configuration: { auth: { clientId: mockClientId } },
          defaultSilentRequest: { scopes: ['User.ReadWrite'] },
        },
      };
      const app = new App(mockClientId, customOptions);
      expect(app.options).toEqual(customOptions);
      expect(app.startedAt).toBeUndefined();
      expect(app.msalInstance).toBeUndefined();
      expect(app.log).toEqual(mockLogger);
    });

    it('throws if client ID is invalid', () => {
      expect(() => new App('')).toThrow('Invalid client ID.');
    });
  });

  describe('start', () => {
    it('should initialize teams-js and msal with default values', async () => {
      const app = new App(mockClientId);
      await app.start();

      expect(teamsJsInitializeMock).toHaveBeenCalledTimes(1);
      expect(teamsJsInitializeMock).toHaveBeenCalledWith();
      expect(msalCreateNPCAppMock).toHaveBeenCalledTimes(1);
      expect(msalCreateNPCAppMock).toHaveBeenCalledWith({
        auth: {
          authority: '',
          clientId: 'mock-client-id',
          postLogoutRedirectUri: '/',
          redirectUri: '/',
        },
        system: {
          loggerOptions: {
            loggerCallback: expect.any(Function),
            piiLoggingEnabled: false,
          },
        },
      });
      expect(msalInitializeMock).toHaveBeenCalledTimes(1);
      expect(app.startedAt).toEqual(mockDate);
      expect(app.msalInstance).toBeDefined();
    });

    it('can initialize teams-js and msal with custom MSAL configuration', async () => {
      const msalConfig = {
        auth: {
          clientId: 'custom-client-id',
        },
      };
      const app = new App(mockClientId, { msalOptions: { configuration: msalConfig } });
      await app.start();

      expect(teamsJsInitializeMock).toHaveBeenCalledTimes(1);
      expect(teamsJsInitializeMock).toHaveBeenCalledWith();
      expect(msalCreateNPCAppMock).toHaveBeenCalledTimes(1);
      expect(msalCreateNPCAppMock).toHaveBeenCalledWith(msalConfig);
      expect(msalInitializeMock).toHaveBeenCalledTimes(1);
      expect(app.startedAt).toEqual(mockDate);
      expect(app.msalInstance).toBeDefined();
    });

    it('is safe to call when already started', async () => {
      const app = new App(mockClientId, { logger: mockLogger });
      await app.start();

      expect(teamsJsInitializeMock).toHaveBeenCalledTimes(1);
      expect(msalCreateNPCAppMock).toHaveBeenCalledTimes(1);
      expect(app.startedAt).toEqual(mockDate);
      expect(app.msalInstance).toBeDefined();

      jest.setSystemTime(mockDate.getTime() + 1000);
      await app.start();

      expect(mockLogger.debug).toHaveBeenLastCalledWith('app already started');
      expect(teamsJsInitializeMock).toHaveBeenCalledTimes(1);
      expect(msalCreateNPCAppMock).toHaveBeenCalledTimes(1);
      expect(app.startedAt).toEqual(mockDate);
      expect(app.msalInstance).toBeDefined();
    });

    it('is safe to call while already starting', async () => {
      const app = new App(mockClientId, { logger: mockLogger });
      let resolveInitialize: () => void = () => {};
      teamsJsInitializeMock.mockReturnValue(
        new Promise<void>((resolve) => {
          resolveInitialize = resolve;
        })
      );

      // start first initialization, this will be pending until the captured promise is resolved
      const initialization = app.start();
      expect(mockLogger.debug).toHaveBeenLastCalledWith('app starting');

      // start second initialization, this will log and return immediately
      await app.start();
      expect(mockLogger.debug).toHaveBeenLastCalledWith('app already starting');

      // at this point we're still initializing teams-js
      expect(teamsJsInitializeMock).toHaveBeenCalledTimes(1);
      expect(msalCreateNPCAppMock).toHaveBeenCalledTimes(0);
      expect(app.startedAt).toBeUndefined();
      expect(app.msalInstance).toBeUndefined();

      // complete initialization
      resolveInitialize?.();
      await initialization;

      // all set up
      expect(mockLogger.debug).toHaveBeenLastCalledWith('app started');
      expect(msalCreateNPCAppMock).toHaveBeenCalledTimes(1);
      expect(app.startedAt).toEqual(mockDate);
      expect(app.msalInstance).toBeDefined();
    });
  });

  describe('exec', () => {
    it('should throw if not started', async () => {
      const app = new App(mockClientId);
      await expect(app.exec('myFunction')).rejects.toThrow('App not started');
    });

    it('should invoke a remote function', async () => {
      httpClientPostMock.mockResolvedValue({
        data: 'mock result',
      });
      const app = new App(mockClientId, { logger: mockLogger, tenantId: mockAppTenantId });
      await app.start();
      const result = await app.exec('myFunction', { arg1: 'value1' });

      expect(acquireMsalAccessTokenSpy).toHaveBeenCalledTimes(1);
      expect(acquireMsalAccessTokenSpy).toHaveBeenLastCalledWith(
        app.msalInstance,
        { scopes: ['api://mock-client-id/access_as_user'] },
        app.log
      );
      expect(httpClientPostMock).toHaveBeenCalledTimes(1);
      expect(httpClientPostMock).toHaveBeenCalledWith(
        '/api/functions/myFunction',
        { arg1: 'value1' },
        {
          headers: {
            authorization: `Bearer ${mockAccessToken}`,
            'x-teams-app-session-id': 'mock-session-id',
            'x-teams-channel-id': 'mock-channel-id',
            'x-teams-chat-id': 'mock-chat-id',
            'x-teams-meeting-id': 'mock-meeting-id',
            'x-teams-message-id': 'mock-parent-message-id',
            'x-teams-page-id': 'mock-page-id',
            'x-teams-sub-page-id': 'mock-sub-page-id',
            'x-teams-team-id': undefined,
          },
        }
      );
      expect(result).toEqual('mock result');
    });

    it('should invoke a remote function with custom token request', async () => {
      httpClientPostMock.mockResolvedValue({
        data: 'mock result',
      });
      const app = new App(mockClientId, { logger: mockLogger });
      await app.start();
      await app.exec('myFunction', undefined, {
        msalTokenRequest: {
          scopes: ['my_custom_scope'],
        },
      });

      expect(acquireMsalAccessTokenSpy).toHaveBeenCalledTimes(1);
      expect(acquireMsalAccessTokenSpy).toHaveBeenLastCalledWith(
        app.msalInstance,
        { scopes: ['my_custom_scope'] },
        app.log
      );
      expect(httpClientPostMock).toHaveBeenCalledTimes(1);
    });

    it('should invoke a remote function with custom permission', async () => {
      httpClientPostMock.mockResolvedValue({
        data: 'mock result',
      });
      const app = new App(mockClientId, { logger: mockLogger });
      await app.start();
      await app.exec('myFunction', undefined, {
        permission: 'my_custom_permission',
      });

      expect(acquireMsalAccessTokenSpy).toHaveBeenCalledTimes(1);
      expect(acquireMsalAccessTokenSpy).toHaveBeenLastCalledWith(
        app.msalInstance,
        { scopes: ['api://mock-client-id/my_custom_permission'] },
        app.log
      );
      expect(httpClientPostMock).toHaveBeenCalledTimes(1);
    });

    it('should invoke a remote function with custom headers', async () => {
      httpClientPostMock.mockResolvedValue({
        data: 'mock result',
      });
      const app = new App(mockClientId, { logger: mockLogger });
      await app.start();
      await app.exec('myFunction', undefined, {
        requestHeaders: {
          'x-custom-correlation-id': 'gggg-uuuu-iiii-dddd',
        },
      });

      expect(acquireMsalAccessTokenSpy).toHaveBeenCalledTimes(1);
      expect(acquireMsalAccessTokenSpy).toHaveBeenLastCalledWith(
        app.msalInstance,
        { scopes: ['api://mock-client-id/access_as_user'] },
        app.log
      );
      expect(httpClientPostMock).toHaveBeenCalledTimes(1);
      expect(httpClientPostMock).toHaveBeenCalledWith('/api/functions/myFunction', undefined, {
        headers: expect.objectContaining({
          'x-custom-correlation-id': 'gggg-uuuu-iiii-dddd',
        }),
      });
    });
  });
});
