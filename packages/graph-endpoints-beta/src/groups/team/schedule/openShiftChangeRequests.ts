import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/openShiftChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/openShiftChangeRequests': Operation<
    '/groups/{group-id}/team/schedule/openShiftChangeRequests',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/openShiftChangeRequests`
 *
 * The open shift requests in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/openShiftChangeRequests',
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
 * `GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 * The open shift requests in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'openShiftChangeRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/openShiftChangeRequests`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/openShiftChangeRequests']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/openShiftChangeRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/openShiftChangeRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/openShiftChangeRequests',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
