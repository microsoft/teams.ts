import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendar/events/{event-id}/permanentDelete': Operation<
    '/me/calendar/events/{event-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/calendar/events/{event-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendar/events/{event-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/calendar/events/{event-id}/permanentDelete']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/events/{event-id}/permanentDelete']['response']> {
  return {
    method: 'post',
    path: '/me/calendar/events/{event-id}/permanentDelete',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}
