export * as androidManagedAppProtections from './androidManagedAppProtections';
export * as defaultManagedAppProtections from './defaultManagedAppProtections';
export * as deviceAppManagementTasks from './deviceAppManagementTasks';
export * as iosLobAppProvisioningConfigurations from './iosLobAppProvisioningConfigurations';
export * as iosManagedAppProtections from './iosManagedAppProtections';
export * as managedAppPolicies from './managedAppPolicies';
export * as managedAppRegistrations from './managedAppRegistrations';
export * as managedEBooks from './managedEBooks';
export * as mdmWindowsInformationProtectionPolicies from './mdmWindowsInformationProtectionPolicies';
export * as mobileAppConfigurations from './mobileAppConfigurations';
export * as mobileApps from './mobileApps';
export * as policySets from './policySets';
export * as targetedManagedAppConfigurations from './targetedManagedAppConfigurations';
export * as vppTokens from './vppTokens';
export * as wdacSupplementalPolicies from './wdacSupplementalPolicies';
export * as windowsInformationProtectionDeviceRegistrations from './windowsInformationProtectionDeviceRegistrations';
export * as windowsInformationProtectionPolicies from './windowsInformationProtectionPolicies';
export * as windowsManagedAppProtections from './windowsManagedAppProtections';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement': Operation<'/deviceAppManagement', 'get'>;
  'PATCH /deviceAppManagement': Operation<'/deviceAppManagement', 'patch'>;
  'GET /deviceAppManagement/enterpriseCodeSigningCertificates': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates',
    'get'
  >;
  'POST /deviceAppManagement/enterpriseCodeSigningCertificates': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates',
    'post'
  >;
  'GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}': Operation<
    '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
    'delete'
  >;
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
  'GET /deviceAppManagement/managedEBookCategories': Operation<
    '/deviceAppManagement/managedEBookCategories',
    'get'
  >;
  'POST /deviceAppManagement/managedEBookCategories': Operation<
    '/deviceAppManagement/managedEBookCategories',
    'post'
  >;
  'GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}': Operation<
    '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}': Operation<
    '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}': Operation<
    '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppCatalogPackages': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages',
    'get'
  >;
  'POST /deviceAppManagement/mobileAppCatalogPackages': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages',
    'post'
  >;
  'GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}': Operation<
    '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
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
  'GET /deviceAppManagement/symantecCodeSigningCertificate': Operation<
    '/deviceAppManagement/symantecCodeSigningCertificate',
    'get'
  >;
  'PATCH /deviceAppManagement/symantecCodeSigningCertificate': Operation<
    '/deviceAppManagement/symantecCodeSigningCertificate',
    'patch'
  >;
  'DELETE /deviceAppManagement/symantecCodeSigningCertificate': Operation<
    '/deviceAppManagement/symantecCodeSigningCertificate',
    'delete'
  >;
  'POST /deviceAppManagement/syncMicrosoftStoreForBusinessApps': Operation<
    '/deviceAppManagement/syncMicrosoftStoreForBusinessApps',
    'post'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionWipeActions': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions',
    'get'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionWipeActions': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions',
    'post'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsManagementApp': Operation<
    '/deviceAppManagement/windowsManagementApp',
    'get'
  >;
}

/**
 * `GET /deviceAppManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement']['response']> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement']['body']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement',
    body,
  };
}

export const enterpriseCodeSigningCertificates = {
  /**
   * `GET /deviceAppManagement/enterpriseCodeSigningCertificates`
   *
   * The Windows Enterprise Code Signing Certificate.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/enterpriseCodeSigningCertificates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/enterpriseCodeSigningCertificates`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/enterpriseCodeSigningCertificates']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/enterpriseCodeSigningCertificates']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/enterpriseCodeSigningCertificates',
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}`
   *
   * The Windows Enterprise Code Signing Certificate.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['enterpriseCodeSigningCertificate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
      paramDefs: {
        path: ['enterpriseCodeSigningCertificate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['enterpriseCodeSigningCertificate-id'],
      },
      params,
    };
  },
};

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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const managedEBookCategories = {
  /**
   * `GET /deviceAppManagement/managedEBookCategories`
   *
   * The mobile eBook categories.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/managedEBookCategories']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedEBookCategories']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/managedEBookCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/managedEBookCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/managedEBookCategories']['body']
  ): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedEBookCategories']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/managedEBookCategories',
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}`
   *
   * The mobile eBook categories.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedEBookCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
      paramDefs: {
        path: ['managedEBookCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/managedEBookCategories/{managedEBookCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['managedEBookCategory-id'],
      },
      params,
    };
  },
};

export const mobileAppCatalogPackages = {
  /**
   * `GET /deviceAppManagement/mobileAppCatalogPackages`
   *
   * MobileAppCatalogPackage entities.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileAppCatalogPackages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/mobileAppCatalogPackages`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/mobileAppCatalogPackages']['body']
  ): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppCatalogPackages']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/mobileAppCatalogPackages',
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}`
   *
   * MobileAppCatalogPackage entities.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['mobileAppCatalogPackage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
      paramDefs: {
        path: ['mobileAppCatalogPackage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/mobileAppCatalogPackages/{mobileAppCatalogPackage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['mobileAppCatalogPackage-id'],
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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
      ver: 'beta',
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

export const symantecCodeSigningCertificate = {
  /**
   * `GET /deviceAppManagement/symantecCodeSigningCertificate`
   *
   * The WinPhone Symantec Code Signing Certificate.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/symantecCodeSigningCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/symantecCodeSigningCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/symantecCodeSigningCertificate',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/symantecCodeSigningCertificate`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/symantecCodeSigningCertificate']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/symantecCodeSigningCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/symantecCodeSigningCertificate',
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/symantecCodeSigningCertificate`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/symantecCodeSigningCertificate']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/symantecCodeSigningCertificate']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/symantecCodeSigningCertificate',
      paramDefs: {
        header: ['If-Match'],
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
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/syncMicrosoftStoreForBusinessApps',
    };
  },
};

export const windowsInformationProtectionWipeActions = {
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionWipeActions`
   *
   * Windows information protection wipe actions.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionWipeActions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/windowsInformationProtectionWipeActions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionWipeActions']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsInformationProtectionWipeActions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/windowsInformationProtectionWipeActions',
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}`
   *
   * Windows information protection wipe actions.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsInformationProtectionWipeAction-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
      paramDefs: {
        path: ['windowsInformationProtectionWipeAction-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/windowsInformationProtectionWipeActions/{windowsInformationProtectionWipeAction-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsInformationProtectionWipeAction-id'],
      },
      params,
    };
  },
};

export const windowsManagementApp = {
  /**
   * `GET /deviceAppManagement/windowsManagementApp`
   *
   * Windows management app.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsManagementApp']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceAppManagement/windowsManagementApp']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/windowsManagementApp',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
};
