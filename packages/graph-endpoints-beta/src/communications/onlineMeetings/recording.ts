import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/recording': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    'put'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording`
 *
 * The content stream of the recording of a Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/recording`
 *
 * The content stream of the recording of a Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetings/{onlineMeeting-id}/recording`
 *
 * The content stream of the recording of a Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recording']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recording',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
