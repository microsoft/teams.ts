import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'put'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
  params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/app/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
