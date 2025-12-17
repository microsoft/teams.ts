import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application': Operation<
    '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application',
    'get'
  >;
  'GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo': Operation<
    '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo',
    'get'
  >;
  'PUT /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo': Operation<
    '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo',
    'put'
  >;
  'DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo': Operation<
    '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo',
    'delete'
  >;
}

/**
 * `GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application`
 *
 * Represents an application registered in Microsoft Entra ID.
 */
export function get(
  params?: IEndpoints['GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application']['parameters']
): EndpointRequest<
  IEndpoints['GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application',
    paramDefs: {
      path: ['signInEventsAppActivity-appId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const logo = {
  /**
   * `GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo`
   *
   * The main logo for the application. Not nullable.
   */
  get: function get(
    params?: IEndpoints['GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo',
      paramDefs: {
        path: ['signInEventsAppActivity-appId'],
      },
      params,
    };
  },
  /**
   * `PUT /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo`
   *
   * The main logo for the application. Not nullable.
   */
  set: function set(
    body: IEndpoints['PUT /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo']['body'],
    params?: IEndpoints['PUT /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo',
      paramDefs: {
        path: ['signInEventsAppActivity-appId'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo`
   *
   * The main logo for the application. Not nullable.
   */
  del: function del(
    params?: IEndpoints['DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/auditLogs/signInEventsAppSummary/{signInEventsAppActivity-appId}/application/logo',
      paramDefs: {
        header: ['If-Match'],
        path: ['signInEventsAppActivity-appId'],
      },
      params,
    };
  },
};
