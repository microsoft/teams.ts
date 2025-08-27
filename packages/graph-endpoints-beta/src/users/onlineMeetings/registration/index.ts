export * as customQuestions from './customQuestions';
export * as registrants from './registrants';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    'delete'
  >;
  'GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    'get'
  >;
  'PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration': Operation<
    '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * The registration that is enabled for an online meeting. One online meeting can only have one registration enabled.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}
