import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataDiscovery/cloudAppDiscovery': Operation<
    '/security/dataDiscovery/cloudAppDiscovery',
    'delete'
  >;
  'GET /security/dataDiscovery/cloudAppDiscovery': Operation<
    '/security/dataDiscovery/cloudAppDiscovery',
    'get'
  >;
  'PATCH /security/dataDiscovery/cloudAppDiscovery': Operation<
    '/security/dataDiscovery/cloudAppDiscovery',
    'patch'
  >;
  'GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
    'get'
  >;
  'POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
    'post'
  >;
  'GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    'get'
  >;
  'PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    'patch'
  >;
  'DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}': Operation<
    '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/dataDiscovery/cloudAppDiscovery`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataDiscovery/cloudAppDiscovery',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/dataDiscovery/cloudAppDiscovery`
 *
 * The available entities are IP addresses, devices, and users who access a cloud app.
 */
export function get(
  params?: IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery']['parameters']
): EndpointRequest<IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataDiscovery/cloudAppDiscovery',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/dataDiscovery/cloudAppDiscovery`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery']['body']
): EndpointRequest<IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataDiscovery/cloudAppDiscovery',
    body,
  };
}

export const uploadedStreams = {
  /**
   * `GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams`
   *
   * Get visibility into all the manually uploaded streams from your firewalls and proxies.
   */
  list: function list(
    params?: IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/dataDiscovery/cloudAppDiscovery/uploadedStreams']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams',
      body,
    };
  },
  /**
   * `GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}`
   *
   * A collection of streams available for generating cloud discovery report.
   */
  get: function get(
    params?: IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudAppDiscoveryReport-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['body'],
    params?: IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
      paramDefs: {
        path: ['cloudAppDiscoveryReport-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/dataDiscovery/cloudAppDiscovery/uploadedStreams/{cloudAppDiscoveryReport-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudAppDiscoveryReport-id'],
      },
      params,
    };
  },
};
