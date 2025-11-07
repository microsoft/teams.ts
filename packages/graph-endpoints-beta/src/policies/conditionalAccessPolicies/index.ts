import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'delete'
  >;
  'GET /policies/conditionalAccessPolicies': Operation<
    '/policies/conditionalAccessPolicies',
    'get'
  >;
  'GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'get'
  >;
  'PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'patch'
  >;
  'POST /policies/conditionalAccessPolicies': Operation<
    '/policies/conditionalAccessPolicies',
    'post'
  >;
  'POST /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}/restore': Operation<
    '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}/restore',
    'post'
  >;
}

/**
 * `DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['conditionalAccessPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/conditionalAccessPolicies`
 *
 * The custom rules that define an access scenario.
 */
export function list(
  params?: IEndpoints['GET /policies/conditionalAccessPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/conditionalAccessPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/conditionalAccessPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
 *
 * The custom rules that define an access scenario.
 */
export function get(
  params?: IEndpoints['GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    paramDefs: {
      path: ['conditionalAccessPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    paramDefs: {
      path: ['conditionalAccessPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/conditionalAccessPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/conditionalAccessPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/conditionalAccessPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/conditionalAccessPolicies',
    body,
  };
}

export const restore = {
  /**
   * `POST /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}/restore`
   *
   * Restore a deleted conditionalAccessPolicy object.
   */
  create: function create(
    params?: IEndpoints['POST /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/conditionalAccessPolicies/{conditionalAccessPolicy-id}/restore',
      paramDefs: {
        path: ['conditionalAccessPolicy-id'],
      },
      params,
    };
  },
};
