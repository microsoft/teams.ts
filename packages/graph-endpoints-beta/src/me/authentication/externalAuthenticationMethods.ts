import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/externalAuthenticationMethods': Operation<
    '/me/authentication/externalAuthenticationMethods',
    'get'
  >;
  'GET /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'patch'
  >;
  'POST /me/authentication/externalAuthenticationMethods': Operation<
    '/me/authentication/externalAuthenticationMethods',
    'post'
  >;
}

/**
 * `DELETE /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/authentication/externalAuthenticationMethods`
 *
 * Get a list of the externalAuthenticationMethod objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/externalAuthenticationMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/externalAuthenticationMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/externalAuthenticationMethods',
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
 * `GET /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
 *
 * Read the properties and relationships of an externalAuthenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    paramDefs: [{ name: 'externalAuthenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/authentication/externalAuthenticationMethods`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/externalAuthenticationMethods']['body'],
  params?: IEndpoints['POST /me/authentication/externalAuthenticationMethods']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/externalAuthenticationMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/externalAuthenticationMethods',
    paramDefs: [],
    params,
    body,
  };
}
