export * as clockIn from './clockIn';
export * as clockOut from './clockOut';
export * as confirm from './confirm';
export * as confirmForUser from './confirmForUser';
export * as endBreak from './endBreak';
export * as startBreak from './startBreak';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timeCards': Operation<
    '/teams/{team-id}/schedule/timeCards',
    'get'
  >;
  'GET /teams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/timeCards': Operation<
    '/teams/{team-id}/schedule/timeCards',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * Delete a timeCard instance in a schedule.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/timeCards`
 *
 * Retrieve a list of timeCard entries in a schedule.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timeCards']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/timeCards',
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
 * `GET /teams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * Get the properties and relationships of a timeCard object by ID.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * Replace an existing timeCard with updated values.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/timeCards`
 *
 * Create a timeCard instance in a schedule.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeCards']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeCards']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/timeCards',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
