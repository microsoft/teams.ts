import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/schedule/timeCards/clockIn': Operation<
    '/groups/{group-id}/team/schedule/timeCards/clockIn',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/schedule/timeCards/clockIn`
 *
 * Clock in to start a timeCard.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/clockIn']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/clockIn']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/clockIn']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeCards/clockIn',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
