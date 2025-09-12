import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    'patch'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
    'get'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
    'post'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    'patch'
  >;
  'DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
    'delete'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration`
 *
 * Delete a remoteDesktopSecurityConfiguration object on a servicePrincipal. Removing remoteDesktopSecurityConfiguration object on the servicePrincipal disables the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to authenticate a user to Microsoft Entra joined or Microsoft Entra hybrid joined devices, and removes any target device groups that you configured for SSO.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    paramDefs: {
      header: ['If-Match'],
      path: ['servicePrincipal-id'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration`
 *
 * Read the properties and relationships of a remoteDesktopSecurityConfiguration object on a servicePrincipal. Use this configuration to view the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to authenticate a user to Microsoft Entra joined or Microsoft Entra hybrid joined devices. Additionally you can view any targetDeviceGroups that have been configured for SSO.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    paramDefs: {
      path: ['servicePrincipal-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration`
 *
 * Update the properties of a remoteDesktopSecurityConfiguration object on the servicePrincipal. Use this configuration to enable or disable the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to authenticate a user to Microsoft Entra joined or Microsoft Entra hybrid joined devices.
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration',
    paramDefs: {
      path: ['servicePrincipal-id'],
    },
    params,
    body,
  };
}

export const approvedClientApps = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps`
   *
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'approvedClientApp-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'approvedClientApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/approvedClientApps/{approvedClientApp-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'approvedClientApp-id'],
      },
      params,
    };
  },
};

export const targetDeviceGroups = {
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups`
   *
   * Get a list of the targetDeviceGroup objects and their properties on the remoteDesktopSecurityConfiguration resource on the servicePrincipal. Any user authenticating using the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to a Microsoft Entra joined or Microsoft Entra hybrid joined device that belongs to the targetDeviceGroup will get SSO.
   */
  list: function list(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['servicePrincipal-id'],
      },
      params,
    };
  },
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups`
   *
   * Create a new targetDeviceGroup object for the remoteDesktopSecurityConfiguration object on the servicePrincipal. You can configure a maximum of 10 target device groups for the remoteDesktopSecurityConfiguraiton object on the servicePrincipal.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups',
      paramDefs: {
        path: ['servicePrincipal-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}`
   *
   * Read the properties and relationships of a targetDeviceGroup object for the remoteDesktopSecurityConfiguration object on the servicePrincipal.
   */
  get: function get(
    params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipal-id', 'targetDeviceGroup-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}`
   *
   * Update the properties of a targetDeviceGroup object for remoteDesktopSecurityConfiguration object on the servicePrincipal. You can configure a maximum of 10 target device groups for the remoteDesktopSecurityConfiguraiton object on the servicePrincipal.
   */
  update: function update(
    body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['body'],
    params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
      paramDefs: {
        path: ['servicePrincipal-id', 'targetDeviceGroup-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}`
   *
   * Delete a targetDeviceGroup object for the remoteDesktopSecurityConfiguration object on the servicePrincipal. Any user authenticating using the Microsoft Entra ID Remote Desktop Services (RDS) authentication protocol to a Microsoft Entra joined or Microsoft Entra hybrid joined device that&#x27;s in the removed targetDeviceGroup doesn&#x27;t get SSO prompts.
   */
  del: function del(
    params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/servicePrincipals/{servicePrincipal-id}/remoteDesktopSecurityConfiguration/targetDeviceGroups/{targetDeviceGroup-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipal-id', 'targetDeviceGroup-id'],
      },
      params,
    };
  },
};
