import { RemoteFunctionValidator } from './auth/remote-function-validator';
import { withRemoteFunctionJwtValidation } from './with-remote-function-jwt-validation';

// Mock RemoteFunctionValidator
jest.mock('./auth/remote-function-validator');

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

describe('withRemoteFunctionJwtValidation Middleware', () => {
  let mockRequest: any;
  let mockResponse: any;
  let mockNext: jest.Mock;
  let mockValidatorCheck: jest.Mock;

  beforeEach(() => {
    mockValidatorCheck = jest.fn();
    (RemoteFunctionValidator as unknown as jest.Mock).mockImplementation(() => ({
      check: mockValidatorCheck
    }));

    mockRequest = {
      headers: {
        'authorization': 'Bearer valid-token',
        'x-teams-app-session-id': 'test-app-session-id',
        'x-teams-page-id': 'test-page-id',
        'x-teams-channel-id': 'test-channel-id',
        'x-teams-chat-id': 'test-chat-id',
        'x-teams-meeting-id': 'test-meeting-id',
        'x-teams-message-id': 'test-message-id',
        'x-teams-sub-page-id': 'test-sub-page-id',
        'x-teams-team-id': 'test-team-id',
      },
      context: undefined,
    };

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set context and call next if authentication is successful', async () => {
    const mockContext = {
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
      userName: 'Test User'
    };

    mockValidatorCheck.mockResolvedValue(mockContext);

    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });

    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockValidatorCheck).toHaveBeenCalledWith({
      'authorization': 'Bearer valid-token',
      'x-teams-app-session-id': 'test-app-session-id',
      'x-teams-page-id': 'test-page-id',
      'x-teams-channel-id': 'test-channel-id',
      'x-teams-chat-id': 'test-chat-id',
      'x-teams-meeting-id': 'test-meeting-id',
      'x-teams-message-id': 'test-message-id',
      'x-teams-sub-page-id': 'test-sub-page-id',
      'x-teams-team-id': 'test-team-id',
    });
    expect(mockRequest.context).toEqual(mockContext);
    expect(mockNext).toHaveBeenCalled();
    expect(mockResponse.status).not.toHaveBeenCalled();
  });

  it('should convert Express headers to lowercase', async () => {
    mockRequest.headers = {
      'Authorization': 'Bearer valid-token',
      'X-Teams-App-Session-Id': 'test-app-session-id',
      'X-Teams-Page-Id': 'test-page-id',
    };

    mockValidatorCheck.mockResolvedValue({
      appId: 'test-app-id',
      pageId: 'test-page-id',
    });

    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });

    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockValidatorCheck).toHaveBeenCalledWith({
      'authorization': 'Bearer valid-token',
      'x-teams-app-session-id': 'test-app-session-id',
      'x-teams-page-id': 'test-page-id',
    });
  });

  it('should skip non-string header values', async () => {
    mockRequest.headers = {
      'authorization': 'Bearer valid-token',
      'x-teams-app-session-id': 'test-app-session-id',
      'x-teams-page-id': 'test-page-id',
      'x-forwarded-for': ['1.2.3.4', '5.6.7.8'], // array value - should be skipped
    };

    mockValidatorCheck.mockResolvedValue({
      appId: 'test-app-id',
      pageId: 'test-page-id',
    });

    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });

    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockValidatorCheck).toHaveBeenCalledWith({
      'authorization': 'Bearer valid-token',
      'x-teams-app-session-id': 'test-app-session-id',
      'x-teams-page-id': 'test-page-id',
      // x-forwarded-for should not be included
    });
  });

  it('should return 401 if the token validator is missing', async () => {
    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: undefined,
    });

    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockLogger.debug).toHaveBeenCalledWith('unauthorized - no token validator configured');
    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.send).toHaveBeenCalledWith('unauthorized');
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should return 401 if token validation fails', async () => {
    mockValidatorCheck.mockResolvedValue(null);

    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });

    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.send).toHaveBeenCalledWith('unauthorized');
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should create RemoteFunctionValidator with correct params', async () => {
    mockValidatorCheck.mockResolvedValue({
      appId: 'test-app-id',
      pageId: 'test-page-id',
    });

    const handleRequest = withRemoteFunctionJwtValidation({
      logger: mockLogger,
      entraTokenValidator: tokenValidatorMock,
    });

    await handleRequest(mockRequest, mockResponse, mockNext);

    expect(RemoteFunctionValidator).toHaveBeenCalledWith(tokenValidatorMock, mockLogger);
  });
});
