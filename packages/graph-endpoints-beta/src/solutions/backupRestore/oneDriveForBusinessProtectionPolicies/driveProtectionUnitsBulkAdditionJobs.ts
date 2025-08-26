import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
}

/**
 * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs`
 *
 * Get a list of driveProtectionUnitsBulkAdditionJobs objects associated with a oneDriveForBusinessProtectionPolicy.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
 *
 * Get a driveProtectionUnitsBulkAdditionJob object by the ID associated with a oneDriveForBusinessProtectionPolicy.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'oneDriveForBusinessProtectionPolicy-id', in: 'path' },
      { name: 'driveProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}
