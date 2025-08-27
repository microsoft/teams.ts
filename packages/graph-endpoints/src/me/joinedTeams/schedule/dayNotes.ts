import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/dayNotes': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/schedule/dayNotes': Operation<
    '/me/joinedTeams/{team-id}/schedule/dayNotes',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/schedule/dayNotes`
 *
 * The day notes in the schedule.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/dayNotes',
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
 * `GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
 *
 * The day notes in the schedule.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/schedule/dayNotes/{dayNote-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'dayNote-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/dayNotes`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/dayNotes']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/dayNotes']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/dayNotes']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/dayNotes',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
