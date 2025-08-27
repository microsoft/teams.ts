export * as clone from './clone';
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementReusablePolicySetting-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'deviceManagementReusablePolicySetting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/reusablePolicySettings`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reusablePolicySettings']['body'],
  params?: IEndpoints['POST /deviceManagement/reusablePolicySettings']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/reusablePolicySettings']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reusablePolicySettings',
    paramDefs: [],
    params,
    body,
  };
}
