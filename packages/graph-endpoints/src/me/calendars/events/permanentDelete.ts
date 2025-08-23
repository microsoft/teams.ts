import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/permanentDelete',
    'post'
  >;
}

/**
 * `POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete']['body'],
  params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/permanentDelete']['response']
> {
  return {
    method: 'post',
    path: '/me/calendars/{calendar-id}/events/{event-id}/permanentDelete',
    paramDefs: [
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
