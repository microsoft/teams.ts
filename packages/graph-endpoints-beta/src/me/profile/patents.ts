import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/profile/patents/{itemPatent-id}': Operation<
    '/me/profile/patents/{itemPatent-id}',
    'delete'
  >;
  'GET /me/profile/patents': Operation<'/me/profile/patents', 'get'>;
  'GET /me/profile/patents/{itemPatent-id}': Operation<
    '/me/profile/patents/{itemPatent-id}',
    'get'
  >;
  'PATCH /me/profile/patents/{itemPatent-id}': Operation<
    '/me/profile/patents/{itemPatent-id}',
    'patch'
  >;
  'POST /me/profile/patents': Operation<'/me/profile/patents', 'post'>;
}

/**
 * `DELETE /me/profile/patents/{itemPatent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/profile/patents/{itemPatent-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/profile/patents/{itemPatent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/profile/patents/{itemPatent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'itemPatent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/profile/patents`
 *
 * Retrieve a list of itemPatent objects from a user&#x27;s profile.
 */
export function list(
  params?: IEndpoints['GET /me/profile/patents']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/patents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/patents',
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
 * `GET /me/profile/patents/{itemPatent-id}`
 *
 * Read the properties and relationships of an itemPatent object.
 */
export function get(
  params?: IEndpoints['GET /me/profile/patents/{itemPatent-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/profile/patents/{itemPatent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/profile/patents/{itemPatent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'itemPatent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/profile/patents/{itemPatent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/profile/patents/{itemPatent-id}']['body'],
  params?: IEndpoints['PATCH /me/profile/patents/{itemPatent-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/profile/patents/{itemPatent-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/profile/patents/{itemPatent-id}',
    paramDefs: [{ name: 'itemPatent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/profile/patents`
 *
 * Create a new itemPatent object within a user&#x27;s profile.
 */
export function create(
  body: IEndpoints['POST /me/profile/patents']['body'],
  params?: IEndpoints['POST /me/profile/patents']['parameters']
): EndpointRequest<IEndpoints['POST /me/profile/patents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/profile/patents',
    paramDefs: [],
    params,
    body,
  };
}
