import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
