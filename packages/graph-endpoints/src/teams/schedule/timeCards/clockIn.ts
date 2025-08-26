import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/schedule/timeCards/clockIn': Operation<
    '/teams/{team-id}/schedule/timeCards/clockIn',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/schedule/timeCards/clockIn`
 *
 * Clock in to start a timeCard.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/clockIn']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/clockIn']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeCards/clockIn']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/schedule/timeCards/clockIn',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
