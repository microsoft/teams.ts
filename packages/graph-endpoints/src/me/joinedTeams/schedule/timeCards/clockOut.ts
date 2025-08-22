import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
