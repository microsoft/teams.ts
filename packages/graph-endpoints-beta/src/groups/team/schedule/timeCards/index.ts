export * as clockIn from './clockIn';
export * as clockOut from './clockOut';
export * as confirm from './confirm';
export * as confirmForUser from './confirmForUser';
export * as endBreak from './endBreak';
export * as startBreak from './startBreak';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timeCards': Operation<
    '/groups/{group-id}/team/schedule/timeCards',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/timeCards': Operation<
    '/groups/{group-id}/team/schedule/timeCards',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/timeCards`
 *
 * The time cards in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/timeCards']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeCards',
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
 * `GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}`
 *
 * The time cards in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/timeCards`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/timeCards']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeCards',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
