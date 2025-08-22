import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/clone': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/clone',
    'post'
  >;
}

/**
  * `POST /users/{user-id}/joinedTeams/{team-id}/clone`
  *
  * Create a copy of a team. This operation also creates a copy of the corresponding group.
You can specify which parts of the team to clone: When tabs are cloned, they aren&#x27;t configured. The tabs are displayed on the tab bar in Microsoft Teams, and the first time a user opens them, they must go through the configuration screen. 
If the user who opens the tab doesn&#x27;t have permission to configure apps, they see a message that says that the tab isn&#x27;t configured. Cloning is a long-running operation. After the POST clone returns, you need to GET the operation returned by the Location: header to see if it&#x27;s running, succeeded, or failed. You should continue to GET until the status isn&#x27;t running. The recommended delay between GETs is 5 seconds.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/clone']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/clone']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/clone']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/clone',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
