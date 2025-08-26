import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/template': Operation<'/groups/{group-id}/team/template', 'get'>;
}

/**
 * `GET /groups/{group-id}/team/template`
 *
 * The template this team was created from. See available templates.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/template']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/template']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/template',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
