import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    'put'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For details, see Online meeting artifacts and permissions.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['body'],
  params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/me/onlineMeetings/{onlineMeeting-id}/attendeeReport',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
