export * as assignments from './assignments';
export * as exemptAppLockerFiles from './exemptAppLockerFiles';
export * as protectedAppLockerFiles from './protectedAppLockerFiles';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
    'get'
  >;
  'GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}`
 *
 * Deletes a mdmWindowsInformationProtectionPolicy.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies`
 *
 * List properties and relationships of the mdmWindowsInformationProtectionPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
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
 * `GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}`
 *
 * Read properties and relationships of the mdmWindowsInformationProtectionPolicy object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}`
 *
 * Update the properties of a mdmWindowsInformationProtectionPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy-id}',
    paramDefs: [{ name: 'mdmWindowsInformationProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies`
 *
 * Create a new mdmWindowsInformationProtectionPolicy object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mdmWindowsInformationProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mdmWindowsInformationProtectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
