import { withRemoteFunctionJwtValidation } from './with-remote-function-jwt-validation';

const mockLogger = {
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  trace: jest.fn(),
  log: jest.fn(),
  child: jest.fn().mockReturnThis(),
};
const tokenValidatorMock = {
  validateAccessToken: jest.fn(),
};
const mockRequestHeaders = {
  Authorization: 'Bearer valid-token',
  'X-Teams-App-Session-Id': 'test-app-session-id',
  'X-Teams-Page-Id': 'test-page-id',
  'X-Teams-Channel-Id': 'test-channel-id',
  'X-Teams-Chat-Id': 'test-chat-id',
  'X-Teams-Meeting-Id': 'test-meeting-id',
  'X-Teams-Message-Id': 'test-message-id',
  'X-Teams-Sub-Page-Id': 'test-sub-page-id',
  'X-Teams-Team-Id': 'test-team-id',
} as const;

describe('withRemoteFunctionJwtValidation Middleware', () => {
  let mockRequest: any;
  let mockResponse: any;
  let mockNext: jest.Mock;
  const mockRequestStatus = jest.fn();
  const mockRequestStatusSend = jest.fn();

  beforeEach(() => {
    mockRequest = {
      header: (headerName: keyof typeof mockRequestHeaders) => mockRequestHeaders[headerName],
      context: {},
    };
    mockResponse = {
      status: mockRequestStatus.mockReturnValue({ send: mockRequestStatusSend }),
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set context and call next if authentication is successful', async () => {
    // Mock a valid authentication scenario
    tokenValidatorMock.validateAccessToken.mockResolvedValue({
      appId: 'test-app-id',
      tid: 'test-tenant-id',
      oid: 'test-user-id',
    });

    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });
    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockResponse.status).not.toHaveBeenCalled();
    expect(mockRequest.context).toEqual({
      appId: 'test-app-id',
      appSessionId: 'test-app-session-id',
      authToken: 'valid-token',
      channelId: 'test-channel-id',
      chatId: 'test-chat-id',
      meetingId: 'test-meeting-id',
      messageId: 'test-message-id',
      pageId: 'test-page-id',
      subPageId: 'test-sub-page-id',
      teamId: 'test-team-id',
      tenantId: 'test-tenant-id',
      userId: 'test-user-id',
    });
  });

  it.each`
    missingHeader
    ${'X-Teams-App-Session-Id'}
    ${'X-Teams-Page-Id'}
  `('should return 401 if the $missingHeader header is missing', async ({ missingHeader }) => {
    mockRequest.header = (headerName: keyof typeof mockRequestHeaders) =>
      headerName === missingHeader ? undefined : mockRequestHeaders[headerName];

    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });
    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockRequestStatus).toHaveBeenCalledWith(401);
    expect(mockRequestStatusSend).toHaveBeenCalledWith('unauthorized');
    expect(mockNext).not.toHaveBeenCalled();
  });

  it.each`
    authorizationHeader         | expected
    ${undefined}                | ${''}
    ${'Bearer '}                | ${''}
    ${'Bearer invalid data '}   | ${''}
    ${'Bearer   invalid-data '} | ${''}
    ${'pop valid-token'}        | ${''}
    ${'Bearer valid-token'}     | ${'valid-token'}
    ${'BEARER valid-token'}     | ${'valid-token'}
    ${'bearer valid-token'}     | ${'valid-token'}
  `(
    'should invoke validateAccessToken with "$expected" when authorization header value is "$authorizationHeader"',
    async ({ authorizationHeader, expected }) => {
      mockRequest.header = (headerName: keyof typeof mockRequestHeaders) =>
        headerName === 'Authorization' ? authorizationHeader : mockRequestHeaders[headerName];

      const handleRequest = withRemoteFunctionJwtValidation({
        logger: mockLogger,
        entraTokenValidator: tokenValidatorMock,
      });
      await handleRequest(mockRequest, mockResponse, mockNext);
      expect(tokenValidatorMock.validateAccessToken).toHaveBeenCalledWith(expected);
    }
  );

  it('should return 401 if the token validator is missing', async () => {
    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: undefined,
    });
    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockRequestStatus).toHaveBeenCalledWith(401);
    expect(mockRequestStatusSend).toHaveBeenCalledWith('unauthorized');
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should return 401 if token validation fails', async () => {
    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });

    tokenValidatorMock.validateAccessToken.mockResolvedValue(null);

    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockLogger.debug).toHaveBeenCalledWith('unauthorized');
    const send = jest.fn();
    const response: any = {
      status: jest.fn().mockReturnValue({ send }),
    };
    await handleRequest(mockRequest, response, mockNext);
    expect(mockNext).not.toHaveBeenCalled();
  });
});
