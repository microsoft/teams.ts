import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm`
 *
 * Confirm a timeCard.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
