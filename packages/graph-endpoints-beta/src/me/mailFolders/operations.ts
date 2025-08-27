import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/mailFolders/{mailFolder-id}/operations': Operation<
    '/me/mailFolders/{mailFolder-id}/operations',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}',
    'get'
  >;
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/operations`
 *
 * List the long-running folder operations of a mailFolder object.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /me/mailFolders/{mailFolder-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/operations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}`
 *
 * Read the properties and relationships of a mailFolderOperation object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/operations/{mailFolderOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'mailFolderOperation-id', in: 'path' },
    ],
    params,
  };
}
