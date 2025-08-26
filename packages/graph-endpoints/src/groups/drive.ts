import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/drive': Operation<'/groups/{group-id}/drive', 'get'>;
}

/**
 * `GET /groups/{group-id}/drive`
 *
 * The group&#x27;s default drive. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/drive']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/drive']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
