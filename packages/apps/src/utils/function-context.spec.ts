import { getConversationIdResolver } from './function-context';

const mockLog = {
  warn: jest.fn(),
  error: jest.fn(),
};

const mockApp = (overrides: any = {}) => ({
  id: 'bot-id',
  api: {
    conversations: {
      members: jest.fn().mockReturnThis(),
      getById: jest.fn(),
      create: jest.fn(),
    },
  },
  ...overrides,
});

describe('getConversationIdResolver', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns conversationId if user is a member', async () => {
    const app = mockApp();
    app.api.conversations.getById = jest
      .fn()
      .mockResolvedValue({ id: 'user-id' });
    const context = { userId: 'user-id', channelId: 'conv-123' };
    const resolver = getConversationIdResolver(
      app as any,
      mockLog as any,
      context as any
    );
    const id = await resolver();
    expect(id).toBe('conv-123');
    expect(app.api.conversations.members).toHaveBeenCalledWith('conv-123');
    expect(app.api.conversations.getById).toHaveBeenCalledWith('user-id');
  });

  it('returns undefined if member lookup fails', async () => {
    const app = mockApp();
    app.api.conversations.getById = jest
      .fn()
      .mockRejectedValue(new Error('not found'));
    const context = { userId: 'user-id', channelId: 'conv-123' };
    const resolver = getConversationIdResolver(
      app as any,
      mockLog as any,
      context as any
    );
    const id = await resolver();
    expect(id).toBeUndefined();
    expect(mockLog.warn).toHaveBeenCalledWith(
      'either the bot or the user are not in this conversation',
      { conversationId: 'conv-123', userId: 'user-id' }
    );
  });

  it('returns undefined if user is not a member', async () => {
    const app = mockApp();
    app.api.conversations.getById = jest.fn().mockReturnValue(null);
    const context = { userId: 'user-id', channelId: 'conv-123' };
    const resolver = getConversationIdResolver(
      app as any,
      mockLog as any,
      context as any
    );
    const id = await resolver();
    expect(id).toBeUndefined();
    expect(mockLog.warn).toHaveBeenCalledWith(
      'either the bot or the user are not in this conversation',
      { conversationId: 'conv-123', userId: 'user-id' }
    );
  });

  it('creates a conversation if no conversationId is present', async () => {
    const app = mockApp();
    app.api.conversations.create = jest
      .fn()
      .mockResolvedValue({ id: 'new-conv-id' });
    const context = {
      userId: 'user-id',
      userName: 'Test User',
      tenantId: 'tenant-1',
    };
    const resolver = getConversationIdResolver(
      app as any,
      mockLog as any,
      context as any
    );
    const id = await resolver();
    expect(id).toBe('new-conv-id');
    expect(app.api.conversations.create).toHaveBeenCalledWith({
      bot: { id: 'bot-id' },
      members: [{ id: 'user-id', role: 'user', name: 'Test User' }],
      tenantId: 'tenant-1',
      isGroup: false,
    });
  });

  it('returns undefined and logs error if conversation creation fails', async () => {
    const app = mockApp();
    app.api.conversations.create = jest
      .fn()
      .mockRejectedValue(new Error('fail'));
    const context = {
      userId: 'user-id',
      userName: 'Test User',
      tenantId: 'tenant-1',
    };
    const resolver = getConversationIdResolver(
      app as any,
      mockLog as any,
      context as any
    );
    const id = await resolver();
    expect(id).toBeUndefined();
    expect(mockLog.error).toHaveBeenCalledWith(
      'failed to create conversation with user',
      { userId: 'user-id' }
    );
  });

  it('caches the resolved conversation id', async () => {
    const app = mockApp();
    app.api.conversations.getById = jest
      .fn()
      .mockResolvedValue({ id: 'user-id' });
    const context = { userId: 'user-id', channelId: 'conv-123' };
    const resolver = getConversationIdResolver(
      app as any,
      mockLog as any,
      context as any
    );
    const id1 = await resolver();
    const id2 = await resolver();
    expect(id1).toBe('conv-123');
    expect(id2).toBe('conv-123');
    expect(app.api.conversations.getById).toHaveBeenCalledTimes(1);
  });
});
