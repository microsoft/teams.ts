export * as assignSensitivityLabel from './assignSensitivityLabel';
export * as members from './members';
export * as plans from './plans';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/rosters/{plannerRoster-id}': Operation<
    '/planner/rosters/{plannerRoster-id}',
    'delete'
  >;
  'GET /planner/rosters': Operation<'/planner/rosters', 'get'>;
  'GET /planner/rosters/{plannerRoster-id}': Operation<
    '/planner/rosters/{plannerRoster-id}',
    'get'
  >;
  'PATCH /planner/rosters/{plannerRoster-id}': Operation<
    '/planner/rosters/{plannerRoster-id}',
    'patch'
  >;
  'POST /planner/rosters': Operation<'/planner/rosters', 'post'>;
}

/**
 * `DELETE /planner/rosters/{plannerRoster-id}`
 *
 * Delete a plannerRoster object.
 */
export function del(
  params?: IEndpoints['DELETE /planner/rosters/{plannerRoster-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/rosters/{plannerRoster-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/rosters/{plannerRoster-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerRoster-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/rosters`
 *
 * Read the properties and relationships of a plannerRoster object.
 */
export function list(
  params?: IEndpoints['GET /planner/rosters']['parameters']
): EndpointRequest<IEndpoints['GET /planner/rosters']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters',
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
 * `GET /planner/rosters/{plannerRoster-id}`
 *
 * Read the properties and relationships of a plannerRoster object.
 */
export function get(
  params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}']['parameters']
): EndpointRequest<IEndpoints['GET /planner/rosters/{plannerRoster-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters/{plannerRoster-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerRoster-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/rosters/{plannerRoster-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}']['body'],
  params?: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/rosters/{plannerRoster-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/rosters/{plannerRoster-id}',
    paramDefs: [{ name: 'plannerRoster-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /planner/rosters`
 *
 * Create a new plannerRoster object.
 */
export function create(
  body: IEndpoints['POST /planner/rosters']['body'],
  params?: IEndpoints['POST /planner/rosters']['parameters']
): EndpointRequest<IEndpoints['POST /planner/rosters']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/rosters',
    paramDefs: [],
    params,
    body,
  };
}
