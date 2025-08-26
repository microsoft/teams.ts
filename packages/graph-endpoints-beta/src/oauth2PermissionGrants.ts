import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'delete'
  >;
  'GET /oauth2PermissionGrants': Operation<'/oauth2PermissionGrants', 'get'>;
  'GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'get'
  >;
  'PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}': Operation<
    '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    'patch'
  >;
  'POST /oauth2PermissionGrants': Operation<'/oauth2PermissionGrants', 'post'>;
}

/**
 * `DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
 *
 * Delete an oAuth2PermissionGrant, representing a delegated permission grant. When a delegated permission grant is deleted, the access it granted is revoked. Existing access tokens will continue to be valid for their lifetime, but new access tokens will not be granted for the delegated permissions identified in the deleted oAuth2PermissionGrant.
 */
export function del(
  params?: IEndpoints['DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'oAuth2PermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /oauth2PermissionGrants`
 *
 * Retrieve a list of oAuth2PermissionGrant objects, representing delegated permissions which have been granted for client applications to access APIs on behalf of signed-in users.
 */
export function list(
  params?: IEndpoints['GET /oauth2PermissionGrants']['parameters']
): EndpointRequest<IEndpoints['GET /oauth2PermissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/oauth2PermissionGrants',
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
 * `GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
 *
 * Retrieve the properties of a single delegated permission grant represented by an oAuth2PermissionGrant object. An oAuth2PermissionGrant represents delegated permissions which have been granted for a client application to access an API on behalf of a signed-in user.
 */
export function get(
  params?: IEndpoints['GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oAuth2PermissionGrant-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}`
 *
 * Update the properties of oAuth2PermissionGrant object, representing a delegated permission grant. An oAuth2PermissionGrant can be updated to change which delegated permissions are granted, by adding or removing items from the list in scopes.
 */
export function update(
  body: IEndpoints['PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['body'],
  params?: IEndpoints['PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /oauth2PermissionGrants/{oAuth2PermissionGrant-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/oauth2PermissionGrants/{oAuth2PermissionGrant-id}',
    paramDefs: [{ name: 'oAuth2PermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /oauth2PermissionGrants`
 *
 * Create a delegated permission grant, represented by an oAuth2PermissionGrant object. A delegated permission grant authorizes a client service principal (representing a client application) to access a resource service principal (representing an API), on behalf of a signed-in user, for the level of access limited by the delegated permissions which were granted.
 */
export function create(
  body: IEndpoints['POST /oauth2PermissionGrants']['body'],
  params?: IEndpoints['POST /oauth2PermissionGrants']['parameters']
): EndpointRequest<IEndpoints['POST /oauth2PermissionGrants']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/oauth2PermissionGrants',
    paramDefs: [],
    params,
    body,
  };
}
