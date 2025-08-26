import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/emailMethods': Operation<
    '/users/{user-id}/authentication/emailMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'patch'
  >;
  'POST /users/{user-id}/authentication/emailMethods': Operation<
    '/users/{user-id}/authentication/emailMethods',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}`
 *
 * Deletes a user&#x27;s emailAuthenticationMethod object.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'emailAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/emailMethods`
 *
 * The email address registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/emailMethods']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/emailMethods']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/emailMethods',
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
 * `GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}`
 *
 * The email address registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'emailAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}`
 *
 * Update a user&#x27;s email address represented by an emailAuthenticationMethod object. Self-service operations aren&#x27;t supported.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'emailAuthenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/emailMethods`
 *
 * Set a user&#x27;s emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method. Self-service operations aren&#x27;t supported.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/emailMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/emailMethods']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/emailMethods']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/authentication/emailMethods',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
