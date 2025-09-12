import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    'patch'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
    'get'
  >;
  'POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
    'post'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'patch'
  >;
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    paramDefs: {
      header: ['If-Match'],
      path: ['branchSite-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration`
 *
 * Retrieve the IPSec tunnel configuration required to establish a bidirectional communication link between your organization&#x27;s router and the Microsoft gateway. This information is vital for configuring your router (customer premise equipment) after creating a deviceLink.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    paramDefs: {
      path: ['branchSite-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    paramDefs: {
      path: ['branchSite-id'],
    },
    params,
    body,
  };
}

export const links = {
  /**
   * `GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links`
   *
   * List of connectivity configurations for deviceLink objects.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['branchSite-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['body'],
    params?: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links',
      paramDefs: {
        path: ['branchSite-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
   *
   * List of connectivity configurations for deviceLink objects.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['branchSite-id', 'connectivityConfigurationLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
      paramDefs: {
        path: ['branchSite-id', 'connectivityConfigurationLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['branchSite-id', 'connectivityConfigurationLink-id'],
      },
      params,
    };
  },
};
