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
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules',
    'get'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules/{driveProtectionRule-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules/{driveProtectionRule-id}',
    'get'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits',
    'get'
  >;
  'GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits/{driveProtectionUnit-id}': Operation<
    '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits/{driveProtectionUnit-id}',
    'get'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['oneDriveForBusinessProtectionPolicy-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['oneDriveForBusinessProtectionPolicy-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['oneDriveForBusinessProtectionPolicy-id'],
    },
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
  body: IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/oneDriveForBusinessProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies',
    body,
  };
}

export const driveInclusionRules = {
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules`
   *
   * Get a list of the driveProtectionRule objects that are associated with a OneDrive for Business protection policy. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['oneDriveForBusinessProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules/{driveProtectionRule-id}`
   *
   * Get a protection rule that&#x27;s associated with a protection policy. You can use this operation to get mailbox, drive, and site protection rules. An inclusion rule indicates that a protection policy should contain protection units that match the specified rule criteria. The initial status of a protection rule upon creation is active. After the rule is applied, the state is either completed or completedWithErrors.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules/{driveProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules/{driveProtectionRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveInclusionRules/{driveProtectionRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['oneDriveForBusinessProtectionPolicy-id', 'driveProtectionRule-id'],
      },
      params,
    };
  },
};

export const driveProtectionUnits = {
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits`
   *
   * Get a list of the driveProtectionUnit objects that are associated with a oneDriveForBusinessProtectionPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['oneDriveForBusinessProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits/{driveProtectionUnit-id}`
   *
   * Contains the protection units associated with a  OneDrive for Business protection policy.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits/{driveProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits/{driveProtectionUnit-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnits/{driveProtectionUnit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['oneDriveForBusinessProtectionPolicy-id', 'driveProtectionUnit-id'],
      },
      params,
    };
  },
};

export const driveProtectionUnitsBulkAdditionJobs = {
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs`
   *
   * Get a list of driveProtectionUnitsBulkAdditionJobs objects associated with a oneDriveForBusinessProtectionPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['oneDriveForBusinessProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   * Get a driveProtectionUnitsBulkAdditionJob object by the ID associated with a oneDriveForBusinessProtectionPolicy.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/oneDriveForBusinessProtectionPolicies/{oneDriveForBusinessProtectionPolicy-id}/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['oneDriveForBusinessProtectionPolicy-id', 'driveProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
};
