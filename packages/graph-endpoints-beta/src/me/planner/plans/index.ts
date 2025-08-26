export * as archive from './archive';
export * as buckets from './buckets';
export * as details from './details';
export * as moveToContainer from './moveToContainer';
export * as tasks from './tasks';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/plans/{plannerPlan-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}',
    'delete'
  >;
  'GET /me/planner/plans': Operation<'/me/planner/plans', 'get'>;
  'GET /me/planner/plans/{plannerPlan-id}': Operation<'/me/planner/plans/{plannerPlan-id}', 'get'>;
  'PATCH /me/planner/plans/{plannerPlan-id}': Operation<
    '/me/planner/plans/{plannerPlan-id}',
    'patch'
  >;
  'POST /me/planner/plans': Operation<'/me/planner/plans', 'post'>;
}

/**
 * `DELETE /me/planner/plans/{plannerPlan-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/plans`
 *
 * Retrieve a list of plannerplan objects shared with a user object.
 */
export function list(
  params?: IEndpoints['GET /me/planner/plans']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/plans',
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
 * `GET /me/planner/plans/{plannerPlan-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/plans/{plannerPlan-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/plans/{plannerPlan-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}']['body'],
  params?: IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner/plans/{plannerPlan-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner/plans/{plannerPlan-id}',
    paramDefs: [{ name: 'plannerPlan-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/planner/plans`
 *
 */
export function create(
  body: IEndpoints['POST /me/planner/plans']['body'],
  params?: IEndpoints['POST /me/planner/plans']['parameters']
): EndpointRequest<IEndpoints['POST /me/planner/plans']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/planner/plans',
    paramDefs: [],
    params,
    body,
  };
}
