import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
