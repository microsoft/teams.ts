import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/addresses/{itemAddress-id}': Operation<
    '/me/profile/addresses/{itemAddress-id}',
    'delete'
  >;
  'GET /me/profile/addresses': Operation<'/me/profile/addresses', 'get'>;
  'GET /me/profile/addresses/{itemAddress-id}': Operation<
    '/me/profile/addresses/{itemAddress-id}',
    'get'
  >;
  'PATCH /me/profile/addresses/{itemAddress-id}': Operation<
    '/me/profile/addresses/{itemAddress-id}',
    'patch'
  >;
  'POST /me/profile/addresses': Operation<'/me/profile/addresses', 'post'>;
}

/**
 * `DELETE /me/profile/addresses/{itemAddress-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/addresses/{itemAddress-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/addresses/{itemAddress-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/addresses/{itemAddress-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'itemAddress-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/addresses`
 *
 * Get the itemAddress resources from the addresses navigation property.
 */
export function list(
  params?: IEndpoints['GET /me/profile/addresses']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/addresses']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/addresses',
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
 * `GET /me/profile/addresses/{itemAddress-id}`
 *
 * Read the properties and relationships of an itemAddress object.
 */
export function get(
  params?: IEndpoints['GET /me/profile/addresses/{itemAddress-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/addresses/{itemAddress-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/addresses/{itemAddress-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'itemAddress-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/addresses/{itemAddress-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/addresses/{itemAddress-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/addresses/{itemAddress-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/addresses/{itemAddress-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/addresses/{itemAddress-id}',
    paramDefs: [{ name: 'itemAddress-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/addresses`
 *
 * Create a new itemAddress object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/addresses']['body'],
  params?: IEndpoints['POST /me/profile/addresses']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/addresses']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/addresses',
    paramDefs: [],
    params,
    body,
  };
}
