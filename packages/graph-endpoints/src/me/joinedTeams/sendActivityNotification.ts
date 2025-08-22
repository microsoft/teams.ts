import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/sendActivityNotification': Operation<
    '/me/joinedTeams/{team-id}/sendActivityNotification',
    'post'
  >;
}

/**
  * `POST /me/joinedTeams/{team-id}/sendActivityNotification`
  *
  * Send an activity feed notification in the scope of a team. For more information about sending notifications and the requirements for doing so, see
sending Teams activity notifications.
  */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/sendActivityNotification']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/sendActivityNotification']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/sendActivityNotification']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/sendActivityNotification',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
