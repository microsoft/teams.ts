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
  'GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules/{siteProtectionRule-id}': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules/{siteProtectionRule-id}',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    'get'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['sharePointProtectionPolicy-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['sharePointProtectionPolicy-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['sharePointProtectionPolicy-id'],
    },
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
  body: IEndpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/sharePointProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/sharePointProtectionPolicies',
    body,
  };
}

export const siteInclusionRules = {
  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules`
   *
   * Get a list of siteProtectionRule objects associated with a sharePointProtectionPolicy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharePointProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules/{siteProtectionRule-id}`
   *
   * Get a protection rule that&#x27;s associated with a protection policy. You can use this operation to get mailbox, drive, and site protection rules. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules/{siteProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules/{siteProtectionRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteInclusionRules/{siteProtectionRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharePointProtectionPolicy-id', 'siteProtectionRule-id'],
      },
      params,
    };
  },
};

export const siteProtectionUnits = {
  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits`
   *
   * Get a list of the siteProtectionUnit objects that are associated with a sharePointProtectionPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharePointProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   * The protection units (sites) that are protected under the site protection policy.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnits/{siteProtectionUnit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharePointProtectionPolicy-id', 'siteProtectionUnit-id'],
      },
      params,
    };
  },
};

export const siteProtectionUnitsBulkAdditionJobs = {
  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs`
   *
   * Get a list of siteProtectionUnitsBulkAdditionJobs objects associated with a sharePointProtectionPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharePointProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   * Get a siteProtectionUnitsBulkAdditionJob object by the ID associated with a sharePointProtectionPolicy.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/sharePointProtectionPolicies/{sharePointProtectionPolicy-id}/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharePointProtectionPolicy-id', 'siteProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
};
