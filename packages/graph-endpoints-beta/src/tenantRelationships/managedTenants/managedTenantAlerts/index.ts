import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantAlerts': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedTenantAlert-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    paramDefs: {
      path: ['managedTenantAlert-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}',
    paramDefs: {
      path: ['managedTenantAlert-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantAlerts`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlerts']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlerts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantAlerts',
    body,
  };
}

export const alertLogs = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedTenantAlert-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertLogs/{managedTenantAlertLog-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlert-id', 'managedTenantAlertLog-id'],
      },
      params,
    };
  },
};

export const alertRule = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/alertRule',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlert-id'],
      },
      params,
    };
  },
};

export const apiNotifications = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedTenantAlert-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/apiNotifications/{managedTenantApiNotification-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlert-id', 'managedTenantApiNotification-id'],
      },
      params,
    };
  },
};

export const emailNotifications = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedTenantAlert-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert-id}/emailNotifications/{managedTenantEmailNotification-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlert-id', 'managedTenantEmailNotification-id'],
      },
      params,
    };
  },
};
