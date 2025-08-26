import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffRequests': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/timeOffRequests': Operation<
    '/groups/{group-id}/team/schedule/timeOffRequests',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/timeOffRequests`
 *
 * The time off requests in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeOffRequests',
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
 * `GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 * The time off requests in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/timeOffRequests`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffRequests']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/timeOffRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeOffRequests',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
