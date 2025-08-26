import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations`
 *
 * The collection of long-running operations in the mailFolder.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}`
 *
 * The collection of long-running operations in the mailFolder.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/operations/{mailFolderOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolder-id1', in: 'path' },
      { name: 'mailFolderOperation-id', in: 'path' },
    ],
    params,
  };
}
