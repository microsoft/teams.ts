export * as attendanceReports from './attendanceReports';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions',
    'get'
  >;
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions',
    'post'
  >;
}

/**
 * `DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions`
  *
  * Get a list of all virtualEventSession summary objects under a virtual event. A session summary contains only the endDateTime, id, joinWebUrl, startDateTime, and subject of a virtual event session. The rest of session properties will be null. Currently, the following virtual event types are supported: 
- virtualEventTownhall
- virtualEventWebinar
  */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventWebinar-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}`
  *
  * Read the properties and relationships of a virtualEventSession object.  Currently, the following virtual event types are supported: 
- virtualEventTownhall
- virtualEventWebinar
  */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions/{virtualEventSession-id}',
    paramDefs: [
      { name: 'virtualEventWebinar-id', in: 'path' },
      { name: 'virtualEventSession-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions']['response']
> {
  return {
    method: 'post',
    path: '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/sessions',
    paramDefs: [{ name: 'virtualEventWebinar-id', in: 'path' }],
    params,
    body,
  };
}
