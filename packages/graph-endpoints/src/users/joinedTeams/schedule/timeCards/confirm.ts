import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm`
 *
 * Confirm a timeCard.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
