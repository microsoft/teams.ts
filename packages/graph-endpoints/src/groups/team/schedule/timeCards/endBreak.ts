import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
