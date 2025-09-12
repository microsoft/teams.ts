export * as traffic from './traffic';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/logs': Operation<'/networkAccess/logs', 'delete'>;
  'GET /networkAccess/logs': Operation<'/networkAccess/logs', 'get'>;
  'PATCH /networkAccess/logs': Operation<'/networkAccess/logs', 'patch'>;
  'GET /networkAccess/logs/connections': Operation<'/networkAccess/logs/connections', 'get'>;
  'POST /networkAccess/logs/connections': Operation<'/networkAccess/logs/connections', 'post'>;
  'GET /networkAccess/logs/connections/{connection-id}': Operation<
    '/networkAccess/logs/connections/{connection-id}',
    'get'
  >;
  'PATCH /networkAccess/logs/connections/{connection-id}': Operation<
    '/networkAccess/logs/connections/{connection-id}',
    'patch'
  >;
  'DELETE /networkAccess/logs/connections/{connection-id}': Operation<
    '/networkAccess/logs/connections/{connection-id}',
    'delete'
  >;
  'GET /networkAccess/logs/remoteNetworks': Operation<'/networkAccess/logs/remoteNetworks', 'get'>;
  'POST /networkAccess/logs/remoteNetworks': Operation<
    '/networkAccess/logs/remoteNetworks',
    'post'
  >;
  'GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}': Operation<
    '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    'get'
  >;
  'PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}': Operation<
    '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    'patch'
  >;
  'DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}': Operation<
    '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/logs`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/logs']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/logs']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/logs',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/logs`
 *
 * Represents network connections that are routed through Global Secure Access.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/logs']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/logs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/logs`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/logs']['body']
): EndpointRequest<IEndpoints['PATCH /networkAccess/logs']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/logs',
    body,
  };
}

export const connections = {
  /**
   * `GET /networkAccess/logs/connections`
   *
   * Get a list of connection objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/logs/connections']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/logs/connections']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/logs/connections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/logs/connections`
   *
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/logs/connections']['body']
  ): EndpointRequest<IEndpoints['POST /networkAccess/logs/connections']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/logs/connections',
      body,
    };
  },
  /**
   * `GET /networkAccess/logs/connections/{connection-id}`
   *
   * Read the properties and relationships of a connection object.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/logs/connections/{connection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/logs/connections/{connection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/logs/connections/{connection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['connection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/logs/connections/{connection-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/logs/connections/{connection-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/logs/connections/{connection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/logs/connections/{connection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/logs/connections/{connection-id}',
      paramDefs: {
        path: ['connection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/logs/connections/{connection-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/logs/connections/{connection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/logs/connections/{connection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/logs/connections/{connection-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['connection-id'],
      },
      params,
    };
  },
};

export const remoteNetworks = {
  /**
   * `GET /networkAccess/logs/remoteNetworks`
   *
   * Get a list of the remoteNetworkHealthEvent objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/logs/remoteNetworks']['parameters']
  ): EndpointRequest<IEndpoints['GET /networkAccess/logs/remoteNetworks']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/logs/remoteNetworks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/logs/remoteNetworks`
   *
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/logs/remoteNetworks']['body']
  ): EndpointRequest<IEndpoints['POST /networkAccess/logs/remoteNetworks']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/logs/remoteNetworks',
      body,
    };
  },
  /**
   * `GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}`
   *
   * A collection of remote network health events.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['remoteNetworkHealthEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
      paramDefs: {
        path: ['remoteNetworkHealthEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['remoteNetworkHealthEvent-id'],
      },
      params,
    };
  },
};
