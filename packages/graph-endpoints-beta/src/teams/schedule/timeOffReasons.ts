import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timeOffReasons': Operation<
    '/teams/{team-id}/schedule/timeOffReasons',
    'get'
  >;
  'GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}': Operation<
    '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/timeOffReasons': Operation<
    '/teams/{team-id}/schedule/timeOffReasons',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 * Mark a timeOffReason as inactive by setting the isActive property. Every team must include at least one timeOffReason. This method doesn&#x27;t remove the specified timeOffReason instance. timeOffItem instances that were assigned this reason remain assigned to this reason.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/timeOffReasons`
 *
 * The set of reasons for a time off in the schedule.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/timeOffReasons',
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
 * `GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 * Retrieve the properties and relationships of a timeOffReason object by ID.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}`
 *
 * Replace an existing timeOffReason. If the specified timeOffReason doesn&#x27;t exist, this method returns 404 Not found.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/schedule/timeOffReasons/{timeOffReason-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeOffReason-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/timeOffReasons`
 *
 * Create a new timeOffReason.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeOffReasons']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeOffReasons']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeOffReasons']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/timeOffReasons',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
