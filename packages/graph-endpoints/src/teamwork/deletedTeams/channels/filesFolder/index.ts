export * as content from './content';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder',
    'get'
  >;
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder`
 *
 * Metadata for the location where the channel&#x27;s files are stored.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder']['response']
> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
