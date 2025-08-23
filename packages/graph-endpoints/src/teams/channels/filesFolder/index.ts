export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /teams/{team-id}/channels/{channel-id}/filesFolder': Operation<
    '/teams/{team-id}/channels/{channel-id}/filesFolder',
    'get'
  >;
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/filesFolder`
 *
 * Get the metadata for the location where the files of a channel are stored.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/filesFolder',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
