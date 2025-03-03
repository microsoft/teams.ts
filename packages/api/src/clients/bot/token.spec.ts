import { Client } from '@microsoft/spark.common/http';

import { BotTokenClient } from './token';

describe('BotTokenClient', () => {
  it('should use existing client', async () => {
    const http = new Client();
    const client = new BotTokenClient(http);
    const spy = jest.spyOn(http, 'post').mockResolvedValueOnce({});

    await client.get({
      clientId: 'test',
      clientSecret: '123',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token',
      'grant_type=client_credentials&client_id=test&client_secret=123&scope=https%3A%2F%2Fapi.botframework.com%2F.default',
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
  });

  it('should use client options', async () => {
    const client = new BotTokenClient({});
    const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

    await client.get({
      clientId: 'test',
      clientSecret: '123',
    });

    expect(spy).toHaveBeenCalledWith(
      'https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token',
      'grant_type=client_credentials&client_id=test&client_secret=123&scope=https%3A%2F%2Fapi.botframework.com%2F.default',
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
  });

  describe('get', () => {
    it('should get multi-tenant', async () => {
      const client = new BotTokenClient();
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.get({
        clientId: 'test',
        clientSecret: '123',
      });

      expect(spy).toHaveBeenCalledWith(
        'https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token',
        'grant_type=client_credentials&client_id=test&client_secret=123&scope=https%3A%2F%2Fapi.botframework.com%2F.default',
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
    });

    it('should get single-tenant', async () => {
      const client = new BotTokenClient();
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.get({
        clientId: 'test',
        clientSecret: '123',
        tenantId: 'test-tenant',
      });

      expect(spy).toHaveBeenCalledWith(
        'https://login.microsoftonline.com/test-tenant/oauth2/v2.0/token',
        'grant_type=client_credentials&client_id=test&client_secret=123&scope=https%3A%2F%2Fapi.botframework.com%2F.default',
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
    });
  });

  describe('getGraph', () => {
    it('should get multi-tenant', async () => {
      const client = new BotTokenClient();
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.getGraph({
        clientId: 'test',
        clientSecret: '123',
      });

      expect(spy).toHaveBeenCalledWith(
        'https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token',
        'grant_type=client_credentials&client_id=test&client_secret=123&scope=https%3A%2F%2Fgraph.microsoft.com%2F.default',
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
    });

    it('should get single-tenant', async () => {
      const client = new BotTokenClient();
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.getGraph({
        clientId: 'test',
        clientSecret: '123',
        tenantId: 'test-tenant',
      });

      expect(spy).toHaveBeenCalledWith(
        'https://login.microsoftonline.com/test-tenant/oauth2/v2.0/token',
        'grant_type=client_credentials&client_id=test&client_secret=123&scope=https%3A%2F%2Fgraph.microsoft.com%2F.default',
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
    });
  });
});
