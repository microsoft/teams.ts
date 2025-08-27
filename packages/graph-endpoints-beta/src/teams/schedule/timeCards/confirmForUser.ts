import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'timeCard-id', in: 'path' },
    ],
    params,
    body,
  };
}
