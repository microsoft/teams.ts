import { ConsoleLogger } from '@microsoft/teams.common';

import { RemoteFunctionValidator } from './remote-function-validator';

describe('RemoteFunctionValidator', () => {
  const mockLogger = {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    child: jest.fn().mockReturnThis()
  } as unknown as ConsoleLogger;

  const mockEntraValidator = {
    validateAccessToken: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('check', () => {
    it('should validate token and return client context', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      const mockPayload = {
        appId: 'app-123',
        tid: 'tenant-123',
        oid: 'user-123',
        name: 'Test User'
      };

      mockEntraValidator.validateAccessToken.mockResolvedValue(mockPayload);

      const headers = {
        'authorization': 'Bearer valid-token',
        'x-teams-app-session-id': 'session-123',
        'x-teams-page-id': 'page-123',
        'x-teams-channel-id': 'channel-123',
        'x-teams-chat-id': 'chat-123',
        'x-teams-meeting-id': 'meeting-123',
        'x-teams-message-id': 'message-123',
        'x-teams-sub-page-id': 'subpage-123',
        'x-teams-team-id': 'team-123'
      };

      const result = await validator.check(headers);

      expect(result).toEqual({
        appId: 'app-123',
        appSessionId: 'session-123',
        authToken: 'valid-token',
        channelId: 'channel-123',
        chatId: 'chat-123',
        meetingId: 'meeting-123',
        messageId: 'message-123',
        pageId: 'page-123',
        subPageId: 'subpage-123',
        teamId: 'team-123',
        tenantId: 'tenant-123',
        userId: 'user-123',
        userName: 'Test User'
      });

      expect(mockEntraValidator.validateAccessToken).toHaveBeenCalledWith('valid-token');
    });

    it('should return null if pageId is missing', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      const headers = {
        'authorization': 'Bearer valid-token',
        'x-teams-app-session-id': 'session-123'
        // x-teams-page-id missing
      };

      const result = await validator.check(headers);

      expect(result).toBeNull();
      expect(mockLogger.debug).toHaveBeenCalledWith('unauthorized - missing required headers or invalid token');
    });

    it('should return null if appSessionId is missing', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      const headers = {
        'authorization': 'Bearer valid-token',
        'x-teams-page-id': 'page-123'
        // x-teams-app-session-id missing
      };

      const result = await validator.check(headers);

      expect(result).toBeNull();
    });

    it('should return null if authorization header is missing', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      const headers = {
        'x-teams-app-session-id': 'session-123',
        'x-teams-page-id': 'page-123'
        // authorization missing
      };

      const result = await validator.check(headers);

      expect(result).toBeNull();
    });

    it('should return null if token validation fails', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      mockEntraValidator.validateAccessToken.mockResolvedValue(null);

      const headers = {
        'authorization': 'Bearer invalid-token',
        'x-teams-app-session-id': 'session-123',
        'x-teams-page-id': 'page-123'
      };

      const result = await validator.check(headers);

      expect(result).toBeNull();
    });

    it('should extract token from Bearer prefix', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      const mockPayload = {
        appId: 'app-123',
        tid: 'tenant-123',
        oid: 'user-123',
        name: 'Test User'
      };

      mockEntraValidator.validateAccessToken.mockResolvedValue(mockPayload);

      const headers = {
        'authorization': 'Bearer test-token',
        'x-teams-app-session-id': 'session-123',
        'x-teams-page-id': 'page-123'
      };

      await validator.check(headers);

      expect(mockEntraValidator.validateAccessToken).toHaveBeenCalledWith('test-token');
    });

    it('should handle authorization header with different casing', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      const mockPayload = {
        appId: 'app-123',
        tid: 'tenant-123',
        oid: 'user-123',
        name: 'Test User'
      };

      mockEntraValidator.validateAccessToken.mockResolvedValue(mockPayload);

      const headers = {
        'authorization': 'BEARER test-token',
        'x-teams-app-session-id': 'session-123',
        'x-teams-page-id': 'page-123'
      };

      await validator.check(headers);

      expect(mockEntraValidator.validateAccessToken).toHaveBeenCalledWith('test-token');
    });

    it('should handle optional headers as undefined', async () => {
      const validator = new RemoteFunctionValidator(mockEntraValidator, mockLogger);

      const mockPayload = {
        appId: 'app-123',
        tid: 'tenant-123',
        oid: 'user-123',
        name: 'Test User'
      };

      mockEntraValidator.validateAccessToken.mockResolvedValue(mockPayload);

      const headers = {
        'authorization': 'Bearer valid-token',
        'x-teams-app-session-id': 'session-123',
        'x-teams-page-id': 'page-123'
        // All optional headers missing
      };

      const result = await validator.check(headers);

      expect(result).toEqual({
        appId: 'app-123',
        appSessionId: 'session-123',
        authToken: 'valid-token',
        channelId: undefined,
        chatId: undefined,
        meetingId: undefined,
        messageId: undefined,
        pageId: 'page-123',
        subPageId: undefined,
        teamId: undefined,
        tenantId: 'tenant-123',
        userId: 'user-123',
        userName: 'Test User'
      });
    });
  });
});
