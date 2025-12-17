import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicySettingStateSummaries': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
    'get'
  >;
  'POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
    'post'
  >;
  'GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}': Operation<
    '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceCompliancePolicySettingStateSummary-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries`
 *
 * The summary states of compliance policy settings for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 * The summary states of compliance policy settings for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: {
      path: ['deviceCompliancePolicySettingStateSummary-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}',
    paramDefs: {
      path: ['deviceCompliancePolicySettingStateSummary-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicySettingStateSummaries`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries',
    body,
  };
}

export const deviceComplianceSettingStates = {
  /**
   * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates`
   *
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceCompliancePolicySettingStateSummary-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates',
      paramDefs: {
        path: ['deviceCompliancePolicySettingStateSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceCompliancePolicySettingStateSummary-id', 'deviceComplianceSettingState-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
      paramDefs: {
        path: ['deviceCompliancePolicySettingStateSummary-id', 'deviceComplianceSettingState-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/deviceCompliancePolicySettingStateSummaries/{deviceCompliancePolicySettingStateSummary-id}/deviceComplianceSettingStates/{deviceComplianceSettingState-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceCompliancePolicySettingStateSummary-id', 'deviceComplianceSettingState-id'],
      },
      params,
    };
  },
};
