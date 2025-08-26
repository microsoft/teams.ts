import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/oauth2PermissionGrants': Operation<
    '/users/{user-id}/oauth2PermissionGrants',
    'get'
  >;
  'GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/oauth2PermissionGrants`
 *
 * Retrieve a list of oAuth2PermissionGrant entities, which represent delegated permissions granted to enable a client application to access an API on behalf of the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/oauth2PermissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/oauth2PermissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/oauth2PermissionGrants',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'oAuth2PermissionGrant-id', in: 'path' },
    ],
    params,
  };
}
