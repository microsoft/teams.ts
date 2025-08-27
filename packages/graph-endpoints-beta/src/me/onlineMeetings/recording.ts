import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recording',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recording',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recording',
    'put'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/recording`
 *
 * The content stream of the recording of a Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/recording`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For details, see Online meeting artifacts and permissions.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recording']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /me/onlineMeetings/{onlineMeeting-id}/recording`
 *
 * The content stream of the recording of a Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recording']['body'],
  params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
): EndpointRequest<IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recording']['response']> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
