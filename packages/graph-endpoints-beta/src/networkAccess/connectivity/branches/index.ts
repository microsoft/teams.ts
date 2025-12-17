export * as connectivityConfiguration from './connectivityConfiguration';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches': Operation<
    '/networkAccess/connectivity/branches',
    'get'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/branches': Operation<
    '/networkAccess/connectivity/branches',
    'post'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
    'get'
  >;
  'POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
    'post'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    'patch'
  >;
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}`
 *
 * Delete a specific branch.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['branchSite-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches`
 *
 * Retrieve a list of branches within a tenant connected to the Global Secure Access services.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/branches']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/connectivity/branches']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}`
 *
 * Retrieve information about a specific branch.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}',
    paramDefs: {
      path: ['branchSite-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}`
 *
 * Update the configuration or properties of a specific branch.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}',
    paramDefs: {
      path: ['branchSite-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/branches`
 *
 * Create a new branch.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/branches']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/connectivity/branches']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/branches',
    body,
  };
}

export const deviceLinks = {
  /**
   * `GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks`
   *
   * Retrieve a list of device links associated with a specific branch.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['branchSite-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks`
   *
   * Create a branch site with associated device links.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['body'],
    params?: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
      paramDefs: {
        path: ['branchSite-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}`
   *
   * Each unique CPE device associated with a branch is specified. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['branchSite-id', 'deviceLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}`
   *
   * Update the device link associated with a specific branch or remote network.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
      paramDefs: {
        path: ['branchSite-id', 'deviceLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}`
   *
   * Removes the link between the branch or remote network and the CPE device, effectively removing the connection and associated configuration between them.
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['branchSite-id', 'deviceLink-id'],
      },
      params,
    };
  },
};
