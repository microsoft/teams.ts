export * as androidManagedAppProtections from './androidManagedAppProtections';
export * as defaultManagedAppProtections from './defaultManagedAppProtections';
export * as iosManagedAppProtections from './iosManagedAppProtections';
export * as managedAppPolicies from './managedAppPolicies';
export * as managedAppRegistrations from './managedAppRegistrations';
export * as managedEBooks from './managedEBooks';
export * as mdmWindowsInformationProtectionPolicies from './mdmWindowsInformationProtectionPolicies';
export * as mobileAppConfigurations from './mobileAppConfigurations';
export * as mobileApps from './mobileApps';
export * as targetedManagedAppConfigurations from './targetedManagedAppConfigurations';
export * as vppTokens from './vppTokens';
export * as windowsInformationProtectionPolicies from './windowsInformationProtectionPolicies';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement': Operation<'/deviceAppManagement', 'get'>;
  'PATCH /deviceAppManagement': Operation<'/deviceAppManagement', 'patch'>;
  'GET /deviceAppManagement/managedAppStatuses': Operation<
    '/deviceAppManagement/managedAppStatuses',
    'get'
  >;
  'POST /deviceAppManagement/managedAppStatuses': Operation<
    '/deviceAppManagement/managedAppStatuses',
    'post'
  >;
  'GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}': Operation<
    '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}': Operation<
    '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}': Operation<
    '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppCategories': Operation<
    '/deviceAppManagement/mobileAppCategories',
    'get'
  >;
  'POST /deviceAppManagement/mobileAppCategories': Operation<
    '/deviceAppManagement/mobileAppCategories',
    'post'
  >;
  'GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}': Operation<
    '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppRelationships': Operation<
    '/deviceAppManagement/mobileAppRelationships',
    'get'
  >;
  'POST /deviceAppManagement/mobileAppRelationships': Operation<
    '/deviceAppManagement/mobileAppRelationships',
    'post'
  >;
  'GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}': Operation<
    '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
    'delete'
  >;
  'POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps': Operation<
    '/deviceAppManagement/syncMicrosoftStoreForBusinessApps',
    'post'
  >;
}

/**
 * `GET /deviceAppManagement`
 *
 * Read properties and relationships of the deviceAppManagement object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement`
 *
 * Update the properties of a deviceAppManagement object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement']['body']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement']['response']> {
  return {
    method: 'patch',
    path: '/deviceAppManagement',
    body,
  };
}

export const managedAppStatuses = {
  /**
   * `GET /deviceAppManagement/managedAppStatuses`
   *
   * The managed app statuses.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/managedAppStatuses']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedAppStatuses']['response']> {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedAppStatuses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/managedAppStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedAppStatuses']['body']
  ): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedAppStatuses']['response']> {
    return {
      method: 'post',
      path: '/deviceAppManagement/managedAppStatuses',
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}`
   *
   * The managed app statuses.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedAppStatus-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
      paramDefs: {
        path: ['managedAppStatus-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/managedAppStatuses/{managedAppStatus-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/managedAppStatuses/{managedAppStatus-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedAppStatus-id'],
      },
      params,
    };
  },
};

export const mobileAppCategories = {
  /**
   * `GET /deviceAppManagement/mobileAppCategories`
   *
   * The mobile app categories.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppCategories']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppCategories']['response']> {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileAppCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileAppCategories']['body']
  ): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppCategories']['response']> {
    return {
      method: 'post',
      path: '/deviceAppManagement/mobileAppCategories',
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}`
   *
   * The mobile app categories.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileAppCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
      paramDefs: {
        path: ['mobileAppCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/mobileAppCategories/{mobileAppCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mobileAppCategory-id'],
      },
      params,
    };
  },
};

export const mobileAppRelationships = {
  /**
   * `GET /deviceAppManagement/mobileAppRelationships`
   *
   * The mobile app relationship represents the dependency or supersedence relationship between two Intune mobile LOB applications.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppRelationships']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppRelationships']['response']> {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppRelationships',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileAppRelationships`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileAppRelationships']['body']
  ): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppRelationships']['response']> {
    return {
      method: 'post',
      path: '/deviceAppManagement/mobileAppRelationships',
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}`
   *
   * The mobile app relationship represents the dependency or supersedence relationship between two Intune mobile LOB applications.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileAppRelationship-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
      paramDefs: {
        path: ['mobileAppRelationship-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/mobileAppRelationships/{mobileAppRelationship-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mobileAppRelationship-id'],
      },
      params,
    };
  },
};

export const syncMicrosoftStoreForBusinessApps = {
  /**
   * `POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps`
   *
   * Syncs Intune account with Microsoft Store For Business
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/syncMicrosoftStoreForBusinessApps',
    };
  },
};
