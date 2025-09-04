import { IParam } from './interfaces';
import { getInjectedUrl } from './url';

describe('getInjectedUrl', () => {
  it('should handle URLs with no parameters', () => {
    const url = '/users';
    const params: IParam[] = [];
    const data = {};

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users');
  });

  it('should replace single path parameter', () => {
    const url = '/users/{id}';
    const params: IParam[] = [{ in: 'path', name: 'id' }];
    const data = { id: '123' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/123');
  });

  it('should replace multiple path parameters', () => {
    const url = '/users/{userId}/groups/{groupId}';
    const params: IParam[] = [
      { in: 'path', name: 'userId' },
      { in: 'path', name: 'groupId' },
    ];
    const data = { userId: 'user-123', groupId: 'group-456' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/user-123/groups/group-456');
  });

  it('should add single query parameter', () => {
    const url = '/users';
    const params: IParam[] = [{ in: 'query', name: 'filter' }];
    const data = { filter: 'displayName eq John' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?filter=displayName%20eq%20John');
  });

  it('should add multiple query parameters', () => {
    const url = '/users';
    const params: IParam[] = [
      { in: 'query', name: 'filter' },
      { in: 'query', name: 'select' },
      { in: 'query', name: 'top' },
    ];
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
    const params: IParam[] = [
      { in: 'path', name: 'userId' },
      { in: 'query', name: 'filter' },
      { in: 'query', name: 'select' },
    ];
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
    const params: IParam[] = [{ in: 'query', name: 'select' }];
    const data = {
      select: ['id', 'displayName', 'mail'],
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?select=id%2CdisplayName%2Cmail');
  });

  it('should ignore parameters not in path or query', () => {
    const url = '/users/{id}';
    const params: IParam[] = [
      { in: 'path', name: 'id' },
      { in: 'header', name: 'Authorization' },
      { in: 'body', name: 'displayName' },
    ];
    const data = {
      id: '123',
      Authorization: 'Bearer token',
      displayName: 'John Doe',
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/123');
  });

  it('should handle special characters in path parameters', () => {
    const url = '/users/{userPrincipalName}';
    const params: IParam[] = [{ in: 'path', name: 'userPrincipalName' }];
    const data = { userPrincipalName: 'john@contoso.com' };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users/john@contoso.com');
  });

  it('should filter out undefined query parameter values', () => {
    const url = '/users';
    const params: IParam[] = [
      { in: 'query', name: 'filter' },
      { in: 'query', name: 'select' },
    ];
    const data = {
      filter: 'displayName eq John',
      select: undefined,
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?filter=displayName%20eq%20John');
  });

  it('should handle numeric values in parameters', () => {
    const url = '/users/{id}/messages';
    const params: IParam[] = [
      { in: 'path', name: 'id' },
      { in: 'query', name: 'top' },
      { in: 'query', name: 'skip' },
    ];
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
    const params: IParam[] = [
      { in: 'query', name: 'count' },
      { in: 'query', name: 'consistencyLevel' },
    ];
    const data = {
      count: true,
      consistencyLevel: false,
    };

    const result = getInjectedUrl(url, params, data);

    expect(result).toBe('/users?count=true&consistencyLevel=false');
  });
});
