import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/sslCertificates': Operation<
    '/security/threatIntelligence/sslCertificates',
    'get'
  >;
  'GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/sslCertificates': Operation<
    '/security/threatIntelligence/sslCertificates',
    'post'
  >;
  'GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts',
    'get'
  >;
  'GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sslCertificate-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/sslCertificates`
 *
 * Get a list of sslCertificate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/sslCertificates']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/sslCertificates']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/sslCertificates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}`
 *
 * Get the properties and relationships of an sslCertificate object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    paramDefs: {
      path: ['sslCertificate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    paramDefs: {
      path: ['sslCertificate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/sslCertificates`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/sslCertificates']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/sslCertificates']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/sslCertificates',
    body,
  };
}

export const relatedHosts = {
  /**
   * `GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts`
   *
   * Get a list of related host resources associated with an sslCertificate.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sslCertificate-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}`
   *
   * The host resources related with this sslCertificate.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sslCertificate-id', 'host-id'],
      },
      params,
    };
  },
};
