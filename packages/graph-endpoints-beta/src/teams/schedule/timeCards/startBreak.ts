import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak`
 *
 * Start a break in a specific timeCard.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
