export * as keySets from './keySets';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /trustFramework': Operation<'/trustFramework', 'get'>;
  'PATCH /trustFramework': Operation<'/trustFramework', 'patch'>;
  'GET /trustFramework/policies': Operation<'/trustFramework/policies', 'get'>;
  'POST /trustFramework/policies': Operation<'/trustFramework/policies', 'post'>;
  'GET /trustFramework/policies/{trustFrameworkPolicy-id}': Operation<
    '/trustFramework/policies/{trustFrameworkPolicy-id}',
    'get'
  >;
  'PATCH /trustFramework/policies/{trustFrameworkPolicy-id}': Operation<
    '/trustFramework/policies/{trustFrameworkPolicy-id}',
    'patch'
  >;
  'DELETE /trustFramework/policies/{trustFrameworkPolicy-id}': Operation<
    '/trustFramework/policies/{trustFrameworkPolicy-id}',
    'delete'
  >;
}

/**
 * `GET /trustFramework`
 *
 */
export function get(
  params?: IEndpoints['GET /trustFramework']['parameters']
): EndpointRequest<IEndpoints['GET /trustFramework']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/trustFramework',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /trustFramework`
 *
 */
export function update(
  body: IEndpoints['PATCH /trustFramework']['body']
): EndpointRequest<IEndpoints['PATCH /trustFramework']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/trustFramework',
    body,
  };
}

export const policies = {
  /**
   * `GET /trustFramework/policies`
   *
   * Retrieve a list of trustFrameworkPolicies in the tenant/directory.
   */
  list: function list(
    params?: IEndpoints['GET /trustFramework/policies']['parameters']
  ): EndpointRequest<IEndpoints['GET /trustFramework/policies']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/trustFramework/policies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /trustFramework/policies`
   *
   */
  create: function create(
    body: IEndpoints['POST /trustFramework/policies']['body']
  ): EndpointRequest<IEndpoints['POST /trustFramework/policies']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/trustFramework/policies',
      body,
    };
  },
  /**
   * `GET /trustFramework/policies/{trustFrameworkPolicy-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /trustFramework/policies/{trustFrameworkPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /trustFramework/policies/{trustFrameworkPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/trustFramework/policies/{trustFrameworkPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['trustFrameworkPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /trustFramework/policies/{trustFrameworkPolicy-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /trustFramework/policies/{trustFrameworkPolicy-id}']['body'],
    params?: IEndpoints['PATCH /trustFramework/policies/{trustFrameworkPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /trustFramework/policies/{trustFrameworkPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/trustFramework/policies/{trustFrameworkPolicy-id}',
      paramDefs: {
        path: ['trustFrameworkPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /trustFramework/policies/{trustFrameworkPolicy-id}`
   *
   * Delete an existing trustFrameworkPolicy object from an Microsoft Entra B2C tenant.
   */
  del: function del(
    params?: IEndpoints['DELETE /trustFramework/policies/{trustFrameworkPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /trustFramework/policies/{trustFrameworkPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/trustFramework/policies/{trustFrameworkPolicy-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['trustFrameworkPolicy-id'],
      },
      params,
    };
  },
};
