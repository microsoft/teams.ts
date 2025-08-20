import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/oauth2PermissionGrants': Operation<'/me/oauth2PermissionGrants', 'get'>;
  'GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'get'
  >;
}

/**
 * `GET /me/oauth2PermissionGrants`
 *
 */
export function list(
  params?: IEndpoints['GET /me/oauth2PermissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /me/oauth2PermissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/oauth2PermissionGrants',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oAuth2PermissionGrant-id', in: 'path' },
    ],
    params,
  };
}
