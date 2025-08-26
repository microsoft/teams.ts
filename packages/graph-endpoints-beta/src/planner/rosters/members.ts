import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    'delete'
  >;
  'GET /planner/rosters/{plannerRoster-id}/members': Operation<
    '/planner/rosters/{plannerRoster-id}/members',
    'get'
  >;
  'GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    'get'
  >;
  'PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}': Operation<
    '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    'patch'
  >;
  'POST /planner/rosters/{plannerRoster-id}/members': Operation<
    '/planner/rosters/{plannerRoster-id}/members',
    'post'
  >;
}

/**
 * `DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}`
 *
 * Delete a plannerRosterMember object.
 */
export function del(
  params?: IEndpoints['DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerRoster-id', in: 'path' },
      { name: 'plannerRosterMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/rosters/{plannerRoster-id}/members`
 *
 * Get the list of plannerRosterMembers from a plannerRoster.
 */
export function list(
  params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/members']['parameters']
): EndpointRequest<IEndpoints['GET /planner/rosters/{plannerRoster-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters/{plannerRoster-id}/members',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerRoster-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}`
 *
 * Read the properties and relationships of a plannerRosterMember object.
 */
export function get(
  params?: IEndpoints['GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerRoster-id', in: 'path' },
      { name: 'plannerRosterMember-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['body'],
  params?: IEndpoints['PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/rosters/{plannerRoster-id}/members/{plannerRosterMember-id}',
    paramDefs: [
      { name: 'plannerRoster-id', in: 'path' },
      { name: 'plannerRosterMember-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /planner/rosters/{plannerRoster-id}/members`
 *
 * Add a member to the plannerRoster object.
 */
export function create(
  body: IEndpoints['POST /planner/rosters/{plannerRoster-id}/members']['body'],
  params?: IEndpoints['POST /planner/rosters/{plannerRoster-id}/members']['parameters']
): EndpointRequest<IEndpoints['POST /planner/rosters/{plannerRoster-id}/members']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/rosters/{plannerRoster-id}/members',
    paramDefs: [{ name: 'plannerRoster-id', in: 'path' }],
    params,
    body,
  };
}
