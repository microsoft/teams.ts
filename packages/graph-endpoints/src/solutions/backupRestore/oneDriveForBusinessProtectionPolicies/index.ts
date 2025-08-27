export * as driveInclusionRules from './driveInclusionRules';
export * as driveProtectionUnits from './driveProtectionUnits';
export * as driveProtectionUnitsBulkAdditionJobs from './driveProtectionUnitsBulkAdditionJobs';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies',
    'get'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies`
 *
 * The list of OneDrive for Business protection policies in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies',
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
 * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}`
 *
 * The list of OneDrive for Business protection policies in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}`
 *
 * Update the protection policy for the OneDrive service in Microsoft 365. This method adds a driveProtectionUnit to or removes it from a oneDriveForBusinessProtectionPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}',
    paramDefs: [{ name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies`
 *
 * Create a protection policy for the OneDrive service in Microsoft 365. When the policy is created, its state is set to inactive. Users can also provide a list of protection units under the policy.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
