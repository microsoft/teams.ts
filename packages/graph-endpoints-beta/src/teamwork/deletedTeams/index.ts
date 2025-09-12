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
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deletedTeam-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}`
 *
 * A collection of deleted teams.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}',
    paramDefs: {
      path: ['deletedTeam-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}',
    paramDefs: {
      path: ['deletedTeam-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams']['body']
): EndpointRequest<IEndpoints['POST /teamwork/deletedTeams']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams',
    body,
  };
}
