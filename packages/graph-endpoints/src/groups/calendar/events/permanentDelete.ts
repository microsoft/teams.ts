import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete': Operation<
    '/groups/{group-id}/calendar/events/{event-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/calendar/events/{event-id}/permanentDelete']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/calendar/events/{event-id}/permanentDelete',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
