export * as aiInsights from './aiInsights';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    'delete'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings',
    'get'
  >;
  'GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    'get'
  >;
  'PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    'patch'
  >;
  'POST /copilot/users/{aiUser-id}/onlineMeetings': Operation<
    '/copilot/users/{aiUser-id}/onlineMeetings',
    'post'
  >;
}

/**
 * `DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}/onlineMeetings`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/users/{aiUser-id}/onlineMeetings',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'aiUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/users/{aiUser-id}/onlineMeetings/{aiOnlineMeeting-id}',
    paramDefs: [
      { name: 'aiUser-id', in: 'path' },
      { name: 'aiOnlineMeeting-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /copilot/users/{aiUser-id}/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings']['body'],
  params?: IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /copilot/users/{aiUser-id}/onlineMeetings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/users/{aiUser-id}/onlineMeetings',
    paramDefs: [{ name: 'aiUser-id', in: 'path' }],
    params,
    body,
  };
}
