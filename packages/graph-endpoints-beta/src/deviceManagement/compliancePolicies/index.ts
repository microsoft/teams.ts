export * as scheduledActionsForRule from './scheduledActionsForRule';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/compliancePolicies': Operation<
    '/deviceManagement/compliancePolicies',
    'get'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/compliancePolicies': Operation<
    '/deviceManagement/compliancePolicies',
    'post'
  >;
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign',
    'post'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions': Operation<
    '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementCompliancePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies`
 *
 * List of all compliance policies
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/compliancePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}`
 *
 * List of all compliance policies
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    paramDefs: {
      path: ['deviceManagementCompliancePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}',
    paramDefs: {
      path: ['deviceManagementCompliancePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/compliancePolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/compliancePolicies']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/compliancePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/compliancePolicies',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assign',
      paramDefs: {
        path: ['deviceManagementCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments`
   *
   * Policy assignments
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementCompliancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments',
      paramDefs: {
        path: ['deviceManagementCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
   *
   * Policy assignments
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementCompliancePolicy-id',
          'deviceManagementConfigurationPolicyAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
      paramDefs: {
        path: [
          'deviceManagementCompliancePolicy-id',
          'deviceManagementConfigurationPolicyAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementCompliancePolicy-id',
          'deviceManagementConfigurationPolicyAssignment-id',
        ],
      },
      params,
    };
  },
};

export const setScheduledActions = {
  /**
   * `POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions']['body'],
    params?: IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/setScheduledActions',
      paramDefs: {
        path: ['deviceManagementCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
};
