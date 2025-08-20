export * as assignedUsers from './assignedUsers';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'cloudPcProvisioningPolicy-id', in: 'path' },
      { name: 'cloudPcProvisioningPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments`
 *
 * A defined collection of provisioning policy assignments. Represents the set of Microsoft 365 groups and security groups in Microsoft Entra ID that have provisioning policy assigned. Returned only on $expand. For an example about how to get the assignments relationship, see Get cloudPcProvisioningPolicy.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcProvisioningPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}`
 *
 * A defined collection of provisioning policy assignments. Represents the set of Microsoft 365 groups and security groups in Microsoft Entra ID that have provisioning policy assigned. Returned only on $expand. For an example about how to get the assignments relationship, see Get cloudPcProvisioningPolicy.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'cloudPcProvisioningPolicy-id', in: 'path' },
      { name: 'cloudPcProvisioningPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments/{cloudPcProvisioningPolicyAssignment-id}',
    paramDefs: [
      { name: 'cloudPcProvisioningPolicy-id', in: 'path' },
      { name: 'cloudPcProvisioningPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assignments',
    paramDefs: [{ name: 'cloudPcProvisioningPolicy-id', in: 'path' }],
    params,
    body,
  };
}
