import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/healthMonitoring': Operation<'/reports/healthMonitoring', 'delete'>;
  'GET /reports/healthMonitoring': Operation<'/reports/healthMonitoring', 'get'>;
  'PATCH /reports/healthMonitoring': Operation<'/reports/healthMonitoring', 'patch'>;
  'GET /reports/healthMonitoring/alertConfigurations': Operation<
    '/reports/healthMonitoring/alertConfigurations',
    'get'
  >;
  'POST /reports/healthMonitoring/alertConfigurations': Operation<
    '/reports/healthMonitoring/alertConfigurations',
    'post'
  >;
  'GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}': Operation<
    '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    'get'
  >;
  'PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}': Operation<
    '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    'patch'
  >;
  'DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}': Operation<
    '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
    'delete'
  >;
  'GET /reports/healthMonitoring/alerts': Operation<'/reports/healthMonitoring/alerts', 'get'>;
  'POST /reports/healthMonitoring/alerts': Operation<'/reports/healthMonitoring/alerts', 'post'>;
  'GET /reports/healthMonitoring/alerts/{alert-id}': Operation<
    '/reports/healthMonitoring/alerts/{alert-id}',
    'get'
  >;
  'PATCH /reports/healthMonitoring/alerts/{alert-id}': Operation<
    '/reports/healthMonitoring/alerts/{alert-id}',
    'patch'
  >;
  'DELETE /reports/healthMonitoring/alerts/{alert-id}': Operation<
    '/reports/healthMonitoring/alerts/{alert-id}',
    'delete'
  >;
}

/**
 * `DELETE /reports/healthMonitoring`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/healthMonitoring']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/healthMonitoring']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/healthMonitoring',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/healthMonitoring`
 *
 * Reports for Microsoft Entra Health Monitoring.
 */
export function get(
  params?: IEndpoints['GET /reports/healthMonitoring']['parameters']
): EndpointRequest<IEndpoints['GET /reports/healthMonitoring']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/healthMonitoring',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/healthMonitoring`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/healthMonitoring']['body']
): EndpointRequest<IEndpoints['PATCH /reports/healthMonitoring']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/healthMonitoring',
    body,
  };
}

export const alertConfigurations = {
  /**
   * `GET /reports/healthMonitoring/alertConfigurations`
   *
   * Get a list of the Microsoft Entra health monitoring alertConfiguration objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /reports/healthMonitoring/alertConfigurations']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/healthMonitoring/alertConfigurations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/healthMonitoring/alertConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/healthMonitoring/alertConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/healthMonitoring/alertConfigurations']['body']
  ): EndpointRequest<IEndpoints['POST /reports/healthMonitoring/alertConfigurations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/healthMonitoring/alertConfigurations',
      body,
    };
  },
  /**
   * `GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}`
   *
   * Read the properties and relationships of a Microsoft Entra health monitoring alertConfiguration object. The returned alertConfiguration object contains the settings for the distribution groups where alert notifications are to be sent.
   */
  get: function get(
    params?: IEndpoints['GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['alertConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}`
   *
   * Update the properties of a Microsoft Entra health monitoring alertConfiguration object. You can use alertConfiguration settings to specify the distribution groups where alert notifications are to be sent. This API doesn&#x27;t currently support group validation.
   */
  update: function update(
    body: IEndpoints['PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
      paramDefs: {
        path: ['alertConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/healthMonitoring/alertConfigurations/{alertConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['alertConfiguration-id'],
      },
      params,
    };
  },
};

export const alerts = {
  /**
   * `GET /reports/healthMonitoring/alerts`
   *
   * Get the list of the Microsoft Entra health monitoring alert objects and their properties from the past 30 days.
   */
  list: function list(
    params?: IEndpoints['GET /reports/healthMonitoring/alerts']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/healthMonitoring/alerts']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/healthMonitoring/alerts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/healthMonitoring/alerts`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/healthMonitoring/alerts']['body']
  ): EndpointRequest<IEndpoints['POST /reports/healthMonitoring/alerts']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/healthMonitoring/alerts',
      body,
    };
  },
  /**
   * `GET /reports/healthMonitoring/alerts/{alert-id}`
   *
   * Read the properties and relationships of a Microsoft Entra health monitoring alert object. The returned alert object contains information about the state, type, date, and impact of each alert that fired within your tenant.
   */
  get: function get(
    params?: IEndpoints['GET /reports/healthMonitoring/alerts/{alert-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/healthMonitoring/alerts/{alert-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/healthMonitoring/alerts/{alert-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['alert-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/healthMonitoring/alerts/{alert-id}`
   *
   * Update the properties of a Microsoft Entra health monitoring alert object. For example, change an alert&#x27;s state from active to resolved.
   */
  update: function update(
    body: IEndpoints['PATCH /reports/healthMonitoring/alerts/{alert-id}']['body'],
    params?: IEndpoints['PATCH /reports/healthMonitoring/alerts/{alert-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /reports/healthMonitoring/alerts/{alert-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/healthMonitoring/alerts/{alert-id}',
      paramDefs: {
        path: ['alert-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/healthMonitoring/alerts/{alert-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/healthMonitoring/alerts/{alert-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/healthMonitoring/alerts/{alert-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/healthMonitoring/alerts/{alert-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['alert-id'],
      },
      params,
    };
  },
};
