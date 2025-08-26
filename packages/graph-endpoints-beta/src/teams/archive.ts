import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/archive': Operation<'/teams/{team-id}/archive', 'post'>;
}

/**
  * `POST /teams/{team-id}/archive`
  *
  * Archive the specified team. 
When a team is archived, users can no longer make most changes to the team. For example, users can no longer: send or like messages on any channel in the team; edit the team&#x27;s name or description; nor edit other settings. However, membership changes to the team continue to be allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which can occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.
  */
export function create(
  body: IEndpoints['POST /teams/{team-id}/archive']['body'],
  params?: IEndpoints['POST /teams/{team-id}/archive']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/archive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/archive',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
