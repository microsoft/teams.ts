
import { EventEmitter, Client as HttpClient } from '@microsoft/teams.common';
import { OauthHandlers } from './app.oauth';

describe('OauthHandlers', () => {
  let handlers: OauthHandlers;
  let mockGetConnectionName: jest.Mock;
  let mockClient: jest.Mocked<HttpClient>;
  let mockEvents: EventEmitter<any>;
  
  beforeEach(() => {
    mockGetConnectionName = jest.fn().mockReturnValue('test-connection');
    mockClient = { clone: jest.fn().mockReturnThis() } as any;
    mockEvents = new EventEmitter<any>();
    handlers = new OauthHandlers(mockGetConnectionName, mockClient, mockEvents);
  });

  describe('onTokenExchange', () => {
    it('returns 200 and emits signin event on success', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockResolvedValue({ token: 'test-token' }),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        value: {
          id: 'exchange-1',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const next = jest.fn();
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next
      };
      
      const result = await handlers.onTokenExchange(ctx);
      
      expect(result).toEqual({ status: 200 });
      expect(mockApi.users.exchangeToken).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });

    it('returns 412 on generic error', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockRejectedValue(new Error('failed')),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        value: {
          id: 'exchange-2',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next: jest.fn()
      };
      
      const result = await handlers.onTokenExchange(ctx);
      
      expect(result.status).toEqual(412);
      expect(result.body).toBeDefined();
    });
    
    it('prevents duplicates for the same exchangeId', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockImplementation(async () => {
             await new Promise(r => setTimeout(r, 10));
             return { token: 'test-token' };
          }),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        value: {
          id: 'exchange-3',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const next = jest.fn();
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next
      };
      
      const results = await Promise.all([
        handlers.onTokenExchange(ctx),
        handlers.onTokenExchange(ctx)
      ]);
      
      expect(results).toEqual([{ status: 200 }, { status: 200 }]);
      expect(mockApi.users.exchangeToken).toHaveBeenCalledTimes(1);
    });

    it('returns 412 for concurrent callers when original exchange fails', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockImplementation(async () => {
             await new Promise(r => setTimeout(r, 10));
             throw new Error('failed');
          }),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        value: {
          id: 'exchange-4',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next: jest.fn()
      };
      
      const results = await Promise.all([
        handlers.onTokenExchange(ctx),
        handlers.onTokenExchange(ctx)
      ]);
      
      expect(results[0].status).toEqual(412);
      expect(results[1].status).toEqual(412);
      expect(mockApi.users.exchangeToken).toHaveBeenCalledTimes(1);
    });
  });
});
