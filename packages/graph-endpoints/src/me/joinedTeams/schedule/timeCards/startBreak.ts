import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
