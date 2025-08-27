export * as mailboxInclusionRules from './mailboxInclusionRules';
export * as mailboxProtectionUnits from './mailboxProtectionUnits';
export * as mailboxProtectionUnitsBulkAdditionJobs from './mailboxProtectionUnitsBulkAdditionJobs';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/exchangeProtectionPolicies': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/exchangeProtectionPolicies': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'exchangeProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/exchangeProtectionPolicies`
 *
 * The list of Exchange protection policies in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies',
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
 * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}`
 *
 * The list of Exchange protection policies in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}`
 *
 * Update an Exchange protection policy. This method adds a mailboxprotectionunit to or removes it from the protection policy.
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    paramDefs: [{ name: 'exchangeProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/exchangeProtectionPolicies`
 *
 * Create a protection policy for the Exchange service in a Microsoft 365 tenant. The policy is set to inactive when it is created. Users can also provide a list of protection units under the policy.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/exchangeProtectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
