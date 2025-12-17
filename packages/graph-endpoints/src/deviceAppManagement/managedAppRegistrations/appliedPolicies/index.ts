import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    'post'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/targetApps': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/targetApps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies`
 *
 * Zero or more policys already applied on the registered app when it last synchronized with managment service.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    paramDefs: {
      path: ['managedAppRegistration-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}`
 *
 * Zero or more policys already applied on the registered app when it last synchronized with managment service.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    paramDefs: {
      path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}',
    paramDefs: {
      path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies',
    paramDefs: {
      path: ['managedAppRegistration-id'],
    },
    params,
    body,
  };
}

export const targetApps = {
  /**
   * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/targetApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/targetApps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/targetApps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/targetApps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/appliedPolicies/{managedAppPolicy-id}/targetApps',
      paramDefs: {
        path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
      },
      params,
      body,
    };
  },
};
