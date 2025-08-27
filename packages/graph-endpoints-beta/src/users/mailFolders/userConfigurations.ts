import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations',
    'get'
  >;
  'GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}': Operation<
    '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'userConfiguration-id', in: 'path' },
    ],
    params,
  };
}
