import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'get'
  >;
}

/**
 * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules`
 *
 * Get a list of mailboxProtectionRule objects associated with an exchangeProtectionPolicy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
 */
export function list(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules',
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
 * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}`
 *
 * Get a protection rule that&#x27;s associated with a protection policy. You can use this operation to get mailbox, drive, and site protection rules. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'exchangeProtectionPolicy-id', in: 'path' },
      { name: 'mailboxProtectionRule-id', in: 'path' },
    ],
    params,
  };
}
