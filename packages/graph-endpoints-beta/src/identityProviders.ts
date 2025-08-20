import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /identityProviders/{identityProvider-id}': Operation<
    '/identityProviders/{identityProvider-id}',
    'delete'
  >;
  'GET /identityProviders': Operation<'/identityProviders', 'get'>;
  'GET /identityProviders/{identityProvider-id}': Operation<
    '/identityProviders/{identityProvider-id}',
    'get'
  >;
  'PATCH /identityProviders/{identityProvider-id}': Operation<
    '/identityProviders/{identityProvider-id}',
    'patch'
  >;
  'POST /identityProviders': Operation<'/identityProviders', 'post'>;
}

/**
 * `DELETE /identityProviders/{identityProvider-id}`
 *
 * Delete an identityProvider.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityProviders/{identityProvider-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityProviders/{identityProvider-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityProviders/{identityProvider-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'identityProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identityProviders`
 *
 * Retrieve a list of identityProviders objects.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /identityProviders']['parameters']
): EndpointRequest<IEndpoints['GET /identityProviders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProviders',
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
 * `GET /identityProviders/{identityProvider-id}`
 *
 * Retrieve the properties and relationships of an identityProvider.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityProviders/{identityProvider-id}']['parameters']
): EndpointRequest<IEndpoints['GET /identityProviders/{identityProvider-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityProviders/{identityProvider-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'identityProvider-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identityProviders/{identityProvider-id}`
 *
 * Update the properties of an identityProvider object.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityProviders/{identityProvider-id}']['body'],
  params?: IEndpoints['PATCH /identityProviders/{identityProvider-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /identityProviders/{identityProvider-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityProviders/{identityProvider-id}',
    paramDefs: [{ name: 'identityProvider-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identityProviders`
 *
 * Create a new identityProvider object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /identityProviders']['body'],
  params?: IEndpoints['POST /identityProviders']['parameters']
): EndpointRequest<IEndpoints['POST /identityProviders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityProviders',
    paramDefs: [],
    params,
    body,
  };
}
