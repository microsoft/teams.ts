export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/primaryChannel/filesFolder': Operation<
    '/groups/{group-id}/team/primaryChannel/filesFolder',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/filesFolder',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}
