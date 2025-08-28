import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/members/add': Operation<
    '/teams/{team-id}/primaryChannel/members/add',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/members/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/members/add']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/members/add']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/members/add']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/members/add',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
