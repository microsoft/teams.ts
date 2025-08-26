import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/channels/{channel-id}/members/add': Operation<
    '/teams/{team-id}/channels/{channel-id}/members/add',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/members/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/add']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/add']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/members/add']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/members/add',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
