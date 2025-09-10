export * as authenticationMethods from './authenticationMethods';
export * as healthMonitoring from './healthMonitoring';
export * as partners from './partners';
export * as sla from './sla';
export * as userInsights from './userInsights';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /reports': Operation<'/reports', 'get'>;
  'PATCH /reports': Operation<'/reports', 'patch'>;
  'GET /reports/appCredentialSignInActivities': Operation<
    '/reports/appCredentialSignInActivities',
    'get'
  >;
  'POST /reports/appCredentialSignInActivities': Operation<
    '/reports/appCredentialSignInActivities',
    'post'
  >;
  'GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}': Operation<
    '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    'get'
  >;
  'PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}': Operation<
    '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    'patch'
  >;
  'DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}': Operation<
    '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
    'delete'
  >;
  'GET /reports/applicationSignInDetailedSummary': Operation<
    '/reports/applicationSignInDetailedSummary',
    'get'
  >;
  'POST /reports/applicationSignInDetailedSummary': Operation<
    '/reports/applicationSignInDetailedSummary',
    'post'
  >;
  'GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}': Operation<
    '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    'get'
  >;
  'PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}': Operation<
    '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    'patch'
  >;
  'DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}': Operation<
    '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
    'delete'
  >;
  'GET /reports/credentialUserRegistrationDetails': Operation<
    '/reports/credentialUserRegistrationDetails',
    'get'
  >;
  'POST /reports/credentialUserRegistrationDetails': Operation<
    '/reports/credentialUserRegistrationDetails',
    'post'
  >;
  'GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}': Operation<
    '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    'get'
  >;
  'PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}': Operation<
    '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    'patch'
  >;
  'DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}': Operation<
    '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsage': Operation<'/reports/dailyPrintUsage', 'get'>;
  'POST /reports/dailyPrintUsage': Operation<'/reports/dailyPrintUsage', 'post'>;
  'GET /reports/dailyPrintUsage/{printUsage-id}': Operation<
    '/reports/dailyPrintUsage/{printUsage-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsage/{printUsage-id}': Operation<
    '/reports/dailyPrintUsage/{printUsage-id}',
    'patch'
  >;
  'DELETE /reports/dailyPrintUsage/{printUsage-id}': Operation<
    '/reports/dailyPrintUsage/{printUsage-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageByPrinter': Operation<'/reports/dailyPrintUsageByPrinter', 'get'>;
  'POST /reports/dailyPrintUsageByPrinter': Operation<'/reports/dailyPrintUsageByPrinter', 'post'>;
  'GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageByUser': Operation<'/reports/dailyPrintUsageByUser', 'get'>;
  'POST /reports/dailyPrintUsageByUser': Operation<'/reports/dailyPrintUsageByUser', 'post'>;
  'GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'patch'
  >;
  'DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageSummariesByPrinter': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter',
    'get'
  >;
  'POST /reports/dailyPrintUsageSummariesByPrinter': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter',
    'post'
  >;
  'GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/dailyPrintUsageSummariesByUser': Operation<
    '/reports/dailyPrintUsageSummariesByUser',
    'get'
  >;
  'POST /reports/dailyPrintUsageSummariesByUser': Operation<
    '/reports/dailyPrintUsageSummariesByUser',
    'post'
  >;
  'GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'patch'
  >;
  'DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageByPrinter': Operation<
    '/reports/monthlyPrintUsageByPrinter',
    'get'
  >;
  'POST /reports/monthlyPrintUsageByPrinter': Operation<
    '/reports/monthlyPrintUsageByPrinter',
    'post'
  >;
  'GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageByUser': Operation<'/reports/monthlyPrintUsageByUser', 'get'>;
  'POST /reports/monthlyPrintUsageByUser': Operation<'/reports/monthlyPrintUsageByUser', 'post'>;
  'GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'patch'
  >;
  'DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageSummariesByPrinter': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter',
    'get'
  >;
  'POST /reports/monthlyPrintUsageSummariesByPrinter': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter',
    'post'
  >;
  'GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'patch'
  >;
  'DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
    'delete'
  >;
  'GET /reports/monthlyPrintUsageSummariesByUser': Operation<
    '/reports/monthlyPrintUsageSummariesByUser',
    'get'
  >;
  'POST /reports/monthlyPrintUsageSummariesByUser': Operation<
    '/reports/monthlyPrintUsageSummariesByUser',
    'post'
  >;
  'GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'get'
  >;
  'PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'patch'
  >;
  'DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}': Operation<
    '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
    'delete'
  >;
  'GET /reports/security': Operation<'/reports/security', 'get'>;
  'PATCH /reports/security': Operation<'/reports/security', 'patch'>;
  'DELETE /reports/security': Operation<'/reports/security', 'delete'>;
  'GET /reports/serviceActivity': Operation<'/reports/serviceActivity', 'get'>;
  'PATCH /reports/serviceActivity': Operation<'/reports/serviceActivity', 'patch'>;
  'DELETE /reports/serviceActivity': Operation<'/reports/serviceActivity', 'delete'>;
  'GET /reports/servicePrincipalSignInActivities': Operation<
    '/reports/servicePrincipalSignInActivities',
    'get'
  >;
  'POST /reports/servicePrincipalSignInActivities': Operation<
    '/reports/servicePrincipalSignInActivities',
    'post'
  >;
  'GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}': Operation<
    '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    'get'
  >;
  'PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}': Operation<
    '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    'patch'
  >;
  'DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}': Operation<
    '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
    'delete'
  >;
  'GET /reports/userCredentialUsageDetails': Operation<
    '/reports/userCredentialUsageDetails',
    'get'
  >;
  'POST /reports/userCredentialUsageDetails': Operation<
    '/reports/userCredentialUsageDetails',
    'post'
  >;
  'GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}': Operation<
    '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    'get'
  >;
  'PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}': Operation<
    '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    'patch'
  >;
  'DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}': Operation<
    '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
    'delete'
  >;
}

