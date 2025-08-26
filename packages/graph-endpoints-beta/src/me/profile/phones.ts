import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/phones/{itemPhone-id}': Operation<
    '/me/profile/phones/{itemPhone-id}',
    'delete'
  >;
  'GET /me/profile/phones': Operation<'/me/profile/phones', 'get'>;
  'GET /me/profile/phones/{itemPhone-id}': Operation<'/me/profile/phones/{itemPhone-id}', 'get'>;
  'PATCH /me/profile/phones/{itemPhone-id}': Operation<
    '/me/profile/phones/{itemPhone-id}',
    'patch'
  >;
  'POST /me/profile/phones': Operation<'/me/profile/phones', 'post'>;
}

/**
 * `DELETE /me/profile/phones/{itemPhone-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/phones/{itemPhone-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/phones/{itemPhone-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/phones/{itemPhone-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'itemPhone-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/phones`
 *
 * Retrieve a list of itemPhone objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/phones']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/phones']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/phones',
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
 * `GET /me/profile/phones/{itemPhone-id}`
 *
 * Retrieve the properties and relationships of an itemPhone object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/phones/{itemPhone-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/phones/{itemPhone-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/phones/{itemPhone-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'itemPhone-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/phones/{itemPhone-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/phones/{itemPhone-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/phones/{itemPhone-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/phones/{itemPhone-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/phones/{itemPhone-id}',
    paramDefs: [{ name: 'itemPhone-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/phones`
 *
 * Use this API to create a new itemPhone object in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/phones']['body'],
  params?: IEndpoints['POST /me/profile/phones']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/phones']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/phones',
    paramDefs: [],
    params,
    body,
  };
}
