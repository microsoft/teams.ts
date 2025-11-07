import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
    'post'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies`
 *
 * Zero or more policies admin intended for the app as of now.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
    paramDefs: {
      path: ['managedAppRegistration-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}`
 *
 * Zero or more policies admin intended for the app as of now.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    paramDefs: {
      path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}',
    paramDefs: {
      path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies',
    paramDefs: {
      path: ['managedAppRegistration-id'],
    },
    params,
    body,
  };
}

export const targetApps = {
  /**
   * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/intendedPolicies/{managedAppPolicy-id}/targetApps',
      paramDefs: {
        path: ['managedAppRegistration-id', 'managedAppPolicy-id'],
      },
      params,
      body,
    };
  },
};
