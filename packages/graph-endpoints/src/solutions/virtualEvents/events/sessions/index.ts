export * as attendanceReports from './attendanceReports';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    'get'
  >;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEvent-id', 'virtualEventSession-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions`
 *
 * The sessions for the virtual event.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    paramDefs: {
      path: ['virtualEvent-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
 *
 * The sessions for the virtual event.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      path: ['virtualEvent-id', 'virtualEventSession-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      path: ['virtualEvent-id', 'virtualEventSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/events/{virtualEvent-id}/sessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}/sessions',
    paramDefs: {
      path: ['virtualEvent-id'],
    },
    params,
    body,
  };
}
