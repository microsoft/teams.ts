import { ParamDefs } from '../types';

import { getInjectedUrl, getInjectedRequestConfig } from './url';

describe('getInjectedUrl', () => {
  it('should handle URLs with no parameters', () => {
    const url = '/users';
    const params: ParamDefs = {};
    const data = {};

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users');
  });

  it('should replace single path parameter', () => {
    const url = '/users/{id}';
    const params: ParamDefs = { path: ['id'] };
    const data = { id: '123' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/123');
  });

  it('should replace multiple path parameters', () => {
    const url = '/users/{userId}/groups/{groupId}';
    const params: ParamDefs = {
      path: ['userId', 'groupId'],
    };
    const data = { userId: 'user-123', groupId: 'group-456' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/user-123/groups/group-456');
  });

  it('should add single query parameter', () => {
    const url = '/users';
    const params: ParamDefs = { query: ['filter'] };
    const data = { filter: 'displayName eq John' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?filter=displayName%20eq%20John');
  });

  it('should add multiple query parameters', () => {
    const url = '/users';
    const params: ParamDefs = {
      query: ['filter', 'select', 'top'],
    };
    const data = {
      filter: 'displayName eq John',
      select: 'id,displayName',
      top: 10,
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe(
      '/users?filter=displayName%20eq%20John&select=id%2CdisplayName&top=10',
    );
  });

  it('should handle both path and query parameters', () => {
    const url = '/users/{userId}/messages';
    const params: ParamDefs = {
      path: ['userId'],
      query: ['filter', 'select'],
    };
    const data = {
      userId: 'user-123',
      filter: 'isRead eq false',
      select: 'id,subject',
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe(
      '/users/user-123/messages?filter=isRead%20eq%20false&select=id%2Csubject',
    );
  });

  it('should handle array query parameters with comma format', () => {
    const url = '/users';
    const params: ParamDefs = { query: ['select'] };
    const data = {
      select: ['id', 'displayName', 'mail'],
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?select=id%2CdisplayName%2Cmail');
  });

  it('should ignore header parameters in URL generation', () => {
    const url = '/users/{id}';
    const params: ParamDefs = {
      path: ['id'],
      header: ['Authorization', 'ConsistencyLevel'],
      query: ['select'],
    };
    const data = {
      id: '123',
      Authorization: 'Bearer token',
      ConsistencyLevel: 'eventual',
      select: 'id,displayName',
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/123?select=id%2CdisplayName');
  });

  it('should handle special characters in path parameters', () => {
    const url = '/users/{userPrincipalName}';
    const params: ParamDefs = { path: ['userPrincipalName'] };
    const data = { userPrincipalName: 'john@contoso.com' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/john@contoso.com');
  });

  it('should filter out undefined query parameter values', () => {
    const url = '/users';
    const params: ParamDefs = {
      query: ['filter', 'select'],
    };
    const data = {
      filter: 'displayName eq John',
      select: undefined,
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?filter=displayName%20eq%20John');
  });

  it('should handle numeric values in parameters', () => {
    const url = '/users/{id}/messages';
    const params: ParamDefs = {
      path: ['id'],
      query: ['top', 'skip'],
    };
    const data = {
      id: 123,
      top: 50,
      skip: 0,
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/123/messages?top=50&skip=0');
  });

  it('should handle boolean values in query parameters', () => {
    const url = '/users';
    const params: ParamDefs = {
      query: ['count', 'consistencyLevel'],
    };
    const data = {
      count: true,
      consistencyLevel: false,
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?count=true&consistencyLevel=false');
  });
});

describe('getInjectedRequestConfig', () => {
  it('should return undefined when no header params and no request config', () => {
    const params: ParamDefs = {
      query: ['select'],
      path: ['id'],
    };

    const data = { id: '123', select: 'displayName' };

    const result = getInjectedRequestConfig(params, data);

    expect(result).toBeUndefined();
  });

  it('should return original request config when no header params', () => {
    const params: ParamDefs = {
      query: ['select'],
    };

    const data = { select: 'displayName' };
    const requestConfig = { timeout: 5000 };

    const result = getInjectedRequestConfig(params, data, requestConfig);

    expect(result).toBe(requestConfig);
  });

  it('should inject single header parameter', () => {
    const params: ParamDefs = {
      header: ['Authorization'],
    };
    const data = { Authorization: 'Bearer token123' };

    const result = getInjectedRequestConfig(params, data);

    expect(result).toEqual({
      headers: {
        Authorization: 'Bearer token123',
      },
    });
  });

  it('should inject multiple header parameters', () => {
    const params: ParamDefs = {
      header: ['Authorization', 'ConsistencyLevel', 'If-Match'],
    };
    const data = {
      Authorization: 'Bearer token123',
      ConsistencyLevel: 'eventual',
      'If-Match': '"etag-value"',
    };

    const result = getInjectedRequestConfig(params, data);

    expect(result).toEqual({
      headers: {
        Authorization: 'Bearer token123',
        ConsistencyLevel: 'eventual',
        'If-Match': '"etag-value"',
      },
    });
  });

  it('should merge header parameters with existing request config', () => {
    const params: ParamDefs = {
      header: ['Authorization', 'ConsistencyLevel'],
    };
    const data = {
      Authorization: 'Bearer token123',
      ConsistencyLevel: 'eventual',
    };
    const requestConfig = {
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'MyApp/1.0',
      },
    };

    const result = getInjectedRequestConfig(params, data, requestConfig);

    expect(result).toEqual({
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'MyApp/1.0',
        Authorization: 'Bearer token123',
        ConsistencyLevel: 'eventual',
      },
    });
  });

  it('should override existing headers with parameter headers', () => {
    const params: ParamDefs = {
      header: ['Authorization'],
    };
    const data = {
      Authorization: 'Bearer new-token',
    };
    const requestConfig = {
      headers: {
        Authorization: 'Bearer old-token',
        'Content-Type': 'application/json',
      },
    };

    const result = getInjectedRequestConfig(params, data, requestConfig);

    expect(result).toEqual({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer new-token',
      },
    });
  });

  it('should ignore header parameters with falsy values', () => {
    const params: ParamDefs = {
      header: ['Authorization', 'ConsistencyLevel', 'If-Match'],
    };
    const data = {
      Authorization: 'Bearer token123',
      ConsistencyLevel: null,
      'If-Match': undefined,
    };

    const result = getInjectedRequestConfig(params, data);

    expect(result).toEqual({
      headers: {
        Authorization: 'Bearer token123',
      },
    });
  });

  it('should handle mixed parameter types correctly', () => {
    const params: ParamDefs = {
      path: ['userId'],
      query: ['select', 'filter'],
      header: ['Authorization', 'ConsistencyLevel'],
    };
    const data = {
      userId: 'user-123',
      select: 'id,displayName',
      filter: 'startsWith(displayName, "John")',
      Authorization: 'Bearer token123',
      ConsistencyLevel: 'eventual',
    };
    const requestConfig = { timeout: 5000 };

    const result = getInjectedRequestConfig(params, data, requestConfig);

    expect(result).toEqual({
      timeout: 5000,
      headers: {
        Authorization: 'Bearer token123',
        ConsistencyLevel: 'eventual',
      },
    });
  });

  it('should handle empty header params array', () => {
    const params: ParamDefs = {
      header: [],
      query: ['select'],
    };
    const data = { select: 'displayName' };
    const requestConfig = { timeout: 3000 };

    const result = getInjectedRequestConfig(params, data, requestConfig);

    expect(result).toBe(requestConfig);
  });
});
