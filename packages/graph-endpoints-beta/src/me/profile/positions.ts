import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/positions/{workPosition-id}': Operation<
    '/me/profile/positions/{workPosition-id}',
    'delete'
  >;
  'GET /me/profile/positions': Operation<'/me/profile/positions', 'get'>;
  'GET /me/profile/positions/{workPosition-id}': Operation<
    '/me/profile/positions/{workPosition-id}',
    'get'
  >;
  'PATCH /me/profile/positions/{workPosition-id}': Operation<
    '/me/profile/positions/{workPosition-id}',
    'patch'
  >;
  'POST /me/profile/positions': Operation<'/me/profile/positions', 'post'>;
}

/**
 * `DELETE /me/profile/positions/{workPosition-id}`
 *
 * Delete a specific workPosition object from a user&#x27;s profile.
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/positions/{workPosition-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/positions/{workPosition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/positions/{workPosition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'workPosition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/positions`
 *
 * Retrieve a list of workPosition objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/positions']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/positions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/positions',
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
 * `GET /me/profile/positions/{workPosition-id}`
 *
 * Retrieve the properties and relationships of a workPosition object in a user&#x27;s profile.
 */
export function get(
  params?: IEndpoints['GET /me/profile/positions/{workPosition-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/positions/{workPosition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/positions/{workPosition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'workPosition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/positions/{workPosition-id}`
 *
 * Update the properties of a workPosition object in a user&#x27;s profile.
 */
export function update(
  body: IEndpoints['PATCH /me/profile/positions/{workPosition-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/positions/{workPosition-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/positions/{workPosition-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/positions/{workPosition-id}',
    paramDefs: [{ name: 'workPosition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/positions`
 *
 * Use this API to create a new workPosition in a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/positions']['body'],
  params?: IEndpoints['POST /me/profile/positions']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/positions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/positions',
    paramDefs: [],
    params,
    body,
  };
}
