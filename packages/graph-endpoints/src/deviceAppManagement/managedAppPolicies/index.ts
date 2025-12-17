import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppPolicies': Operation<
    '/deviceAppManagement/managedAppPolicies',
    'get'
  >;
  'GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppPolicies': Operation<
    '/deviceAppManagement/managedAppPolicies',
    'post'
  >;
  'POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps': Operation<
    '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedAppPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppPolicies`
 *
 * Managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedAppPolicies']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}`
 *
 * Managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    paramDefs: {
      path: ['managedAppPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}',
    paramDefs: {
      path: ['managedAppPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppPolicies']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedAppPolicies']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppPolicies',
    body,
  };
}

export const targetApps = {
  /**
   * `POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedAppPolicies/{managedAppPolicy-id}/targetApps',
      paramDefs: {
        path: ['managedAppPolicy-id'],
      },
      params,
      body,
    };
  },
};
