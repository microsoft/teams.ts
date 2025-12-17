export * as application from './application';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}': Operation<
    '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}',
    'delete'
  >;
  'GET /auditLogs/signInEventsAppSummary': Operation<'/auditLogs/signInEventsAppSummary', 'get'>;
  'GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}': Operation<
    '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}',
    'get'
  >;
  'PATCH /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}': Operation<
    '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}',
    'patch'
  >;
  'POST /auditLogs/signInEventsAppSummary': Operation<'/auditLogs/signInEventsAppSummary', 'post'>;
}

/**
 * `DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['signInEventsAppActivity-appId'],
    },
    params,
  };
}

/**
 * `GET /auditLogs/signInEventsAppSummary`
 *
 * Get a list of applications and their number of sign-in events in the past 30 days as defined in the signInEventsAppActivity object.
 */
export function get(
  params?: IEndpoints['GET /auditLogs/signInEventsAppSummary']['parameters']
): EndpointRequest<IEndpoints['GET /auditLogs/signInEventsAppSummary']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/signInEventsAppSummary',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}`
 *
 * Represents the number of sign-in events for a specific application.
 */
export function get$1(
  params?: IEndpoints['GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}',
    paramDefs: {
      path: ['signInEventsAppActivity-appId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}']['body'],
  params?: IEndpoints['PATCH /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}',
    paramDefs: {
      path: ['signInEventsAppActivity-appId'],
    },
    params,
    body,
  };
}

/**
 * `POST /auditLogs/signInEventsAppSummary`
 *
 */
export function create(
  body: IEndpoints['POST /auditLogs/signInEventsAppSummary']['body']
): EndpointRequest<IEndpoints['POST /auditLogs/signInEventsAppSummary']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/auditLogs/signInEventsAppSummary',
    body,
  };
}
