import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
