import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/sendActivityNotification',
    'post'
  >;
}

/**
  * `POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification`
  *
  * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/sendActivityNotification']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/sendActivityNotification',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
