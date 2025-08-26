import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm`
 *
 * Confirm a timeCard.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
