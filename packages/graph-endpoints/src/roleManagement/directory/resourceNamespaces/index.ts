import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/directory/resourceNamespaces': Operation<
    '/roleManagement/directory/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/directory/resourceNamespaces': Operation<
    '/roleManagement/directory/resourceNamespaces',
    'post'
  >;
  'GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'get'
  >;
  'POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'post'
  >;
  'GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'patch'
  >;
  'DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/resourceNamespaces`
 *
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/directory/resourceNamespaces']['response']> {
  return {
    method: 'get',
    path: '/roleManagement/directory/resourceNamespaces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/resourceNamespaces`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/resourceNamespaces']['body']
): EndpointRequest<IEndpoints['POST /roleManagement/directory/resourceNamespaces']['response']> {
  return {
    method: 'post',
    path: '/roleManagement/directory/resourceNamespaces',
    body,
  };
}

export const resourceActions = {
  /**
   * `GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
   *
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['body'],
    params?: IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
  > {
    return {
      method: 'post',
      path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['body'],
    params?: IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/roleManagement/directory/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
};
