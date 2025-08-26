import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/template': Operation<'/teams/{team-id}/template', 'get'>;
}

/**
 * `GET /teams/{team-id}/template`
 *
 * The template this team was created from. See available templates.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/template']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/template']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/template',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
