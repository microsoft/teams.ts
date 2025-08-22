export * as channels from './channels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams': Operation<'/teamwork/deletedTeams', 'get'>;
  'GET /teamwork/deletedTeams/{deletedTeam-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams': Operation<'/teamwork/deletedTeams', 'post'>;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}']['response']> {
  return {
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams`
 *
 * Get a list of the deletedTeam objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/deletedTeams']['response']> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}`
 *
 * The deleted team.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}']['response']> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}']['response']> {
  return {
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}',
    paramDefs: [{ name: 'deletedTeam-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams']['parameters']
): EndpointRequest<IEndpoints['POST /teamwork/deletedTeams']['response']> {
  return {
    method: 'post',
    path: '/teamwork/deletedTeams',
    paramDefs: [],
    params,
    body,
  };
}
