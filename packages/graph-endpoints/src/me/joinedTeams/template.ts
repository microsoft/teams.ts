import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/template': Operation<'/me/joinedTeams/{team-id}/template', 'get'>;
}

/**
 * `GET /me/joinedTeams/{team-id}/template`
 *
 * The template this team was created from. See available templates.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/template']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/template']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/template',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
