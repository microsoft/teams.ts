import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    'delete'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
    'get'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    'get'
  >;
  'PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    'patch'
  >;
  'POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
    'post'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
    'get'
  >;
  'POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
    'post'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    'get'
  >;
  'PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    'patch'
  >;
  'DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    'delete'
  >;
  'POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload',
    'post'
  >;
}

/**
 * `DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}`
 *
 * Delete a certificateBasedAuthPki object.
 */
export function del(
  params?: IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['certificateBasedAuthPki-id'],
    },
    params,
  };
}

/**
 * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations`
 *
 * Get a list of the certificateBasedAuthPki objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}`
 *
 * Read the properties and relationships of a certificateBasedAuthPki object.
 */
export function get(
  params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    paramDefs: {
      path: ['certificateBasedAuthPki-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}`
 *
 * Update the properties of a certificateBasedAuthPki object.
 */
export function update(
  body: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['body'],
  params?: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}',
    paramDefs: {
      path: ['certificateBasedAuthPki-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations`
 *
 * Create a new certificateBasedAuthPki object.
 */
export function create(
  body: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['body']
): EndpointRequest<
  IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations',
    body,
  };
}

export const certificateAuthorities = {
  /**
   * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities`
   *
   * Get a list of the certificateAuthorityDetail objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['certificateBasedAuthPki-id'],
      },
      params,
    };
  },
  /**
   * `POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities`
   *
   * Create a new certificateAuthorityDetail object.
   */
  create: function create(
    body: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['body'],
    params?: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
      paramDefs: {
        path: ['certificateBasedAuthPki-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}`
   *
   * Read the properties and relationships of a certificateAuthorityDetail object.
   */
  get: function get(
    params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['certificateBasedAuthPki-id', 'certificateAuthorityDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}`
   *
   * Update the properties of a certificateAuthorityDetail object.
   */
  update: function update(
    body: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['body'],
    params?: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
      paramDefs: {
        path: ['certificateBasedAuthPki-id', 'certificateAuthorityDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}`
   *
   * Delete a certificateAuthorityDetail object.
   */
  del: function del(
    params?: IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['certificateBasedAuthPki-id', 'certificateAuthorityDetail-id'],
      },
      params,
    };
  },
};

export const upload = {
  /**
   * `POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload`
   *
   * Append additional certificate authority details to a certificateBasedAuthPki resource. Only one operation can run at a time and this operation can take up to 30 minutes to complete. To know whether another upload is in progress, call the Get certificateBasedAuthPki. The status property will have the value running.
   */
  create: function create(
    body: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload']['body'],
    params?: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/upload',
      paramDefs: {
        path: ['certificateBasedAuthPki-id'],
      },
      params,
      body,
    };
  },
};
