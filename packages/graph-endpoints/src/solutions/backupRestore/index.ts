export * as exchangeProtectionPolicies from './exchangeProtectionPolicies';
export * as exchangeRestoreSessions from './exchangeRestoreSessions';
export * as oneDriveForBusinessProtectionPolicies from './oneDriveForBusinessProtectionPolicies';
export * as oneDriveForBusinessRestoreSessions from './oneDriveForBusinessRestoreSessions';
export * as protectionPolicies from './protectionPolicies';
export * as protectionUnits from './protectionUnits';
export * as restorePoints from './restorePoints';
export * as restoreSessions from './restoreSessions';
export * as serviceApps from './serviceApps';
export * as sharePointProtectionPolicies from './sharePointProtectionPolicies';
export * as sharePointRestoreSessions from './sharePointRestoreSessions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/backupRestore': Operation<'/solutions/backupRestore', 'delete'>;
  'GET /solutions/backupRestore': Operation<'/solutions/backupRestore', 'get'>;
  'PATCH /solutions/backupRestore': Operation<'/solutions/backupRestore', 'patch'>;
  'GET /solutions/backupRestore/driveInclusionRules': Operation<
    '/solutions/backupRestore/driveInclusionRules',
    'get'
  >;
  'POST /solutions/backupRestore/driveInclusionRules': Operation<
    '/solutions/backupRestore/driveInclusionRules',
    'post'
  >;
  'GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}': Operation<
    '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}': Operation<
    '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}': Operation<
    '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/driveProtectionUnits': Operation<
    '/solutions/backupRestore/driveProtectionUnits',
    'get'
  >;
  'POST /solutions/backupRestore/driveProtectionUnits': Operation<
    '/solutions/backupRestore/driveProtectionUnits',
    'post'
  >;
  'GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
    'post'
  >;
  'GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
    'delete'
  >;
  'POST /solutions/backupRestore/enable': Operation<'/solutions/backupRestore/enable', 'post'>;
  'GET /solutions/backupRestore/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/mailboxInclusionRules',
    'get'
  >;
  'POST /solutions/backupRestore/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/mailboxInclusionRules',
    'post'
  >;
  'GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnits': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits',
    'get'
  >;
  'POST /solutions/backupRestore/mailboxProtectionUnits': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits',
    'post'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
    'post'
  >;
  'GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/siteInclusionRules': Operation<
    '/solutions/backupRestore/siteInclusionRules',
    'get'
  >;
  'POST /solutions/backupRestore/siteInclusionRules': Operation<
    '/solutions/backupRestore/siteInclusionRules',
    'post'
  >;
  'GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}': Operation<
    '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}': Operation<
    '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}': Operation<
    '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/siteProtectionUnits': Operation<
    '/solutions/backupRestore/siteProtectionUnits',
    'get'
  >;
  'POST /solutions/backupRestore/siteProtectionUnits': Operation<
    '/solutions/backupRestore/siteProtectionUnits',
    'post'
  >;
  'GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
    'delete'
  >;
  'GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
    'get'
  >;
  'POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
    'post'
  >;
  'GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    'get'
  >;
  'PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    'patch'
  >;
  'DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}': Operation<
    '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
    'delete'
  >;
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/backupRestore`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/backupRestore']['body']
): EndpointRequest<IEndpoints['PATCH /solutions/backupRestore']['response']> {
  return {
    method: 'patch',
    path: '/solutions/backupRestore',
    body,
  };
}

export const driveInclusionRules = {
  /**
   * `GET /solutions/backupRestore/driveInclusionRules`
   *
   * The list of drive inclusion rules applied to the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/driveInclusionRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /solutions/backupRestore/driveInclusionRules']['response']> {
    return {
      method: 'get',
      path: '/solutions/backupRestore/driveInclusionRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/driveInclusionRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/driveInclusionRules']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/backupRestore/driveInclusionRules']['response']> {
    return {
      method: 'post',
      path: '/solutions/backupRestore/driveInclusionRules',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
   *
   * The list of drive inclusion rules applied to the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['driveProtectionRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
      paramDefs: {
        path: ['driveProtectionRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/driveInclusionRules/{driveProtectionRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['driveProtectionRule-id'],
      },
      params,
    };
  },
};

export const driveProtectionUnits = {
  /**
   * `GET /solutions/backupRestore/driveProtectionUnits`
   *
   * The list of drive protection units in the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnits']['parameters']
  ): EndpointRequest<IEndpoints['GET /solutions/backupRestore/driveProtectionUnits']['response']> {
    return {
      method: 'get',
      path: '/solutions/backupRestore/driveProtectionUnits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/driveProtectionUnits`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/driveProtectionUnits']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/backupRestore/driveProtectionUnits']['response']> {
    return {
      method: 'post',
      path: '/solutions/backupRestore/driveProtectionUnits',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
   *
   * The list of drive protection units in the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['driveProtectionUnit-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
      paramDefs: {
        path: ['driveProtectionUnit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['driveProtectionUnit-id'],
      },
      params,
    };
  },
};

export const driveProtectionUnitsBulkAdditionJobs = {
  /**
   * `GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['body']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['driveProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        path: ['driveProtectionUnitsBulkAdditionJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/driveProtectionUnitsBulkAdditionJobs/{driveProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['driveProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
};

export const enable = {
  /**
   * `POST /solutions/backupRestore/enable`
   *
   * Enable the Microsoft 365 Backup Storage service for a tenant.
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/enable']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/backupRestore/enable']['response']> {
    return {
      method: 'post',
      path: '/solutions/backupRestore/enable',
      body,
    };
  },
};

export const mailboxInclusionRules = {
  /**
   * `GET /solutions/backupRestore/mailboxInclusionRules`
   *
   * The list of mailbox inclusion rules applied to the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules']['response']> {
    return {
      method: 'get',
      path: '/solutions/backupRestore/mailboxInclusionRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/mailboxInclusionRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/mailboxInclusionRules']['body']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/mailboxInclusionRules']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/mailboxInclusionRules',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
   *
   * The list of mailbox inclusion rules applied to the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailboxProtectionRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
      paramDefs: {
        path: ['mailboxProtectionRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mailboxProtectionRule-id'],
      },
      params,
    };
  },
};

export const mailboxProtectionUnits = {
  /**
   * `GET /solutions/backupRestore/mailboxProtectionUnits`
   *
   * The list of mailbox protection units in the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/mailboxProtectionUnits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/mailboxProtectionUnits`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['body']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnits']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/mailboxProtectionUnits',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
   *
   * The list of mailbox protection units in the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailboxProtectionUnit-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
      paramDefs: {
        path: ['mailboxProtectionUnit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mailboxProtectionUnit-id'],
      },
      params,
    };
  },
};

export const mailboxProtectionUnitsBulkAdditionJobs = {
  /**
   * `GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['body']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mailboxProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        path: ['mailboxProtectionUnitsBulkAdditionJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/mailboxProtectionUnitsBulkAdditionJobs/{mailboxProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mailboxProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
};

export const siteInclusionRules = {
  /**
   * `GET /solutions/backupRestore/siteInclusionRules`
   *
   * The list of site inclusion rules applied to the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/siteInclusionRules']['parameters']
  ): EndpointRequest<IEndpoints['GET /solutions/backupRestore/siteInclusionRules']['response']> {
    return {
      method: 'get',
      path: '/solutions/backupRestore/siteInclusionRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/siteInclusionRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/siteInclusionRules']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/backupRestore/siteInclusionRules']['response']> {
    return {
      method: 'post',
      path: '/solutions/backupRestore/siteInclusionRules',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
   *
   * The list of site inclusion rules applied to the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['siteProtectionRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
      paramDefs: {
        path: ['siteProtectionRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/siteInclusionRules/{siteProtectionRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['siteProtectionRule-id'],
      },
      params,
    };
  },
};

export const siteProtectionUnits = {
  /**
   * `GET /solutions/backupRestore/siteProtectionUnits`
   *
   * The list of site protection units in the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnits']['parameters']
  ): EndpointRequest<IEndpoints['GET /solutions/backupRestore/siteProtectionUnits']['response']> {
    return {
      method: 'get',
      path: '/solutions/backupRestore/siteProtectionUnits',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/siteProtectionUnits`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/siteProtectionUnits']['body']
  ): EndpointRequest<IEndpoints['POST /solutions/backupRestore/siteProtectionUnits']['response']> {
    return {
      method: 'post',
      path: '/solutions/backupRestore/siteProtectionUnits',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   * The list of site protection units in the tenant.
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['siteProtectionUnit-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
      paramDefs: {
        path: ['siteProtectionUnit-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/siteProtectionUnits/{siteProtectionUnit-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['siteProtectionUnit-id'],
      },
      params,
    };
  },
};

export const siteProtectionUnitsBulkAdditionJobs = {
  /**
   * `GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs`
   *
   */
  list: function list(
    params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['body']
  ): EndpointRequest<
    IEndpoints['POST /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs']['response']
  > {
    return {
      method: 'post',
      path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs',
      body,
    };
  },
  /**
   * `GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'get',
      path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['siteProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['body'],
    params?: IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        path: ['siteProtectionUnitsBulkAdditionJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/solutions/backupRestore/siteProtectionUnitsBulkAdditionJobs/{siteProtectionUnitsBulkAdditionJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['siteProtectionUnitsBulkAdditionJob-id'],
      },
      params,
    };
  },
};
