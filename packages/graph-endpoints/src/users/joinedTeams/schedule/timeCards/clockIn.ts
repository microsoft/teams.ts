import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn`
 *
 * Clock in to start a timeCard.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/clockIn',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
