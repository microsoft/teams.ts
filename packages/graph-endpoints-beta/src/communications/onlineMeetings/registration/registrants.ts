import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'get'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingRegistrantBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants`
 *
 * Registrants of the online meeting.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
 *
 * Registrants of the online meeting.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingRegistrantBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants/{meetingRegistrantBase-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingRegistrantBase-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/registrants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/registrants',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
