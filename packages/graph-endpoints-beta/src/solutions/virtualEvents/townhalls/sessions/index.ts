export * as attendanceReports from './attendanceReports';
export * as presenters from './presenters';
export * as registrations from './registrations';

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
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEventTownhall-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventTownhall-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventTownhall-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    paramDefs: [
      { name: 'virtualEventTownhall-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    paramDefs: [{ name: 'virtualEventTownhall-id', in: 'path' }],
    params,
    body,
  };
}
