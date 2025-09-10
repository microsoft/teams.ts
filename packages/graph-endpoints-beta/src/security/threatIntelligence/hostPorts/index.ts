import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostPorts/{hostPort-id}': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostPorts': Operation<
    '/security/threatIntelligence/hostPorts',
    'get'
  >;
  'GET /security/threatIntelligence/hostPorts/{hostPort-id}': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostPorts/{hostPort-id}': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostPorts': Operation<
    '/security/threatIntelligence/hostPorts',
    'post'
  >;
  'GET /security/threatIntelligence/hostPorts/{hostPort-id}/host': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}/host',
    'get'
  >;
  'GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostPorts/{hostPort-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostPorts/{hostPort-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostPorts/{hostPort-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hostPort-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostPorts`
 *
 * Read the properties and relationships of a hostPort object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostPorts']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostPorts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostPorts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostPorts/{hostPort-id}`
 *
 * Read the properties and relationships of a hostPort object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}',
    paramDefs: {
      path: ['hostPort-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostPorts/{hostPort-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostPorts/{hostPort-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostPorts/{hostPort-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostPorts/{hostPort-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}',
    paramDefs: {
      path: ['hostPort-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostPorts`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostPorts']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/hostPorts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/hostPorts',
    body,
  };
}

export const host = {
  /**
   * `GET /security/threatIntelligence/hostPorts/{hostPort-id}/host`
   *
   * The host related to this hostPort. This is a reverse navigation property. When you navigate to hostPorts from a host, assume that this is a return reference.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/host']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/hostPorts/{hostPort-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostPort-id'],
      },
      params,
    };
  },
};

export const mostRecentSslCertificate = {
  /**
   * `GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate`
   *
   * The most recent sslCertificate used to communicate on the port.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostPort-id'],
      },
      params,
    };
  },
};
