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
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'get'
  >;
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
 * `DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['exchangeProtectionPolicy-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    paramDefs: {
      path: ['exchangeProtectionPolicy-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}',
    paramDefs: {
      path: ['exchangeProtectionPolicy-id'],
    },
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
  body: IEndpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/exchangeProtectionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/exchangeProtectionPolicies',
    body,
  };
}

export const mailboxInclusionRules = {
  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules`
   *
   * Get a list of mailboxProtectionRule objects associated with an exchangeProtectionPolicy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['exchangeProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}`
   *
   * Get a protection rule that&#x27;s associated with a protection policy. You can use this operation to get mailbox, drive, and site protection rules. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxInclusionRules/{mailboxProtectionRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exchangeProtectionPolicy-id', 'mailboxProtectionRule-id'],
      },
      params,
    };
  },
};

export const mailboxProtectionUnits = {
  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits`
   *
   * The protection units (mailboxes) that are  protected under the Exchange protection policy.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['exchangeProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
   *
   * The protection units (mailboxes) that are  protected under the Exchange protection policy.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exchangeProtectionPolicy-id', 'mailboxProtectionUnit-id'],
      },
      params,
    };
  },
};

export const mailboxProtectionUnitsBulkAdditionJobs = {
  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs`
   *
   * Get a list of mailboxProtectionUnitsBulkAdditionJobs objects associated with an exchangeProtectionPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['exchangeProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
   *
   * Get a mailboxProtectionUnitsBulkAdditionJob object by the ID associated with an exchangeProtectionPolicy.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/solutions/backupRestore/exchangeProtectionPolicies/{exchangeProtectionPolicy-id}/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exchangeProtectionPolicy-id', 'mailboxProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
};
