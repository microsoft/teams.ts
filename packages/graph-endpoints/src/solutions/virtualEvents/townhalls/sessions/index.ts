export * as attendanceReports from './attendanceReports';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    'get'
  >;
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['virtualEventTownhall-id', 'virtualEventSession-id'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions`
 *
 * The sessions for the virtual event.
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}`
 *
 * The sessions for the virtual event.
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventSession-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    paramDefs: {
      path: ['virtualEventTownhall-id', 'virtualEventSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    paramDefs: {
      path: ['virtualEventTownhall-id'],
    },
    params,
    body,
  };
}
