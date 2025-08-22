export * as assignments from './assignments';
export * as exemptAppLockerFiles from './exemptAppLockerFiles';
export * as protectedAppLockerFiles from './protectedAppLockerFiles';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies',
    'get'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}`
 *
 * Deletes a windowsInformationProtectionPolicy.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies`
 *
 * List properties and relationships of the windowsInformationProtectionPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies',
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
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}`
 *
 * Read properties and relationships of the windowsInformationProtectionPolicy object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}`
 *
 * Update the properties of a windowsInformationProtectionPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    paramDefs: [{ name: 'windowsInformationProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionPolicies`
 *
 * Create a new windowsInformationProtectionPolicy object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
