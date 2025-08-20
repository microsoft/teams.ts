import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/drive': Operation<
    '/sites/{site-id}/lists/{list-id}/drive',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/drive`
 *
 * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/drive']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/drive']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/drive',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}
