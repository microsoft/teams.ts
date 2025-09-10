import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'delete'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations',
    'get'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'get'
  >;
  'PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'patch'
  >;
  'POST /certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations',
    'post'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'get'
  >;
  'POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'post'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'get'
  >;
  'PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'patch'
  >;
  'DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'delete'
  >;
}

/**
 * `DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['certificateBasedApplicationConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 * Defines the trusted certificate authorities for certificates that can be added to apps and service principals in the tenant.
 */
export function list(
  params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Defines the trusted certificate authorities for certificates that can be added to apps and service principals in the tenant.
 */
export function get(
  params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: {
      path: ['certificateBasedApplicationConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: {
      path: ['certificateBasedApplicationConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations']['body']
): EndpointRequest<
  IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations',
    body,
  };
}

export const trustedCertificateAuthorities = {
  /**
   * `GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
   *
   * Collection of trusted certificate authorities.
   */
  list: function list(
    params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['certificateBasedApplicationConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
   *
   */
  create: function create(
    body: IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['body'],
    params?: IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
      paramDefs: {
        path: ['certificateBasedApplicationConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
   *
   * Collection of trusted certificate authorities.
   */
  get: function get(
    params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['certificateBasedApplicationConfiguration-id', 'certificateAuthorityAsEntity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['body'],
    params?: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
      paramDefs: {
        path: ['certificateBasedApplicationConfiguration-id', 'certificateAuthorityAsEntity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['certificateBasedApplicationConfiguration-id', 'certificateAuthorityAsEntity-id'],
      },
      params,
    };
  },
};
