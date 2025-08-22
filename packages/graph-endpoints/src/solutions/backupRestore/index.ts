export * as driveInclusionRules from './driveInclusionRules';
export * as driveProtectionUnits from './driveProtectionUnits';
export * as driveProtectionUnitsBulkAdditionJobs from './driveProtectionUnitsBulkAdditionJobs';
export * as enable from './enable';
export * as exchangeProtectionPolicies from './exchangeProtectionPolicies';
export * as exchangeRestoreSessions from './exchangeRestoreSessions';
export * as mailboxInclusionRules from './mailboxInclusionRules';
export * as mailboxProtectionUnits from './mailboxProtectionUnits';
export * as mailboxProtectionUnitsBulkAdditionJobs from './mailboxProtectionUnitsBulkAdditionJobs';
export * as oneDriveForBusinessProtectionPolicies from './oneDriveForBusinessProtectionPolicies';
export * as oneDriveForBusinessRestoreSessions from './oneDriveForBusinessRestoreSessions';
export * as protectionPolicies from './protectionPolicies';
export * as protectionUnits from './protectionUnits';
export * as restorePoints from './restorePoints';
export * as restoreSessions from './restoreSessions';
export * as serviceApps from './serviceApps';
export * as sharePointProtectionPolicies from './sharePointProtectionPolicies';
export * as sharePointRestoreSessions from './sharePointRestoreSessions';
export * as siteInclusionRules from './siteInclusionRules';
export * as siteProtectionUnits from './siteProtectionUnits';
export * as siteProtectionUnitsBulkAdditionJobs from './siteProtectionUnitsBulkAdditionJobs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore': Operation<'/solutions/backupRestore', 'delete'>;
  'GET /solutions/backupRestore': Operation<'/solutions/backupRestore', 'get'>;
  'PATCH /solutions/backupRestore': Operation<'/solutions/backupRestore', 'patch'>;
}

/**
 * `DELETE /solutions/backupRestore`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore']['parameters']
): EndpointRequest<IEndpoints['DELETE /solutions/backupRestore']['response']> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /solutions/backupRestore`
 *
 * Get the serviceStatus of the Microsoft 365 Backup Storage service in a tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/backupRestore']['response']> {
  return {
    method: 'get',
    path: '/solutions/backupRestore',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore']['parameters']
): EndpointRequest<IEndpoints['PATCH /solutions/backupRestore']['response']> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore',
    paramDefs: [],
    params,
    body,
  };
}
