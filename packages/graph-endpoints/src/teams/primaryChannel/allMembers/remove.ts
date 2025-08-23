import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/allMembers/remove': Operation<
    '/teams/{team-id}/primaryChannel/allMembers/remove',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/allMembers/remove`
 *
 * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/remove']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/remove']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/allMembers/remove']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/allMembers/remove',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
