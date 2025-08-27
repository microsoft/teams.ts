import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm`
 *
 * Confirm a timeCard.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
