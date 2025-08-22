import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffReasons': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/timeOffReasons': Operation<
    '/groups/{group-id}/team/schedule/timeOffReasons',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/timeOffReasons`
 *
 * The set of reasons for a time off in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeOffReasons',
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
 * `GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}`
 *
 * The set of reasons for a time off in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/timeOffReasons`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffReasons']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeOffReasons']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/timeOffReasons']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeOffReasons',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
