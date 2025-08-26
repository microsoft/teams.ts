import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/externalAuthenticationMethods': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'patch'
  >;
  'POST /users/{user-id}/authentication/externalAuthenticationMethods': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
 *
 * Delete an externalAuthenticationMethod object. This API doesn&#x27;t support self-service operations.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'externalAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/externalAuthenticationMethods`
 *
 * Represents the external methods registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/externalAuthenticationMethods',
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
 * `GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
 *
 * Represents the external methods registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'externalAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'externalAuthenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/externalAuthenticationMethods`
 *
 * Create a new externalAuthenticationMethod object. This API doesn&#x27;t support self-service operations.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/externalAuthenticationMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/externalAuthenticationMethods']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/externalAuthenticationMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/externalAuthenticationMethods',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
