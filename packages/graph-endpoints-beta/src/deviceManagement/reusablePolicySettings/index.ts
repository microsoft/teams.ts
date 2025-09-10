export * as referencingConfigurationPolicies from './referencingConfigurationPolicies';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}',
    'delete'
  >;
  'GET /deviceManagement/reusablePolicySettings': Operation<
    '/deviceManagement/reusablePolicySettings',
    'get'
  >;
  'GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}',
    'patch'
  >;
  'POST /deviceManagement/reusablePolicySettings': Operation<
    '/deviceManagement/reusablePolicySettings',
    'post'
  >;
  'POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/clone': Operation<
    '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/clone',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementReusablePolicySetting-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/reusablePolicySettings`
 *
 * List of all reusable settings that can be referred in a policy
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/reusablePolicySettings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}`
 *
 * List of all reusable settings that can be referred in a policy
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}',
    paramDefs: {
      path: ['deviceManagementReusablePolicySetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}',
    paramDefs: {
      path: ['deviceManagementReusablePolicySetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/reusablePolicySettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reusablePolicySettings']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/reusablePolicySettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reusablePolicySettings',
    body,
  };
}

export const clone = {
  /**
   * `POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/clone`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/clone']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/clone']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/clone',
      paramDefs: {
        path: ['deviceManagementReusablePolicySetting-id'],
      },
      params,
    };
  },
};
