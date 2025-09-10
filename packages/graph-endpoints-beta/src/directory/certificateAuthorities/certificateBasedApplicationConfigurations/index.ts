import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'delete'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
    'get'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'get'
  >;
  'PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'patch'
  >;
  'POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
    'post'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'get'
  >;
  'POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'post'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'get'
  >;
  'PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'patch'
  >;
  'DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'delete'
  >;
}

/**
 * `DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Delete the properties and relationships of a certificateBasedApplicationConfiguration object.
 */
export function del(
  params?: IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['certificateBasedApplicationConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 * Get a list of certificateBasedApplicationConfiguration objects.
 */
export function list(
  params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Read the properties and relationships of a certificateBasedApplicationConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: {
      path: ['certificateBasedApplicationConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Update the properties of a certificateBasedApplicationConfiguration object. To update the trustedCertificateAuthorities within a certificateBasedApplicationConfiguration object, use the Update certificateAuthorityAsEntity operation.
 */
export function update(
  body: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: {
      path: ['certificateBasedApplicationConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['body']
): EndpointRequest<
  IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
    body,
  };
}

export const trustedCertificateAuthorities = {
  /**
   * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
   *
   * List the trusted certificate authorities in a certificateBasedApplicationConfiguration object.
   */
  list: function list(
    params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['certificateBasedApplicationConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
   *
   * Create a new trusted certificate authority in a certificateBasedApplicationConfiguration object.
   */
  create: function create(
    body: IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['body'],
    params?: IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
      paramDefs: {
        path: ['certificateBasedApplicationConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
   *
   * Read the properties and relationships of a certificateAuthorityAsEntity object.
   */
  get: function get(
    params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['certificateBasedApplicationConfiguration-id', 'certificateAuthorityAsEntity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
   *
   * Update the properties of a certificateAuthorityAsEntity object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['body'],
    params?: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
      paramDefs: {
        path: ['certificateBasedApplicationConfiguration-id', 'certificateAuthorityAsEntity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
   *
   * Delete a certificateAuthorityAsEntity object. You can&#x27;t delete all items in the collection because this collection requires at least one object that is a root authority to always persist.
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['certificateBasedApplicationConfiguration-id', 'certificateAuthorityAsEntity-id'],
      },
      params,
    };
  },
};
