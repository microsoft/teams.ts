export * as siteInclusionRules from './siteInclusionRules';
export * as siteProtectionUnits from './siteProtectionUnits';
export * as siteProtectionUnitsBulkAdditionJobs from './siteProtectionUnitsBulkAdditionJobs';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/sharePointProtectionPolicies': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
    'patch'
  >;
  'POST /solutions/backupRestore/sharePointProtectionPolicies': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies',
    'post'
  >;
}

/**
 * `DELETE /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharePointProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/backupRestore/sharePointProtectionPolicies`
 *
 * The list of SharePoint protection policies in the tenant.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/sharePointProtectionPolicies',
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
 * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}`
 *
 * The list of SharePoint protection policies in the tenant.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharePointProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}`
 *
 * Update a SharePoint protection policy. This method adds a siteprotectionunit to or removes it from the protection policy.
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}',
    paramDefs: [{ name: 'sharePointProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/backupRestore/sharePointProtectionPolicies`
 *
 * Create a protection policy for a M365 service SharePoint. Policy will be created in inactive state. User can also provide a list of protection units under the policy.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/sharePointProtectionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
