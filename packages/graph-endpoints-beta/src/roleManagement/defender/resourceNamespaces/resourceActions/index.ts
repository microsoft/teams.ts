import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'delete'
  >;
  'GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'get'
  >;
  'GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'get'
  >;
  'PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'patch'
  >;
  'POST /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'post'
  >;
  'GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext',
    'get'
  >;
  'GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'get'
  >;
  'PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'patch'
  >;
  'DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['body'],
  params?: IEndpoints['POST /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

export const authenticationContext = {
  /**
   * `GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
};

export const resourceScope = {
  /**
   * `GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['body'],
    params?: IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/defender/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
};
