export * as microsoftTunnelServers from './microsoftTunnelServers';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    'delete'
  >;
  'GET /deviceManagement/microsoftTunnelSites': Operation<
    '/deviceManagement/microsoftTunnelSites',
    'get'
  >;
  'GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    'patch'
  >;
  'POST /deviceManagement/microsoftTunnelSites': Operation<
    '/deviceManagement/microsoftTunnelSites',
    'post'
  >;
  'GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    'get'
  >;
  'PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    'patch'
  >;
  'DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
    'delete'
  >;
  'POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade': Operation<
    '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['microsoftTunnelSite-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelSites`
 *
 * Collection of MicrosoftTunnelSite settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelSites']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/microsoftTunnelSites']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelSites',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}`
 *
 * Collection of MicrosoftTunnelSite settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    paramDefs: {
      path: ['microsoftTunnelSite-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}',
    paramDefs: {
      path: ['microsoftTunnelSite-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/microsoftTunnelSites`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/microsoftTunnelSites']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/microsoftTunnelSites']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/microsoftTunnelSites',
    body,
  };
}

export const microsoftTunnelConfiguration = {
  /**
   * `GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration`
   *
   * The MicrosoftTunnelConfiguration that has been applied to this MicrosoftTunnelSite
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['microsoftTunnelSite-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['body'],
    params?: IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
      paramDefs: {
        path: ['microsoftTunnelSite-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/microsoftTunnelConfiguration',
      paramDefs: {
        header: ['If-Match'],
        path: ['microsoftTunnelSite-id'],
      },
      params,
    };
  },
};

export const requestUpgrade = {
  /**
   * `POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/microsoftTunnelSites/{microsoftTunnelSite-id}/requestUpgrade',
      paramDefs: {
        path: ['microsoftTunnelSite-id'],
      },
      params,
    };
  },
};
