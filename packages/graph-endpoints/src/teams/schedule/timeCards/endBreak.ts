import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
