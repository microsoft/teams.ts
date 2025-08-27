import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timeOffRequests': Operation<
    '/teams/{team-id}/schedule/timeOffRequests',
    'get'
  >;
  'GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}': Operation<
    '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/timeOffRequests': Operation<
    '/teams/{team-id}/schedule/timeOffRequests',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 * Delete a timeOffRequest object.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/timeOffRequests`
 *
 * Retrieve a list of timeOffRequest objects in the team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/timeOffRequests',
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
 * `GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 * Retrieve the properties and relationships of a timeoffrequest object.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/schedule/timeOffRequests/{timeOffRequest-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeOffRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/timeOffRequests`
 *
 * Create instance of a timeoffrequest object.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeOffRequests']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeOffRequests']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeOffRequests']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/timeOffRequests',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
