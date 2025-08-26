import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests',
    'get'
  >;
  'GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/swapShiftsChangeRequests': Operation<
    '/teams/{team-id}/schedule/swapShiftsChangeRequests',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/swapShiftsChangeRequests`
 *
 * Retrieve a list of swapShiftsChangeRequest objects in the team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/swapShiftsChangeRequests',
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
 * `GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 * Retrieve the properties and relationships of a swapShiftsChangeRequest object.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/swapShiftsChangeRequests`
 *
 * Create an instance of a swapShiftsChangeRequest object.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/schedule/swapShiftsChangeRequests']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/swapShiftsChangeRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
