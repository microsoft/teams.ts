export * as accessPackageAssignmentApprovals from './apAssignmentApprovals';
export * as accessPackages from './aps';
export * as assignmentPolicies from './assignmentPolicies';
export * as assignmentRequests from './assignmentRequests';
export * as assignments from './assignments';
export * as catalogs from './catalogs';
export * as connectedOrganizations from './connectedOrganizations';
export * as resourceEnvironments from './resourceEnvironments';
export * as resourceRequests from './resourceRequests';
export * as resourceRoleScopes from './resourceRoleScopes';
export * as resources from './resources';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement': Operation<
    '/identityGovernance/entitlementManagement',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement': Operation<
    '/identityGovernance/entitlementManagement',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement': Operation<
    '/identityGovernance/entitlementManagement',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/settings': Operation<
    '/identityGovernance/entitlementManagement/settings',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/settings': Operation<
    '/identityGovernance/entitlementManagement/settings',
    'patch'
  >;
  'DELETE /identityGovernance/entitlementManagement/settings': Operation<
    '/identityGovernance/entitlementManagement/settings',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/entitlementManagement']['response']> {
  return {
    method: 'delete',
    path: '/identityGovernance/entitlementManagement',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/entitlementManagement']['response']> {
  return {
    method: 'get',
    path: '/identityGovernance/entitlementManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/entitlementManagement']['response']> {
  return {
    method: 'patch',
    path: '/identityGovernance/entitlementManagement',
    body,
  };
}

export const settings = {
  /**
   * `GET /identityGovernance/entitlementManagement/settings`
   *
   * Retrieve the properties of an entitlementManagementSettings object.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/settings']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/entitlementManagement/settings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/entitlementManagement/settings`
   *
   * Update an existing entitlementManagementSettings object to change one or more of its properties.
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/entitlementManagement/settings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/entitlementManagement/settings']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/entitlementManagement/settings',
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/entitlementManagement/settings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/entitlementManagement/settings']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/entitlementManagement/settings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
