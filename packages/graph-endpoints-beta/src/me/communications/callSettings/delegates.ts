import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegates/{delegationSettings-id}',
    'delete'
  >;
  'GET /me/communications/callSettings/delegates': Operation<
    '/me/communications/callSettings/delegates',
    'get'
  >;
  'GET /me/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegates/{delegationSettings-id}',
    'get'
  >;
  'PATCH /me/communications/callSettings/delegates/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegates/{delegationSettings-id}',
    'patch'
  >;
  'POST /me/communications/callSettings/delegates': Operation<
    '/me/communications/callSettings/delegates',
    'post'
  >;
}

/**
 * `DELETE /me/communications/callSettings/delegates/{delegationSettings-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/communications/callSettings/delegates/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/communications/callSettings/delegates/{delegationSettings-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegationSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/communications/callSettings/delegates`
 *
 * Get a list of all delegates for a user.
 */
export function list(
  params?: IEndpoints['GET /me/communications/callSettings/delegates']['parameters']
): EndpointRequest<IEndpoints['GET /me/communications/callSettings/delegates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/communications/callSettings/delegates',
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
 * `GET /me/communications/callSettings/delegates/{delegationSettings-id}`
 *
 * Read the properties and relationships of a delegationSettings object.
 */
export function get(
  params?: IEndpoints['GET /me/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/communications/callSettings/delegates/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/communications/callSettings/delegates/{delegationSettings-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegationSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/communications/callSettings/delegates/{delegationSettings-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/communications/callSettings/delegates/{delegationSettings-id}']['body'],
  params?: IEndpoints['PATCH /me/communications/callSettings/delegates/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/communications/callSettings/delegates/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/communications/callSettings/delegates/{delegationSettings-id}',
    paramDefs: [{ name: 'delegationSettings-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/communications/callSettings/delegates`
 *
 */
export function create(
  body: IEndpoints['POST /me/communications/callSettings/delegates']['body'],
  params?: IEndpoints['POST /me/communications/callSettings/delegates']['parameters']
): EndpointRequest<IEndpoints['POST /me/communications/callSettings/delegates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/communications/callSettings/delegates',
    paramDefs: [],
    params,
    body,
  };
}
