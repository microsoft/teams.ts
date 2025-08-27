import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut`
 *
 * Clock out to end an open timeCard.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
