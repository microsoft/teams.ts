export * as connectivityConfiguration from './connectivityConfiguration';
export * as forwardingProfiles from './forwardingProfiles';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/remoteNetworks': Operation<
    '/networkAccess/connectivity/remoteNetworks',
    'get'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/remoteNetworks': Operation<
    '/networkAccess/connectivity/remoteNetworks',
    'post'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
    'get'
  >;
  'POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
    'post'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    'patch'
  >;
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['remoteNetwork-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks`
 *
 * The locations, such as branches, that are connected to Global Secure Access services through an IPsec tunnel.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/connectivity/remoteNetworks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}`
 *
 * The locations, such as branches, that are connected to Global Secure Access services through an IPsec tunnel.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    paramDefs: {
      path: ['remoteNetwork-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    paramDefs: {
      path: ['remoteNetwork-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/remoteNetworks`
 *
 * Create a new remote network.
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/remoteNetworks']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/connectivity/remoteNetworks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/remoteNetworks',
    body,
  };
}

export const deviceLinks = {
  /**
   * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks`
   *
   * Retrieves a specific device link associated with a remote network.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['remoteNetwork-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['body'],
    params?: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
      paramDefs: {
        path: ['remoteNetwork-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}`
   *
   * Retrieves a specific device link associated with a remote network.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['remoteNetwork-id', 'deviceLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
      paramDefs: {
        path: ['remoteNetwork-id', 'deviceLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}`
   *
   * Removes the link between the branch or remote network and the CPE device, effectively removing the connection and associated configuration between them.
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['remoteNetwork-id', 'deviceLink-id'],
      },
      params,
    };
  },
};
