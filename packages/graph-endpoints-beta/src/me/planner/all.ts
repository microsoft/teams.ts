import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/all/{plannerDelta-id}': Operation<
    '/me/planner/all/{plannerDelta-id}',
    'delete'
  >;
  'GET /me/planner/all': Operation<'/me/planner/all', 'get'>;
  'GET /me/planner/all/{plannerDelta-id}': Operation<'/me/planner/all/{plannerDelta-id}', 'get'>;
  'PATCH /me/planner/all/{plannerDelta-id}': Operation<
    '/me/planner/all/{plannerDelta-id}',
    'patch'
  >;
  'POST /me/planner/all': Operation<'/me/planner/all', 'post'>;
}

/**
 * `DELETE /me/planner/all/{plannerDelta-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/all/{plannerDelta-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner/all/{plannerDelta-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner/all/{plannerDelta-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerDelta-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/all`
 *
 */
export function get(
  params?: IEndpoints['GET /me/planner/all']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/all']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/all',
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
 * `GET /me/planner/all/{plannerDelta-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /me/planner/all/{plannerDelta-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/all/{plannerDelta-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/all/{plannerDelta-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerDelta-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/all/{plannerDelta-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/all/{plannerDelta-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/all/{plannerDelta-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner/all/{plannerDelta-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner/all/{plannerDelta-id}',
    paramDefs: [{ name: 'plannerDelta-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/planner/all`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/all']['body'],
  params?: IEndpoints['POST /me/planner/all']['parameters']
): EndpointRequest<IEndpoints['POST /me/planner/all']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/planner/all',
    paramDefs: [],
    params,
    body,
  };
}
