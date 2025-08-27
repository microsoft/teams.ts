export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/primaryChannel/filesFolder': Operation<
    '/teams/{team-id}/primaryChannel/filesFolder',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/primaryChannel/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/filesFolder']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/filesFolder',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}
