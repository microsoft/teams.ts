import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/createdOnBehalfOf': Operation<
    '/groups/{group-id}/createdOnBehalfOf',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/createdOnBehalfOf`
 *
 * The user (or application) that created the group. NOTE: This property isn&#x27;t set if the user is an administrator. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/createdOnBehalfOf']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/createdOnBehalfOf']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/createdOnBehalfOf',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
