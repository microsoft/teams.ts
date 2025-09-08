import * as http from '@microsoft/teams.common/http';

import { Client } from './index';

import type { EndpointRequest } from './types';

// Mock the http module
jest.mock('@microsoft/teams.common/http', () => ({
  Client: jest.fn(),
}));

describe('Client', () => {
  let mockHttpClient: jest.Mocked<http.Client>;
  let mockBetaHttpClient: jest.Mocked<http.Client>;

  beforeEach(() => {
    jest.clearAllMocks();

    // Create mock HTTP client for v1.0
    mockHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      clone: jest.fn(),
    } as any;

    // Create mock HTTP client for beta
    mockBetaHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      clone: jest.fn(),
    } as any;

    // Setup clone to return beta client
    mockHttpClient.clone.mockReturnValue(mockBetaHttpClient);

    (http.Client as jest.MockedClass<typeof http.Client>).mockImplementation(
      () => mockHttpClient,
    );
  });

  describe('constructor', () => {
    it('should create client with default base URL', () => {
      new Client();
      expect(http.Client).toHaveBeenCalledWith({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': expect.stringMatching(/^teams\.ts\[graph\]\/.+/),
        },
      });
    });

    it('should create client with custom national cloud base URL', () => {
      new Client({
        baseUrlRoot: 'https://graph.microsoft.us',
      });

      expect(http.Client).toHaveBeenCalledWith({
        baseUrlRoot: 'https://graph.microsoft.us',
        baseUrl: 'https://graph.microsoft.us/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': expect.stringMatching(/^teams\.ts\[graph\]\/.+/),
        },
      });
    });

    it('should create client with custom options and preserve base URL root', () => {
      const customHeaders = { Authorization: 'Bearer token123' };
      new Client({
        baseUrlRoot: 'https://graph.microsoft.de',
        headers: customHeaders,
        timeout: 10000,
      });

      expect(http.Client).toHaveBeenCalledWith({
        baseUrlRoot: 'https://graph.microsoft.de',
        timeout: 10000,
        baseUrl: 'https://graph.microsoft.de/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': expect.stringMatching(/^teams\.ts\[graph\]\/.+/),
          Authorization: 'Bearer token123',
        },
      });
    });

    it('should clone existing client with custom base URL root', () => {
      const existingClient = {
        ...mockHttpClient,
        request: jest.fn(),
        clone: jest.fn().mockReturnValue(mockHttpClient),
      };
      new Client(existingClient as any);

      expect(existingClient.clone).toHaveBeenCalledWith({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': expect.stringMatching(/^teams\.ts\[graph\]\/.+/),
        },
      });
    });
  });

  describe('call method', () => {
    let client: Client;

    beforeEach(() => {
      client = new Client();
    });

    describe('v1.0 endpoint requests', () => {
      it('should make a GET request to v1.0 endpoint', async () => {
        const mockResponse = { data: { id: '123', name: 'Test User' } };
        mockHttpClient.get.mockResolvedValue(mockResponse);

        const mockEndpoint = jest.fn(
          (): EndpointRequest<any> => ({
            ver: 'v1.0',
            method: 'get',
            path: '/users/{id}',
            paramDefs: [{ name: 'id', in: 'path' }],
            params: { id: '123' },
          }),
        );

        const result = await client.call(mockEndpoint);

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          '/users/123',
          undefined,
        );
        expect(mockBetaHttpClient.get).not.toHaveBeenCalled();
        expect(result).toEqual({ id: '123', name: 'Test User' });
      });

      it('should make a GET request to v1.0 endpoint when no version specified', async () => {
        const mockResponse = { data: { id: '123', name: 'Test User' } };
        mockHttpClient.get.mockResolvedValue(mockResponse);

        const mockEndpoint = jest.fn(
          (): EndpointRequest<any> => ({
            method: 'get',
            path: '/users/{id}',
            paramDefs: [{ name: 'id', in: 'path' }],
            params: { id: '123' },
          }),
        );

        const result = await client.call(mockEndpoint);

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          '/users/123',
          undefined,
        );
        expect(mockBetaHttpClient.get).not.toHaveBeenCalled();
        expect(result).toEqual({ id: '123', name: 'Test User' });
      });
    });

    describe('beta endpoint requests', () => {
      it('should make a GET request to beta endpoint', async () => {
        const mockResponse = { data: { id: '123', name: 'Test User' } };
        mockBetaHttpClient.get.mockResolvedValue(mockResponse);

        const mockEndpoint = jest.fn(
          (): EndpointRequest<any> => ({
            ver: 'beta',
            method: 'get',
            path: '/users/{id}',
            paramDefs: [{ name: 'id', in: 'path' }],
            params: { id: '123' },
          }),
        );

        const result = await client.call(mockEndpoint);

        expect(mockHttpClient.clone).toHaveBeenCalledWith({
          baseUrl: 'https://graph.microsoft.com/beta',
        });
        expect(mockBetaHttpClient.get).toHaveBeenCalledWith(
          '/users/123',
          undefined,
        );
        expect(mockHttpClient.get).not.toHaveBeenCalled();
        expect(result).toEqual({ id: '123', name: 'Test User' });
      });

      it('should reuse beta client for subsequent beta requests', async () => {
        const mockResponse = { data: { id: '123' } };
        mockBetaHttpClient.get.mockResolvedValue(mockResponse);

        const mockEndpoint = jest.fn(
          (): EndpointRequest<any> => ({
            ver: 'beta',
            method: 'get',
            path: '/users/{id}',
            paramDefs: [{ name: 'id', in: 'path' }],
            params: { id: '123' },
          }),
        );

        // Make two beta requests
        await client.call(mockEndpoint);
        await client.call(mockEndpoint);

        // Clone should only be called once
        expect(mockHttpClient.clone).toHaveBeenCalledTimes(1);
        expect(mockBetaHttpClient.get).toHaveBeenCalledTimes(2);
      });

      it('should make a POST request to beta endpoint with custom base URL', async () => {
        const customClient = new Client({
          baseUrlRoot: 'https://graph.microsoft.us',
        });
        const mockResponse = { data: { id: '456', name: 'New User' } };
        mockBetaHttpClient.post.mockResolvedValue(mockResponse);

        const mockEndpoint = jest.fn(
          (data: any): EndpointRequest<any> => ({
            ver: 'beta',
            method: 'post',
            path: '/users',
            paramDefs: [],
            body: data,
          }),
        );

        const userData = { name: 'New User', email: 'test@example.com' };
        const result = await customClient.call(mockEndpoint, userData);

        expect(mockHttpClient.clone).toHaveBeenCalledWith({
          baseUrl: 'https://graph.microsoft.us/beta',
        });
        expect(mockBetaHttpClient.post).toHaveBeenCalledWith(
          '/users',
          userData,
          undefined,
        );
        expect(result).toEqual({ id: '456', name: 'New User' });
      });
    });

    describe('GET requests', () => {
      it('should make a GET request with correct URL', async () => {
        const mockResponse = { data: { id: '123', name: 'Test User' } };
        mockHttpClient.get.mockResolvedValue(mockResponse);

        const mockEndpoint = jest.fn(
          (): EndpointRequest<any> => ({
            method: 'get',
            path: '/users/{id}',
            paramDefs: [{ name: 'id', in: 'path' }],
            params: { id: '123' },
          }),
        );

        const result = await client.call(mockEndpoint);

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          '/users/123',
          undefined,
        );
        expect(result).toEqual({ id: '123', name: 'Test User' });
      });

      it('should make a GET request with request config', async () => {
        const mockResponse = { data: { id: '123' } };
        mockHttpClient.get.mockResolvedValue(mockResponse);

        const mockEndpoint = jest.fn(
          (): EndpointRequest<any> => ({
            method: 'get',
            path: '/users',
            paramDefs: [],
          }),
        );

        const requestConfig = { timeout: 5000 };
        await client.call(mockEndpoint, { requestConfig });

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          '/users',
          requestConfig,
        );
      });
    });

    describe('POST requests', () => {
      beforeEach(() => {
        client = new Client();
      });

      describe('v1.0 endpoint requests', () => {
        it('should make a GET request to v1.0 endpoint', async () => {
          const mockResponse = { data: { id: '123', name: 'Test User' } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              ver: 'v1.0',
              method: 'get',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id: '123' },
            }),
          );

          const result = await client.call(mockEndpoint);

          expect(mockHttpClient.get).toHaveBeenCalledWith(
            '/users/123',
            undefined,
          );
          expect(mockBetaHttpClient.get).not.toHaveBeenCalled();
          expect(result).toEqual({ id: '123', name: 'Test User' });
        });

        it('should make a GET request to v1.0 endpoint when no version specified', async () => {
          const mockResponse = { data: { id: '123', name: 'Test User' } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id: '123' },
            }),
          );

          const result = await client.call(mockEndpoint);

          expect(mockHttpClient.get).toHaveBeenCalledWith(
            '/users/123',
            undefined,
          );
          expect(mockBetaHttpClient.get).not.toHaveBeenCalled();
          expect(result).toEqual({ id: '123', name: 'Test User' });
        });
      });

      describe('beta endpoint requests', () => {
        it('should make a GET request to beta endpoint', async () => {
          const mockResponse = { data: { id: '123', name: 'Test User' } };
          mockBetaHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              ver: 'beta',
              method: 'get',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id: '123' },
            }),
          );

          const result = await client.call(mockEndpoint);

          expect(mockHttpClient.clone).toHaveBeenCalledWith({
            baseUrl: 'https://graph.microsoft.com/beta',
          });
          expect(mockBetaHttpClient.get).toHaveBeenCalledWith(
            '/users/123',
            undefined,
          );
          expect(mockHttpClient.get).not.toHaveBeenCalled();
          expect(result).toEqual({ id: '123', name: 'Test User' });
        });

        it('should reuse beta client for subsequent beta requests', async () => {
          const mockResponse = { data: { id: '123' } };
          mockBetaHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              ver: 'beta',
              method: 'get',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id: '123' },
            }),
          );

          // Make two beta requests
          await client.call(mockEndpoint);
          await client.call(mockEndpoint);

          // Clone should only be called once
          expect(mockHttpClient.clone).toHaveBeenCalledTimes(1);
          expect(mockBetaHttpClient.get).toHaveBeenCalledTimes(2);
        });

        it('should make a POST request to beta endpoint with custom base URL', async () => {
          const customClient = new Client({
            baseUrlRoot: 'https://graph.microsoft.us',
          });
          const mockResponse = { data: { id: '456', name: 'New User' } };
          mockBetaHttpClient.post.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (data: any): EndpointRequest<any> => ({
              ver: 'beta',
              method: 'post',
              path: '/users',
              paramDefs: [],
              body: data,
            }),
          );

          const userData = { name: 'New User', email: 'test@example.com' };
          const result = await customClient.call(mockEndpoint, userData);

          expect(mockHttpClient.clone).toHaveBeenCalledWith({
            baseUrl: 'https://graph.microsoft.us/beta',
          });
          expect(mockBetaHttpClient.post).toHaveBeenCalledWith(
            '/users',
            userData,
            undefined,
          );
          expect(result).toEqual({ id: '456', name: 'New User' });
        });
      });

      describe('GET requests', () => {
        it('should make a GET request with correct URL', async () => {
          const mockResponse = { data: { id: '123', name: 'Test User' } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id: '123' },
            }),
          );

          const result = await client.call(mockEndpoint);

          expect(mockHttpClient.get).toHaveBeenCalledWith(
            '/users/123',
            undefined,
          );
          expect(result).toEqual({ id: '123', name: 'Test User' });
        });

        it('should make a GET request with request config', async () => {
          const mockResponse = { data: { id: '123' } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users',
              paramDefs: [],
            }),
          );

          const requestConfig = { timeout: 5000 };
          await client.call(mockEndpoint, { requestConfig });

          expect(mockHttpClient.get).toHaveBeenCalledWith(
            '/users',
            requestConfig,
          );
        });
      });

      describe('POST requests', () => {
        it('should make a POST request with body', async () => {
          const mockResponse = { data: { id: '456', name: 'New User' } };
          mockHttpClient.post.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (data: any): EndpointRequest<any> => ({
              method: 'post',
              path: '/users',
              paramDefs: [],
              body: data,
            }),
          );

          const userData = { name: 'New User', email: 'test@example.com' };
          const result = await client.call(mockEndpoint, userData);

          expect(mockHttpClient.post).toHaveBeenCalledWith(
            '/users',
            userData,
            undefined,
          );
          expect(result).toEqual({ id: '456', name: 'New User' });
        });

        it('should make a POST request with body and request config', async () => {
          const mockResponse = { data: { id: '456' } };
          mockHttpClient.post.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (data: any): EndpointRequest<any> => ({
              method: 'post',
              path: '/users',
              paramDefs: [],
              body: data,
            }),
          );

          const userData = { name: 'New User' };
          const requestConfig = { timeout: 10000 };

          await client.call(mockEndpoint, userData, { requestConfig });

          expect(mockHttpClient.post).toHaveBeenCalledWith(
            '/users',
            userData,
            requestConfig,
          );
        });
      });

      describe('PATCH requests', () => {
        it('should make a PATCH request with body', async () => {
          const mockResponse = { data: { id: '123', name: 'Updated User' } };
          mockHttpClient.patch.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (id: string, data: any): EndpointRequest<any> => ({
              method: 'patch',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id },
              body: data,
            }),
          );

          const updateData = { name: 'Updated User' };
          const result = await client.call(mockEndpoint, '123', updateData);

          expect(mockHttpClient.patch).toHaveBeenCalledWith(
            '/users/123',
            updateData,
            undefined,
          );
          expect(result).toEqual({ id: '123', name: 'Updated User' });
        });
      });

      describe('PUT requests', () => {
        it('should make a PUT request with body', async () => {
          const mockResponse = { data: { id: '123', name: 'Replaced User' } };
          mockHttpClient.put.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (id: string, data: any): EndpointRequest<any> => ({
              method: 'put',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id },
              body: data,
            }),
          );

          const replaceData = {
            name: 'Replaced User',
            email: 'new@example.com',
          };
          const result = await client.call(mockEndpoint, '123', replaceData);

          expect(mockHttpClient.put).toHaveBeenCalledWith(
            '/users/123',
            replaceData,
            undefined,
          );
          expect(result).toEqual({ id: '123', name: 'Replaced User' });
        });
      });

      describe('DELETE requests', () => {
        it('should make a DELETE request', async () => {
          const mockResponse = { data: null };
          mockHttpClient.delete.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (id: string): EndpointRequest<any> => ({
              method: 'delete',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id },
            }),
          );

          const result = await client.call(mockEndpoint, '123');

          expect(mockHttpClient.delete).toHaveBeenCalledWith(
            '/users/123',
            undefined,
          );
          expect(result).toBeNull();
        });

        it('should make a DELETE request with request config', async () => {
          const mockResponse = { data: null };
          mockHttpClient.delete.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (id: string): EndpointRequest<any> => ({
              method: 'delete',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id },
            }),
          );

          const requestConfig = { timeout: 3000 };
          await client.call(mockEndpoint, '123', { requestConfig });

          expect(mockHttpClient.delete).toHaveBeenCalledWith(
            '/users/123',
            requestConfig,
          );
        });
      });

      describe('Parameter handling', () => {
        it('should correctly detect CallOptions when provided', async () => {
          const mockResponse = { data: { id: '123' } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (id: string): EndpointRequest<any> => ({
              method: 'get',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id },
            }),
          );

          const requestConfig = { timeout: 5000 };
          await client.call(mockEndpoint, '123', { requestConfig });

          expect(mockEndpoint).toHaveBeenCalledWith('123');
          expect(mockHttpClient.get).toHaveBeenCalledWith(
            '/users/123',
            requestConfig,
          );
        });

        it('should handle multiple function parameters with CallOptions', async () => {
          const mockResponse = { data: { id: '123' } };
          mockHttpClient.post.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (id: string, data: any): EndpointRequest<any> => ({
              method: 'post',
              path: '/users/{id}/messages',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id },
              body: data,
            }),
          );

          const messageData = { text: 'Hello' };
          const requestConfig = { timeout: 2000 };

          await client.call(mockEndpoint, '123', messageData, {
            requestConfig,
          });

          expect(mockEndpoint).toHaveBeenCalledWith('123', messageData);
          expect(mockHttpClient.post).toHaveBeenCalledWith(
            '/users/123/messages',
            messageData,
            requestConfig,
          );
        });

        it('should handle function calls without CallOptions', async () => {
          const mockResponse = { data: { id: '123' } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (id: string): EndpointRequest<any> => ({
              method: 'get',
              path: '/users/{id}',
              paramDefs: [{ name: 'id', in: 'path' }],
              params: { id },
            }),
          );

          await client.call(mockEndpoint, '123');

          expect(mockEndpoint).toHaveBeenCalledWith('123');
          expect(mockHttpClient.get).toHaveBeenCalledWith(
            '/users/123',
            undefined,
          );
        });

        it('should handle header parameters in v1.0 requests', async () => {
          const mockResponse = { data: { value: [] } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users',
              paramDefs: [
                { name: 'Authorization', in: 'header' },
                { name: 'ConsistencyLevel', in: 'header' },
              ],
              params: {
                Authorization: 'Bearer token123',
                ConsistencyLevel: 'eventual',
              },
            }),
          );

          await client.call(mockEndpoint);

          expect(mockHttpClient.get).toHaveBeenCalledWith('/users', {
            headers: {
              Authorization: 'Bearer token123',
              ConsistencyLevel: 'eventual',
            },
          });
        });

        it('should handle header parameters in beta requests', async () => {
          const mockResponse = { data: { value: [] } };
          mockBetaHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              ver: 'beta',
              method: 'get',
              path: '/users',
              paramDefs: [
                { name: 'ConsistencyLevel', in: 'header' },
                { name: 'count', in: 'query' },
              ],
              params: {
                ConsistencyLevel: 'eventual',
                count: true,
              },
            }),
          );

          await client.call(mockEndpoint);

          expect(mockBetaHttpClient.get).toHaveBeenCalledWith(
            '/users?count=true',
            {
              headers: {
                ConsistencyLevel: 'eventual',
              },
            },
          );
        });

        it('should handle mixed parameter types (path, query, header)', async () => {
          const mockResponse = { data: { id: '123' } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users/{userId}/messages',
              paramDefs: [
                { name: 'userId', in: 'path' },
                { name: 'filter', in: 'query' },
                { name: 'select', in: 'query' },
                { name: 'Authorization', in: 'header' },
                { name: 'If-Match', in: 'header' },
              ],
              params: {
                userId: 'user-123',
                filter: 'isRead eq false',
                select: 'id,subject',
                Authorization: 'Bearer token123',
                'If-Match': '"etag-value"',
              },
            }),
          );

          await client.call(mockEndpoint);

          expect(mockHttpClient.get).toHaveBeenCalledWith(
            '/users/user-123/messages?filter=isRead%20eq%20false&select=id%2Csubject',
            {
              headers: {
                Authorization: 'Bearer token123',
                'If-Match': '"etag-value"',
              },
            },
          );
        });

        it('should merge header parameters with existing request config', async () => {
          const mockResponse = { data: { value: [] } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users',
              paramDefs: [
                { name: 'Authorization', in: 'header' },
                { name: 'ConsistencyLevel', in: 'header' },
              ],
              params: {
                Authorization: 'Bearer token123',
                ConsistencyLevel: 'eventual',
              },
            }),
          );

          const requestConfig = {
            timeout: 10000,
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'MyApp/1.0',
            },
          };

          await client.call(mockEndpoint, { requestConfig });

          expect(mockHttpClient.get).toHaveBeenCalledWith('/users', {
            timeout: 10000,
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'MyApp/1.0',
              Authorization: 'Bearer token123',
              ConsistencyLevel: 'eventual',
            },
          });
        });

        it('should handle POST request with header parameters and body', async () => {
          const mockResponse = { data: { id: '123' } };
          mockHttpClient.post.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (data: any): EndpointRequest<any> => ({
              method: 'post',
              path: '/users',
              paramDefs: [
                { name: 'Authorization', in: 'header' },
                { name: 'ConsistencyLevel', in: 'header' },
              ],
              params: {
                Authorization: 'Bearer token123',
                ConsistencyLevel: 'eventual',
              },
              body: data,
            }),
          );

          const userData = {
            displayName: 'John Doe',
            mail: 'john@contoso.com',
          };
          await client.call(mockEndpoint, userData);

          expect(mockHttpClient.post).toHaveBeenCalledWith('/users', userData, {
            headers: {
              Authorization: 'Bearer token123',
              ConsistencyLevel: 'eventual',
            },
          });
        });

        it('should handle header parameters with custom baseUrlRoot', async () => {
          const customClient = new Client({
            baseUrlRoot: 'https://graph.microsoft.us',
          });
          const mockResponse = { data: { value: [] } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users/{id}',
              paramDefs: [
                { name: 'id', in: 'path' },
                { name: 'Authorization', in: 'header' },
              ],
              params: {
                id: 'user-123',
                Authorization: 'Bearer token123',
              },
            }),
          );

          await customClient.call(mockEndpoint);

          expect(mockHttpClient.get).toHaveBeenCalledWith('/users/user-123', {
            headers: {
              Authorization: 'Bearer token123',
            },
          });
        });

        it('should ignore header parameters with falsy values', async () => {
          const mockResponse = { data: { value: [] } };
          mockHttpClient.get.mockResolvedValue(mockResponse);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users',
              paramDefs: [
                { name: 'Authorization', in: 'header' },
                { name: 'ConsistencyLevel', in: 'header' },
                { name: 'If-Match', in: 'header' },
              ],
              params: {
                Authorization: 'Bearer token123',
                ConsistencyLevel: null,
                'If-Match': undefined,
              },
            }),
          );

          await client.call(mockEndpoint);

          expect(mockHttpClient.get).toHaveBeenCalledWith('/users', {
            headers: {
              Authorization: 'Bearer token123',
            },
          });
        });
      });

      describe('Error handling', () => {
        it('should throw error for unsupported HTTP method', async () => {
          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'trace' as any,
              path: '/users',
              paramDefs: [],
            }),
          );

          await expect(client.call(mockEndpoint)).rejects.toThrow(
            'Unsupported HTTP method: trace',
          );
        });

        it('should propagate HTTP client errors', async () => {
          const mockError = new Error('Network error');
          mockHttpClient.get.mockRejectedValue(mockError);

          const mockEndpoint = jest.fn(
            (): EndpointRequest<any> => ({
              method: 'get',
              path: '/users',
              paramDefs: [],
            }),
          );

          await expect(client.call(mockEndpoint)).rejects.toThrow(
            'Network error',
          );
        });
      });
    });
  });
});
