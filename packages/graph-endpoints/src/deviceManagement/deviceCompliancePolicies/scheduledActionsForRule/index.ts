import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations',
    'get'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}`
 *
 * Deletes a deviceComplianceScheduledActionForRule.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceCompliancePolicy-id', 'deviceComplianceScheduledActionForRule-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule`
 *
 * List properties and relationships of the deviceComplianceScheduledActionForRule objects.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    paramDefs: {
      path: ['deviceCompliancePolicy-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}`
 *
 * Read properties and relationships of the deviceComplianceScheduledActionForRule object.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    paramDefs: {
      path: ['deviceCompliancePolicy-id', 'deviceComplianceScheduledActionForRule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}`
 *
 * Update the properties of a deviceComplianceScheduledActionForRule object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}',
    paramDefs: {
      path: ['deviceCompliancePolicy-id', 'deviceComplianceScheduledActionForRule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule`
 *
 * Create a new deviceComplianceScheduledActionForRule object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule',
    paramDefs: {
      path: ['deviceCompliancePolicy-id'],
    },
    params,
    body,
  };
}

export const scheduledActionConfigurations = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations`
   *
   * List properties and relationships of the deviceComplianceActionItem objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceCompliancePolicy-id', 'deviceComplianceScheduledActionForRule-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations`
   *
   * Create a new deviceComplianceActionItem object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations',
      paramDefs: {
        path: ['deviceCompliancePolicy-id', 'deviceComplianceScheduledActionForRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}`
   *
   * Read properties and relationships of the deviceComplianceActionItem object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceCompliancePolicy-id',
          'deviceComplianceScheduledActionForRule-id',
          'deviceComplianceActionItem-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}`
   *
   * Update the properties of a deviceComplianceActionItem object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}',
      paramDefs: {
        path: [
          'deviceCompliancePolicy-id',
          'deviceComplianceScheduledActionForRule-id',
          'deviceComplianceActionItem-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}`
   *
   * Deletes a deviceComplianceActionItem.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceComplianceActionItem-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceCompliancePolicy-id',
          'deviceComplianceScheduledActionForRule-id',
          'deviceComplianceActionItem-id',
        ],
      },
      params,
    };
  },
};
