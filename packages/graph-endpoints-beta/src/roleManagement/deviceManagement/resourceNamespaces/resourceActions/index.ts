import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'delete'
  >;
  'GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'get'
  >;
  'GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'get'
  >;
  'PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'patch'
  >;
  'POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'post'
  >;
  'GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext',
    'get'
  >;
  'GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'get'
  >;
  'PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'patch'
  >;
  'DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope': Operation<
    '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * Operations that an authorized principal is allowed to perform.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['body'],
  params?: IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

export const authenticationContext = {
  /**
   * `GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/authenticationContext',
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
   * `GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['body'],
    params?: IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/deviceManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}/resourceScope',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
};
