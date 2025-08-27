import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/archive': Operation<'/groups/{group-id}/team/archive', 'post'>;
}

/**
  * `POST /groups/{group-id}/team/archive`
  *
  * Archive the specified team. 
When a team is archived, users can no longer make most changes to the team. For example, users can no longer: send or like messages on any channel in the team; edit the team&#x27;s name or description; nor edit other settings. However, membership changes to the team are still allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which might occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.
  */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/archive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/archive']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/archive']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/archive',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