/**
 * `GET /reports`
 *
 */
export function list(
  params?: IEndpoints['GET /reports']['parameters']
): EndpointRequest<IEndpoints['GET /reports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports']['body']
): EndpointRequest<IEndpoints['PATCH /reports']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports',
    body,
  };
}

export const appCredentialSignInActivities = {
  /**
   * `GET /reports/appCredentialSignInActivities`
   *
   * Get a list of appCredentialSignInActivity objects that contains recent activity of application credentials.
   */
  list: function list(
    params?: IEndpoints['GET /reports/appCredentialSignInActivities']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/appCredentialSignInActivities']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/appCredentialSignInActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/appCredentialSignInActivities`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/appCredentialSignInActivities']['body']
  ): EndpointRequest<IEndpoints['POST /reports/appCredentialSignInActivities']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/appCredentialSignInActivities',
      body,
    };
  },
  /**
   * `GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}`
   *
   * Get an appCredentialSignInActivity object that contains recent activity of an application credential.
   */
  get: function get(
    params?: IEndpoints['GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['appCredentialSignInActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['body'],
    params?: IEndpoints['PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
      paramDefs: {
        path: ['appCredentialSignInActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/appCredentialSignInActivities/{appCredentialSignInActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['appCredentialSignInActivity-id'],
      },
      params,
    };
  },
};

export const applicationSignInDetailedSummary = {
  /**
   * `GET /reports/applicationSignInDetailedSummary`
   *
   * Retrieve the applicationSignInDetailedSummary objects.
   */
  get: function get(
    params?: IEndpoints['GET /reports/applicationSignInDetailedSummary']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/applicationSignInDetailedSummary']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/applicationSignInDetailedSummary',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/applicationSignInDetailedSummary`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/applicationSignInDetailedSummary']['body']
  ): EndpointRequest<IEndpoints['POST /reports/applicationSignInDetailedSummary']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/applicationSignInDetailedSummary',
      body,
    };
  },
  /**
   * `GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}`
   *
   * Retrieve the properties and relationships of an applicationSignInDetailedSummary object.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['applicationSignInDetailedSummary-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['body'],
    params?: IEndpoints['PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
      paramDefs: {
        path: ['applicationSignInDetailedSummary-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/applicationSignInDetailedSummary/{applicationSignInDetailedSummary-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['applicationSignInDetailedSummary-id'],
      },
      params,
    };
  },
};

export const credentialUserRegistrationDetails = {
  /**
   * `GET /reports/credentialUserRegistrationDetails`
   *
   * Get a list of credentialUserRegistrationDetails objects for a given tenant.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /reports/credentialUserRegistrationDetails']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/credentialUserRegistrationDetails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/credentialUserRegistrationDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/credentialUserRegistrationDetails`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /reports/credentialUserRegistrationDetails']['body']
  ): EndpointRequest<IEndpoints['POST /reports/credentialUserRegistrationDetails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/credentialUserRegistrationDetails',
      body,
    };
  },
  /**
   * `GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}`
   *
   * Details of the usage of self-service password reset and multifactor authentication (MFA) for all registered users.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['credentialUserRegistrationDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['body'],
    params?: IEndpoints['PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
      paramDefs: {
        path: ['credentialUserRegistrationDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/credentialUserRegistrationDetails/{credentialUserRegistrationDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['credentialUserRegistrationDetails-id'],
      },
      params,
    };
  },
};

export const dailyPrintUsage = {
  /**
   * `GET /reports/dailyPrintUsage`
   *
   */
  get: function get(
    params?: IEndpoints['GET /reports/dailyPrintUsage']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsage']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsage',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/dailyPrintUsage`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/dailyPrintUsage']['body']
  ): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsage']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/dailyPrintUsage',
      body,
    };
  },
  /**
   * `GET /reports/dailyPrintUsage/{printUsage-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/dailyPrintUsage/{printUsage-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsage/{printUsage-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsage/{printUsage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/dailyPrintUsage/{printUsage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/dailyPrintUsage/{printUsage-id}']['body'],
    params?: IEndpoints['PATCH /reports/dailyPrintUsage/{printUsage-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /reports/dailyPrintUsage/{printUsage-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/dailyPrintUsage/{printUsage-id}',
      paramDefs: {
        path: ['printUsage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/dailyPrintUsage/{printUsage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/dailyPrintUsage/{printUsage-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/dailyPrintUsage/{printUsage-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/dailyPrintUsage/{printUsage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsage-id'],
      },
      params,
    };
  },
};

export const dailyPrintUsageByPrinter = {
  /**
   * `GET /reports/dailyPrintUsageByPrinter`
   *
   * Retrieve a list of daily print usage summaries, grouped by printer.
   */
  get: function get(
    params?: IEndpoints['GET /reports/dailyPrintUsageByPrinter']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageByPrinter',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/dailyPrintUsageByPrinter`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/dailyPrintUsageByPrinter']['body']
  ): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/dailyPrintUsageByPrinter',
      body,
    };
  },
  /**
   * `GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   * Retrieve a printer&#x27;s usage summary for a particular time period. For descriptions of each of the endpoints, see printUsageByPrinter.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['body'],
    params?: IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        path: ['printUsageByPrinter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
};

export const dailyPrintUsageByUser = {
  /**
   * `GET /reports/dailyPrintUsageByUser`
   *
   * Retrieve a list of daily print usage summaries, grouped by user.
   */
  get: function get(
    params?: IEndpoints['GET /reports/dailyPrintUsageByUser']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageByUser']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageByUser',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/dailyPrintUsageByUser`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/dailyPrintUsageByUser']['body']
  ): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageByUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/dailyPrintUsageByUser',
      body,
    };
  },
  /**
   * `GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
   *
   * Retrieve a user&#x27;s usage summary for a particular time period. See the printUsageByUser documentation for descriptions of each of the endpoints.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['body'],
    params?: IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        path: ['printUsageByUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/dailyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
};

export const dailyPrintUsageSummariesByPrinter = {
  /**
   * `GET /reports/dailyPrintUsageSummariesByPrinter`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageSummariesByPrinter',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/dailyPrintUsageSummariesByPrinter`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /reports/dailyPrintUsageSummariesByPrinter']['body']
  ): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageSummariesByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/dailyPrintUsageSummariesByPrinter',
      body,
    };
  },
  /**
   * `GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
   *
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['body'],
    params?: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        path: ['printUsageByPrinter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
};

export const dailyPrintUsageSummariesByUser = {
  /**
   * `GET /reports/dailyPrintUsageSummariesByUser`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByUser']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/dailyPrintUsageSummariesByUser']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageSummariesByUser',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/dailyPrintUsageSummariesByUser`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /reports/dailyPrintUsageSummariesByUser']['body']
  ): EndpointRequest<IEndpoints['POST /reports/dailyPrintUsageSummariesByUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/dailyPrintUsageSummariesByUser',
      body,
    };
  },
  /**
   * `GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}`
   *
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['body'],
    params?: IEndpoints['PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
      paramDefs: {
        path: ['printUsageByUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
};

export const monthlyPrintUsageByPrinter = {
  /**
   * `GET /reports/monthlyPrintUsageByPrinter`
   *
   * Retrieve a list of monthly print usage summaries, grouped by printer.
   */
  get: function get(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByPrinter']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageByPrinter',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/monthlyPrintUsageByPrinter`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/monthlyPrintUsageByPrinter']['body']
  ): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/monthlyPrintUsageByPrinter',
      body,
    };
  },
  /**
   * `GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   * Retrieve a list of monthly print usage summaries, grouped by printer.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['body'],
    params?: IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        path: ['printUsageByPrinter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
};

export const monthlyPrintUsageByUser = {
  /**
   * `GET /reports/monthlyPrintUsageByUser`
   *
   * Retrieve a list of monthly print usage summaries, grouped by user.
   */
  get: function get(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByUser']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageByUser']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageByUser',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/monthlyPrintUsageByUser`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/monthlyPrintUsageByUser']['body']
  ): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageByUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/monthlyPrintUsageByUser',
      body,
    };
  },
  /**
   * `GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
   *
   * Retrieve a list of monthly print usage summaries, grouped by user.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['body'],
    params?: IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        path: ['printUsageByUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/monthlyPrintUsageByUser/{printUsageByUser-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
};

export const monthlyPrintUsageSummariesByPrinter = {
  /**
   * `GET /reports/monthlyPrintUsageSummariesByPrinter`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageSummariesByPrinter',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/monthlyPrintUsageSummariesByPrinter`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /reports/monthlyPrintUsageSummariesByPrinter']['body']
  ): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageSummariesByPrinter']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/monthlyPrintUsageSummariesByPrinter',
      body,
    };
  },
  /**
   * `GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
   *
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['body'],
    params?: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        path: ['printUsageByPrinter-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByPrinter-id'],
      },
      params,
    };
  },
};

export const monthlyPrintUsageSummariesByUser = {
  /**
   * `GET /reports/monthlyPrintUsageSummariesByUser`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageSummariesByUser',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/monthlyPrintUsageSummariesByUser`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /reports/monthlyPrintUsageSummariesByUser']['body']
  ): EndpointRequest<IEndpoints['POST /reports/monthlyPrintUsageSummariesByUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/monthlyPrintUsageSummariesByUser',
      body,
    };
  },
  /**
   * `GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}`
   *
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['body'],
    params?: IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
      paramDefs: {
        path: ['printUsageByUser-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['printUsageByUser-id'],
      },
      params,
    };
  },
};

export const security = {
  /**
   * `GET /reports/security`
   *
   * Provides the ability to launch a simulated phishing attack that organizations can learn from.
   */
  get: function get(
    params?: IEndpoints['GET /reports/security']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/security']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/security',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/security`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/security']['body']
  ): EndpointRequest<IEndpoints['PATCH /reports/security']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/security',
      body,
    };
  },
  /**
   * `DELETE /reports/security`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/security']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/security']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/security',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const serviceActivity = {
  /**
   * `GET /reports/serviceActivity`
   *
   * Reports that relate to tenant-level authentication activities in Microsoft Entra.
   */
  get: function get(
    params?: IEndpoints['GET /reports/serviceActivity']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/serviceActivity']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/serviceActivity',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/serviceActivity`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/serviceActivity']['body']
  ): EndpointRequest<IEndpoints['PATCH /reports/serviceActivity']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/serviceActivity',
      body,
    };
  },
  /**
   * `DELETE /reports/serviceActivity`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/serviceActivity']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /reports/serviceActivity']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/serviceActivity',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const servicePrincipalSignInActivities = {
  /**
   * `GET /reports/servicePrincipalSignInActivities`
   *
   * Get a list of servicePrincipalSignInActivity objects that contains sign-in activity information for service principals in a Microsoft Entra tenant. You can use a service principal as a client or resource. A service principal supports delegated or app-only authentication context.
   */
  list: function list(
    params?: IEndpoints['GET /reports/servicePrincipalSignInActivities']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/servicePrincipalSignInActivities']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/servicePrincipalSignInActivities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/servicePrincipalSignInActivities`
   *
   */
  create: function create(
    body: IEndpoints['POST /reports/servicePrincipalSignInActivities']['body']
  ): EndpointRequest<IEndpoints['POST /reports/servicePrincipalSignInActivities']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/servicePrincipalSignInActivities',
      body,
    };
  },
  /**
   * `GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}`
   *
   * Get a servicePrincipalSignInActivity object that contains sign-in activity information for a service principal in a Microsoft Entra tenant. You can use a service principal as a client or resource. A service principal supports delegated or app-only authentication context.
   */
  get: function get(
    params?: IEndpoints['GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['servicePrincipalSignInActivity-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['body'],
    params?: IEndpoints['PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
      paramDefs: {
        path: ['servicePrincipalSignInActivity-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/servicePrincipalSignInActivities/{servicePrincipalSignInActivity-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['servicePrincipalSignInActivity-id'],
      },
      params,
    };
  },
};

export const userCredentialUsageDetails = {
  /**
   * `GET /reports/userCredentialUsageDetails`
   *
   * Get a list of userCredentialUsageDetails objects for a given tenant. Details include user information, status of the reset, and the reason for failure.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /reports/userCredentialUsageDetails']['parameters']
  ): EndpointRequest<IEndpoints['GET /reports/userCredentialUsageDetails']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userCredentialUsageDetails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /reports/userCredentialUsageDetails`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /reports/userCredentialUsageDetails']['body']
  ): EndpointRequest<IEndpoints['POST /reports/userCredentialUsageDetails']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/reports/userCredentialUsageDetails',
      body,
    };
  },
  /**
   * `GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}`
   *
   * Represents the self-service password reset (SSPR) usage for a given tenant.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userCredentialUsageDetails-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['body'],
    params?: IEndpoints['PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
      paramDefs: {
        path: ['userCredentialUsageDetails-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userCredentialUsageDetails-id'],
      },
      params,
    };
  },
};
