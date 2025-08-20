export * as clockIn from './clockIn';
export * as clockOut from './clockOut';
export * as confirm from './confirm';
export * as endBreak from './endBreak';
export * as startBreak from './startBreak';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeCards': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/timeCards': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/timeCards`
 *
 * The time cards in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards',
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
 * `GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * The time cards in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
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
 * `PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeCards`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
