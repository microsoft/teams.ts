import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/members/add': Operation<
    '/groups/{group-id}/team/primaryChannel/members/add',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/members/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/members/add']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/members/add']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/members/add']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/members/add',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
