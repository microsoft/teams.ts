const httpClientMock = jest.fn();

import { buildGraphClient } from './graph-utils';

jest.mock('@microsoft/teams.common/http', () => {
  return {
    ...jest.requireActual('@microsoft/teams.common/http'),
    Client: httpClientMock,
  };
});

const mockLogger = {
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  trace: jest.fn(),
  log: jest.fn(),
  child: jest.fn().mockReturnThis(),
};

const mockMsalInstance = {
  acquireTokenSilent: jest.fn().mockResolvedValue({ accessToken: 'mockAccessToken' }),
  acquireTokenPopup: jest.fn(),
};

describe('buildGraphClient', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('builds a graph client', () => {
    const client = buildGraphClient(() => ({ msalInstance: mockMsalInstance }), mockLogger);
    expect(httpClientMock).toHaveBeenCalledWith({
      interceptors: [{ request: expect.any(Function) }],
    });
    expect(client).toBeDefined();
  });

  it('attaches a bearer token to requests', async () => {
    const setHeaderMock = jest.fn();
    const mockContext = {
      config: {
        headers: {
          set: setHeaderMock,
        },
      },
    };

    buildGraphClient(() => ({ msalInstance: mockMsalInstance }), mockLogger);
    expect(httpClientMock).toHaveBeenCalledWith({
      interceptors: [{ request: expect.any(Function) }],
    });

    const requestInterceptor = httpClientMock.mock.calls[0][0].interceptors[0].request;
    const result = await requestInterceptor(mockContext);

    expect(result).toEqual(mockContext.config);
    expect(setHeaderMock).toHaveBeenCalledWith('Authorization', 'Bearer mockAccessToken');
    expect(mockMsalInstance.acquireTokenSilent).toHaveBeenCalledWith({ scopes: ['.default'] });
  });
});
