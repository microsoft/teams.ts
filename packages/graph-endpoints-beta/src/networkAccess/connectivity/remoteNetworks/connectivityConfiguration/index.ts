import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    'delete'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    'patch'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links',
    'get'
  >;
  'POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links',
    'post'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'patch'
  >;
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    paramDefs: {
      header: ['If-Match'],
      path: ['remoteNetwork-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration`
 *
 * Specifies the connectivity details of all device links associated with a remote network.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    paramDefs: {
      path: ['remoteNetwork-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    paramDefs: {
      path: ['remoteNetwork-id'],
    },
    params,
    body,
  };
}

export const links = {
  /**
   * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links`
   *
   * List of connectivity configurations for deviceLink objects.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['remoteNetwork-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links`
   *
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links']['body'],
    params?: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links',
      paramDefs: {
        path: ['remoteNetwork-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
   *
   * List of connectivity configurations for deviceLink objects.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['remoteNetwork-id', 'connectivityConfigurationLink-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
      paramDefs: {
        path: ['remoteNetwork-id', 'connectivityConfigurationLink-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration/links/{connectivityConfigurationLink-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['remoteNetwork-id', 'connectivityConfigurationLink-id'],
      },
      params,
    };
  },
};
