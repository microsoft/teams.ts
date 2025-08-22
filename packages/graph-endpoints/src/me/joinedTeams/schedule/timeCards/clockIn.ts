import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/clockIn',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn`
 *
 * Clock in to start a timeCard.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/clockIn']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/clockIn',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
