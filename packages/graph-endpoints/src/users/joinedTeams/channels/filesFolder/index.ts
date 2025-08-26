export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/filesFolder',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
