import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'put'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    method: 'put',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
