export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/configurationPolicies': Operation<
    '/deviceManagement/configurationPolicies',
    'get'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/configurationPolicies': Operation<
    '/deviceManagement/configurationPolicies',
    'post'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assign': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assign',
    'post'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy',
    'post'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder',
    'post'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
  'POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget': Operation<
    '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementConfigurationPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicies`
 *
 * List of all Configuration policies
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/configurationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 * List of all Configuration policies
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: {
      path: ['deviceManagementConfigurationPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}',
    paramDefs: {
      path: ['deviceManagementConfigurationPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/configurationPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/configurationPolicies']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/configurationPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/configurationPolicies',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assign',
      paramDefs: {
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments`
   *
   * Policy assignments
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments',
      paramDefs: {
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
   *
   * Policy assignments
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementConfigurationPolicy-id',
          'deviceManagementConfigurationPolicyAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
      paramDefs: {
        path: [
          'deviceManagementConfigurationPolicy-id',
          'deviceManagementConfigurationPolicyAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementConfigurationPolicy-id',
          'deviceManagementConfigurationPolicyAssignment-id',
        ],
      },
      params,
    };
  },
};

export const clearEnrollmentTimeDeviceMembershipTarget = {
  /**
   * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/clearEnrollmentTimeDeviceMembershipTarget',
      paramDefs: {
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
    };
  },
};

export const createCopy = {
  /**
   * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy']['body'],
    params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/createCopy',
      paramDefs: {
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
      body,
    };
  },
};

export const reorder = {
  /**
   * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder']['body'],
    params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/reorder',
      paramDefs: {
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
      body,
    };
  },
};

export const retrieveEnrollmentTimeDeviceMembershipTarget = {
  /**
   * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/retrieveEnrollmentTimeDeviceMembershipTarget',
      paramDefs: {
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
    };
  },
};

export const setEnrollmentTimeDeviceMembershipTarget = {
  /**
   * `POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget']['body'],
    params?: IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy-id}/setEnrollmentTimeDeviceMembershipTarget',
      paramDefs: {
        path: ['deviceManagementConfigurationPolicy-id'],
      },
      params,
      body,
    };
  },
};
