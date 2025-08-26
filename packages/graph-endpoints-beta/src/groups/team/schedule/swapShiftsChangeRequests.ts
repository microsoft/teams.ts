import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests`
 *
 * The swap requests for shifts in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 * The swap requests for shifts in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'swapShiftsChangeRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/swapShiftsChangeRequests',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
