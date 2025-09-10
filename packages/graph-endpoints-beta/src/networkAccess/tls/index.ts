import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/tls': Operation<'/networkAccess/tls', 'delete'>;
  'GET /networkAccess/tls': Operation<'/networkAccess/tls', 'get'>;
  'PATCH /networkAccess/tls': Operation<'/networkAccess/tls', 'patch'>;
  'GET /networkAccess/tls/externalCertificateAuthorityCertificates': Operation<
    '/networkAccess/tls/externalCertificateAuthorityCertificates',
    'get'
  >;
  'POST /networkAccess/tls/externalCertificateAuthorityCertificates': Operation<
    '/networkAccess/tls/externalCertificateAuthorityCertificates',
    'post'
  >;
  'GET /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}': Operation<
    '/networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}',
    'get'
  >;
  'PATCH /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}': Operation<
    '/networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}',
    'patch'
  >;
  'DELETE /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}': Operation<
    '/networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/tls`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/tls']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/tls']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/tls',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/tls`
 *
 * A container for tenant-level TLS inspection settings for Global Secure Access.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/tls']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/tls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tls',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/tls`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/tls']['body']
): EndpointRequest<IEndpoints['PATCH /networkAccess/tls']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/tls',
    body,
  };
}

export const externalCertificateAuthorityCertificates = {
  /**
   * `GET /networkAccess/tls/externalCertificateAuthorityCertificates`
   *
   * Get a list of the externalCertificateAuthorityCertificate objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/tls/externalCertificateAuthorityCertificates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/tls/externalCertificateAuthorityCertificates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/tls/externalCertificateAuthorityCertificates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/tls/externalCertificateAuthorityCertificates`
   *
   * Create a new externalCertificateAuthorityCertificate object. This request generates the Certificate Signing Request (CSR) that you download to sign and generate a certificate that you upload to the service using the Update externalCertificateAuthorityCertificate operation.
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/tls/externalCertificateAuthorityCertificates']['body']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/tls/externalCertificateAuthorityCertificates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/tls/externalCertificateAuthorityCertificates',
      body,
    };
  },
  /**
   * `GET /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}`
   *
   * Get a externalCertificateAuthorityCertificate object.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['externalCertificateAuthorityCertificate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}`
   *
   * Update the properties of an externalCertificateAuthorityCertificate object. This can be used by a GSA admin to upload the generated certificate for GSA. The certificate is generated by signing the downloaded CSR with the customer&#x27;s PKI.
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}',
      paramDefs: {
        path: ['externalCertificateAuthorityCertificate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}`
   *
   * Delete an externalCertificateAuthorityCertificate object.
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/tls/externalCertificateAuthorityCertificates/{externalCertificateAuthorityCertificate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['externalCertificateAuthorityCertificate-id'],
      },
      params,
    };
  },
};
