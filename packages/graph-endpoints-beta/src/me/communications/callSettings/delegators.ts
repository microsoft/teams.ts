import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegators/{delegationSettings-id}',
    'delete'
  >;
  'GET /me/communications/callSettings/delegators': Operation<
    '/me/communications/callSettings/delegators',
    'get'
  >;
  'GET /me/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegators/{delegationSettings-id}',
    'get'
  >;
  'PATCH /me/communications/callSettings/delegators/{delegationSettings-id}': Operation<
    '/me/communications/callSettings/delegators/{delegationSettings-id}',
    'patch'
  >;
  'POST /me/communications/callSettings/delegators': Operation<
    '/me/communications/callSettings/delegators',
    'post'
  >;
}

/**
 * `DELETE /me/communications/callSettings/delegators/{delegationSettings-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/communications/callSettings/delegators/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/communications/callSettings/delegators/{delegationSettings-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'delegationSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/communications/callSettings/delegators`
 *
 * Get a list of all delegators for a user.
 */
export function list(
  params?: IEndpoints['GET /me/communications/callSettings/delegators']['parameters']
): EndpointRequest<IEndpoints['GET /me/communications/callSettings/delegators']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/communications/callSettings/delegators',
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
 * `GET /me/communications/callSettings/delegators/{delegationSettings-id}`
 *
 * Represents the delegator settings.
 */
export function get(
  params?: IEndpoints['GET /me/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/communications/callSettings/delegators/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/communications/callSettings/delegators/{delegationSettings-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'delegationSettings-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/communications/callSettings/delegators/{delegationSettings-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/communications/callSettings/delegators/{delegationSettings-id}']['body'],
  params?: IEndpoints['PATCH /me/communications/callSettings/delegators/{delegationSettings-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/communications/callSettings/delegators/{delegationSettings-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/communications/callSettings/delegators/{delegationSettings-id}',
    paramDefs: [{ name: 'delegationSettings-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/communications/callSettings/delegators`
 *
 */
export function create(
  body: IEndpoints['POST /me/communications/callSettings/delegators']['body'],
  params?: IEndpoints['POST /me/communications/callSettings/delegators']['parameters']
): EndpointRequest<IEndpoints['POST /me/communications/callSettings/delegators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/communications/callSettings/delegators',
    paramDefs: [],
    params,
    body,
  };
}
