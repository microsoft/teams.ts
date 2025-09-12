export * as certificateBasedApplicationConfigurations from './certificateBasedApplicationConfigurations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/certificateAuthorities': Operation<
    '/directory/certificateAuthorities',
    'delete'
  >;
  'GET /directory/certificateAuthorities': Operation<'/directory/certificateAuthorities', 'get'>;
  'PATCH /directory/certificateAuthorities': Operation<
    '/directory/certificateAuthorities',
    'patch'
  >;
  'GET /directory/certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
    'get'
  >;
  'POST /directory/certificateAuthorities/mutualTlsOauthConfigurations': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
    'post'
  >;
  'GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'get'
  >;
  'PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'patch'
  >;
  'DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}': Operation<
    '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
    'delete'
  >;
}

/**
 * `DELETE /directory/certificateAuthorities`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['DELETE /directory/certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/certificateAuthorities',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities`
 *
 * Container for certificate authorities-related configurations for applications in the tenant.
 */
export function list(
  params?: IEndpoints['GET /directory/certificateAuthorities']['parameters']
): EndpointRequest<IEndpoints['GET /directory/certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/certificateAuthorities`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/certificateAuthorities']['body']
): EndpointRequest<IEndpoints['PATCH /directory/certificateAuthorities']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/certificateAuthorities',
    body,
  };
}

export const mutualTlsOauthConfigurations = {
  /**
   * `GET /directory/certificateAuthorities/mutualTlsOauthConfigurations`
   *
   * Get a list of the available mutualTlsOauthConfiguration resources.
   */
  list: function list(
    params?: IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /directory/certificateAuthorities/mutualTlsOauthConfigurations`
   *
   * Create a mutualTlsOauthConfiguration resource that contains a specified certificate authority object.
   */
  create: function create(
    body: IEndpoints['POST /directory/certificateAuthorities/mutualTlsOauthConfigurations']['body']
  ): EndpointRequest<
    IEndpoints['POST /directory/certificateAuthorities/mutualTlsOauthConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations',
      body,
    };
  },
  /**
   * `GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
   *
   * Get the properties and relationships of the specified mutualTlsOauthConfiguration resource.
   */
  get: function get(
    params?: IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mutualTlsOauthConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
   *
   * Update the specified mutualTlsOauthConfiguration resource. You can only update the following two properties: displayName, certificateAuthority. To update a subset of objects in the certificateAuthorities collection, first get the complete list, make your modifications, and then repost the entire contents of the certificateAuthorities attribute list in the request body. Excluding a subset of objects removes them from the collection.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
      paramDefs: {
        path: ['mutualTlsOauthConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/certificateAuthorities/mutualTlsOauthConfigurations/{mutualTlsOauthConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mutualTlsOauthConfiguration-id'],
      },
      params,
    };
  },
};
