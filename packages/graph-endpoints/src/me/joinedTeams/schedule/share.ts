import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/schedule/share': Operation<
    '/me/joinedTeams/{team-id}/schedule/share',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/share`
 *
 * Share a schedule time range with schedule members. This action makes the collections of shift, openshift and timeOff items in the specified time range of the schedule viewable by the specified team members, including employees and managers. Each shift, openshift and timeOff instance in a schedule supports a draft version and a shared version of the item. The draft version is viewable by only managers, and the shared version is viewable by employees and managers. For each shift, openshift and timeOff instance in the specified time range, the share action updates the shared version from the draft version, so that in addition to managers, employees can also view the most current information about the item. The notifyTeam parameter further specifies which employees can view the item.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/share']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/share']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/schedule/share']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/share',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
