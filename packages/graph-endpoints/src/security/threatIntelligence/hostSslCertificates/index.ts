import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostSslCertificates': Operation<
    '/security/threatIntelligence/hostSslCertificates',
    'get'
  >;
  'GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostSslCertificates': Operation<
    '/security/threatIntelligence/hostSslCertificates',
    'post'
  >;
  'GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host',
    'get'
  >;
  'GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate',
    'get'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hostSslCertificate-id'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostSslCertificates`
 *
 * Get the properties and relationships of a hostSslCertificate object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostSslCertificates']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostSslCertificates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}`
 *
 * Get the properties and relationships of a hostSslCertificate object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    paramDefs: {
      path: ['hostSslCertificate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    paramDefs: {
      path: ['hostSslCertificate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostSslCertificates`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostSslCertificates']['body']
): EndpointRequest<
  IEndpoints['POST /security/threatIntelligence/hostSslCertificates']['response']
> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostSslCertificates',
    body,
  };
}

export const host = {
  /**
   * `GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host`
   *
   * The host for this hostSslCertificate.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostSslCertificate-id'],
      },
      params,
    };
  },
};

export const sslCertificate = {
  /**
   * `GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate`
   *
   * The sslCertificate for this hostSslCertificate.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostSslCertificate-id'],
      },
      params,
    };
  },
};
