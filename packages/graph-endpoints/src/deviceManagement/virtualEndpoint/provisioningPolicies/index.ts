export * as assignments from './assignments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/provisioningPolicies': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies',
    'get'
  >;
  'GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign': Operation<
    '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}`
 *
 * Delete a cloudPcProvisioningPolicy object. You can’t delete a policy that’s in use.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['cloudPcProvisioningPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/provisioningPolicies`
 *
 * List properties and relationships of the cloudPcProvisioningPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}`
 *
 * Read the properties and relationships of a cloudPcProvisioningPolicy object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    paramDefs: {
      path: ['cloudPcProvisioningPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}`
 *
 * Update the properties of a cloudPcProvisioningPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}',
    paramDefs: {
      path: ['cloudPcProvisioningPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/virtualEndpoint/provisioningPolicies`
 *
 * Create a new cloudPcProvisioningPolicy object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/provisioningPolicies',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign`
   *
   * Assign a cloudPcProvisioningPolicy to user groups.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/provisioningPolicies/{cloudPcProvisioningPolicy-id}/assign',
      paramDefs: {
        path: ['cloudPcProvisioningPolicy-id'],
      },
      params,
      body,
    };
  },
};
