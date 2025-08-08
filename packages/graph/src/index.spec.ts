import * as http from '@microsoft/teams.common/http';

import { Client } from './index';

import type { EndpointRequest } from './common';

// Mock the http module
jest.mock('@microsoft/teams.common/http', () => ({
  Client: jest.fn(),
}));

// Mock the package.json import
jest.mock('src/../package.json', () => ({
  version: '1.0.0',
}));

// Mock the utils/url module
jest.mock('@utils/url', () => ({
  getInjectedUrl: jest.fn((path, _paramDefs, params) => {
    // Simple mock implementation that replaces {param} with values
    let url = path;
    for (const [key, value] of Object.entries(params)) {
      url = url.replace(`{${key}}`, String(value));
    }
    return url;
  }),
}));

describe('Client.call', () => {
  let client: Client;
  let mockHttpClient: jest.Mocked<http.Client>;

  beforeEach(() => {
    jest.clearAllMocks();

    // Create mock HTTP client
    mockHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      clone: jest.fn(),
    } as any;

    (http.Client as jest.MockedClass<typeof http.Client>).mockImplementation(
      () => mockHttpClient,
    );

    client = new Client();
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

      expect(mockHttpClient.get).toHaveBeenCalledWith('/users/123', undefined);
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

      expect(mockHttpClient.get).toHaveBeenCalledWith('/users', requestConfig);
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

      const replaceData = { name: 'Replaced User', email: 'new@example.com' };
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

      await client.call(mockEndpoint, '123', messageData, { requestConfig });

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
      expect(mockHttpClient.get).toHaveBeenCalledWith('/users/123', undefined);
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

      await expect(client.call(mockEndpoint)).rejects.toThrow('Network error');
    });
  });
});
