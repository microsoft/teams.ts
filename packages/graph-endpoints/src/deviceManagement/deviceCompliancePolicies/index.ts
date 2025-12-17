export * as scheduledActionsForRule from './scheduledActionsForRule';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies': Operation<
    '/deviceManagement/deviceCompliancePolicies',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicies': Operation<
    '/deviceManagement/deviceCompliancePolicies',
    'post'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assign': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assign',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries',
    'get'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
    'get'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
    'delete'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
    'get'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceCompliancePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies`
 *
 * The device compliance policies.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceCompliancePolicies']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}`
 *
 * The device compliance policies.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    paramDefs: {
      path: ['deviceCompliancePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}',
    paramDefs: {
      path: ['deviceCompliancePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceCompliancePolicies']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assign']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assign',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments`
   *
   * The collection of assignments for this compliance policy.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}`
   *
   * The collection of assignments for this compliance policy.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicy-id', 'deviceCompliancePolicyAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
      paramDefs: {
        path: ['deviceCompliancePolicy-id', 'deviceCompliancePolicyAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicy-id', 'deviceCompliancePolicyAssignment-id'],
      },
      params,
    };
  },
};

export const deviceSettingStateSummaries = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries`
   *
   * Compliance Setting State Device Summary
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
   *
   * Compliance Setting State Device Summary
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicy-id', 'settingStateDeviceSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
      paramDefs: {
        path: ['deviceCompliancePolicy-id', 'settingStateDeviceSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceSettingStateSummaries/{settingStateDeviceSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicy-id', 'settingStateDeviceSummary-id'],
      },
      params,
    };
  },
};

export const deviceStatusOverview = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview`
   *
   * Device compliance devices status overview
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
};

export const deviceStatuses = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses`
   *
   * List of DeviceComplianceDeviceStatus.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}`
   *
   * List of DeviceComplianceDeviceStatus.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicy-id', 'deviceComplianceDeviceStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
      paramDefs: {
        path: ['deviceCompliancePolicy-id', 'deviceComplianceDeviceStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatuses/{deviceComplianceDeviceStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicy-id', 'deviceComplianceDeviceStatus-id'],
      },
      params,
    };
  },
};

export const scheduleActionsForRules = {
  /**
   * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduleActionsForRules',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
};

export const userStatusOverview = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview`
   *
   * Device compliance users status overview
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatusOverview',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
};

export const userStatuses = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses`
   *
   * List of DeviceComplianceUserStatus.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceCompliancePolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses',
      paramDefs: {
        path: ['deviceCompliancePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}`
   *
   * List of DeviceComplianceUserStatus.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicy-id', 'deviceComplianceUserStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
      paramDefs: {
        path: ['deviceCompliancePolicy-id', 'deviceComplianceUserStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/userStatuses/{deviceComplianceUserStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicy-id', 'deviceComplianceUserStatus-id'],
      },
      params,
    };
  },
};
