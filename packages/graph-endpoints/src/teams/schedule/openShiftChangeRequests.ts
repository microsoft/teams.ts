import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests',
    'get'
  >;
  'GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/openShiftChangeRequests': Operation<
    '/teams/{team-id}/schedule/openShiftChangeRequests',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/openShiftChangeRequests`
 *
 * Retrieve a list of openShiftChangeRequest objects in a team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/openShiftChangeRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 * Retrieve the properties and relationships of an openShiftChangeRequest object.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/openShiftChangeRequests`
 *
 * Create instance of an openShiftChangeRequest object.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/schedule/openShiftChangeRequests']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/openShiftChangeRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
