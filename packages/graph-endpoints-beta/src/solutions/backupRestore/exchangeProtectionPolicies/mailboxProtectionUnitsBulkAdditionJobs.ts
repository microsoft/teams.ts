import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
}

/**
 * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs`
 *
 * Get a list of mailboxProtectionUnitsBulkAdditionJobs objects associated with an exchangeProtectionPolicy.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
 *
 * Get a mailboxProtectionUnitsBulkAdditionJob object by the ID associated with an exchangeProtectionPolicy.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeProtectionPolicy-id', in: 'path' },
      { name: 'mailboxProtectionUnitsBulkAdditionJob-id', in: 'path' },
    ],
    params,
  };
}
