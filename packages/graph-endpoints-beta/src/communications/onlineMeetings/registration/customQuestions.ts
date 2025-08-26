import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'get'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingRegistrationQuestion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
 *
 * Custom registration questions.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
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
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
 *
 * Custom registration questions.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingRegistrationQuestion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}',
    paramDefs: [
      { name: 'onlineMeeting-id', in: 'path' },
      { name: 'meetingRegistrationQuestion-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/registration/customQuestions',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}
