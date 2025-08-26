import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/clone': Operation<'/groups/{group-id}/team/clone', 'post'>;
}

/**
  * `POST /groups/{group-id}/team/clone`
  *
  * Create a copy of a team. This operation also creates a copy of the corresponding group.
You can specify which parts of the team to clone: When tabs are cloned, they aren&#x27;t configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. 
If the user who opens the tab doesn&#x27;t have permission to configure apps, they see a message that says that the tab isn&#x27;t configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it&#x27;s running, succeeded, or failed. You should continue to GET until the status isn&#x27;t running. The recommended delay between GETs is 5 seconds.
  */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/clone']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/clone']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/clone']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/clone',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
