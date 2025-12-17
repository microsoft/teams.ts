export * as bulkActions from './bulkActions';
export * as cloudApps from './cloudApps';
export * as cloudPCs from './cloudPCs';
export * as deviceImages from './deviceImages';
export * as onPremisesConnections from './onPremisesConnections';
export * as provisioningPolicies from './provisioningPolicies';
export * as reports from './reports';
export * as snapshots from './snapshots';
export * as userSettings from './userSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint': Operation<
    '/deviceManagement/virtualEndpoint',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint': Operation<'/deviceManagement/virtualEndpoint', 'get'>;
  'PATCH /deviceManagement/virtualEndpoint': Operation<
    '/deviceManagement/virtualEndpoint',
    'patch'
  >;
  'GET /deviceManagement/virtualEndpoint/auditEvents': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/auditEvents': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}': Operation<
    '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping': Operation<
    '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping': Operation<
    '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping': Operation<
    '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/externalPartnerSettings': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/externalPartnerSettings': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/externalPartners': Operation<
    '/deviceManagement/virtualEndpoint/externalPartners',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/externalPartners': Operation<
    '/deviceManagement/virtualEndpoint/externalPartners',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}': Operation<
    '/deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/frontLineServicePlans': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/frontLineServicePlans': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/galleryImages': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/galleryImages': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}': Operation<
    '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/managedLicenses': Operation<
    '/deviceManagement/virtualEndpoint/managedLicenses',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/managedLicenses': Operation<
    '/deviceManagement/virtualEndpoint/managedLicenses',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}': Operation<
    '/deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}': Operation<
    '/deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}': Operation<
    '/deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/organizationSettings': Operation<
    '/deviceManagement/virtualEndpoint/organizationSettings',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/organizationSettings': Operation<
    '/deviceManagement/virtualEndpoint/organizationSettings',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/organizationSettings': Operation<
    '/deviceManagement/virtualEndpoint/organizationSettings',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/servicePlans': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/servicePlans': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}': Operation<
    '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/supportedRegions': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/supportedRegions': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}': Operation<
    '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/virtualEndpoint']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/virtualEndpoint']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint',
    body,
  };
}

export const auditEvents = {
  /**
   * `GET /deviceManagement/virtualEndpoint/auditEvents`
   *
   * List all the cloudPcAuditEvent objects for the tenant.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/auditEvents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/auditEvents`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/auditEvents']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/virtualEndpoint/auditEvents']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/auditEvents',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
   *
   * Read the properties and relationships of a cloudPcAuditEvent object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcAuditEvent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
      paramDefs: {
        path: ['cloudPcAuditEvent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/auditEvents/{cloudPcAuditEvent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcAuditEvent-id'],
      },
      params,
    };
  },
};

export const crossCloudGovernmentOrganizationMapping = {
  /**
   * `GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping`
   *
   * Read the properties and relationships of a cloudPcCrossCloudGovernmentOrganizationMapping object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/crossCloudGovernmentOrganizationMapping',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const externalPartnerSettings = {
  /**
   * `GET /deviceManagement/virtualEndpoint/externalPartnerSettings`
   *
   * Get a list of the cloudPcExternalPartnerSetting objects and their properties.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/externalPartnerSettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/externalPartnerSettings`
   *
   * Create a new cloudPcExternalPartnerSetting object.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/externalPartnerSettings']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/externalPartnerSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/externalPartnerSettings',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}`
   *
   * Read the properties and relationships of a cloudPcExternalPartnerSetting object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcExternalPartnerSetting-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}`
   *
   * Update the properties of a cloudPcExternalPartnerSetting object.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
      paramDefs: {
        path: ['cloudPcExternalPartnerSetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcExternalPartnerSetting-id'],
      },
      params,
    };
  },
};

export const externalPartners = {
  /**
   * `GET /deviceManagement/virtualEndpoint/externalPartners`
   *
   * Get a list of the cloudPcExternalPartner objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartners']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartners']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/externalPartners',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/externalPartners`
   *
   * Create a new cloudPcExternalPartner object.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/externalPartners']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/externalPartners']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/externalPartners',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}`
   *
   * Read the properties and relationships of a cloudPcExternalPartner object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcExternalPartner-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}`
   *
   * Update the properties of a cloudPcExternalPartner object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}',
      paramDefs: {
        path: ['cloudPcExternalPartner-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/externalPartners/{cloudPcExternalPartner-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcExternalPartner-id'],
      },
      params,
    };
  },
};

export const frontLineServicePlans = {
  /**
   * `GET /deviceManagement/virtualEndpoint/frontLineServicePlans`
   *
   * Get a list of the cloudPcFrontLineServicePlan objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/frontLineServicePlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/frontLineServicePlans`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/frontLineServicePlans']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/frontLineServicePlans']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/frontLineServicePlans',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}`
   *
   * Get the properties and relationships of a cloudPcFrontLineServicePlan object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcFrontLineServicePlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
      paramDefs: {
        path: ['cloudPcFrontLineServicePlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/frontLineServicePlans/{cloudPcFrontLineServicePlan-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcFrontLineServicePlan-id'],
      },
      params,
    };
  },
};

export const galleryImages = {
  /**
   * `GET /deviceManagement/virtualEndpoint/galleryImages`
   *
   * List the properties and relationships of the cloudPcGalleryImage objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/galleryImages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/galleryImages`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/galleryImages']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/galleryImages']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/galleryImages',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
   *
   * Read the properties and relationships of a specific cloudPcGalleryImage object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcGalleryImage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
      paramDefs: {
        path: ['cloudPcGalleryImage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/galleryImages/{cloudPcGalleryImage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcGalleryImage-id'],
      },
      params,
    };
  },
};

export const managedLicenses = {
  /**
   * `GET /deviceManagement/virtualEndpoint/managedLicenses`
   *
   * Get information about cloudPcManagedLicense objects that the Cloud PC service manages directly.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/managedLicenses']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/managedLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/managedLicenses',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/managedLicenses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/managedLicenses']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/managedLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/managedLicenses',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}`
   *
   * The managed licenses for Cloud PCs in the organization.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcManagedLicense-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}',
      paramDefs: {
        path: ['cloudPcManagedLicense-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/managedLicenses/{cloudPcManagedLicense-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcManagedLicense-id'],
      },
      params,
    };
  },
};

export const organizationSettings = {
  /**
   * `GET /deviceManagement/virtualEndpoint/organizationSettings`
   *
   * Read the properties and relationships of the cloudPcOrganizationSettings from the current tenant. A tenant has only one cloudPcOrganizationSettings object.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/organizationSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/organizationSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/organizationSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/organizationSettings`
   *
   * Update the properties of the cloudPcOrganizationSettings object in a tenant.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/organizationSettings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/organizationSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/organizationSettings',
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/organizationSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/organizationSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/organizationSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/organizationSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const servicePlans = {
  /**
   * `GET /deviceManagement/virtualEndpoint/servicePlans`
   *
   * List the currently available service plans that an organization can purchase for their Cloud PCs. For examples of currently available service plans, see Windows 365 compare plans and pricing. Currently, Microsoft Graph API is available for Windows 365 Enterprise.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/servicePlans',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/servicePlans`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/servicePlans']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/servicePlans']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/servicePlans',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}`
   *
   * Cloud PC service plans.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcServicePlan-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
      paramDefs: {
        path: ['cloudPcServicePlan-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/servicePlans/{cloudPcServicePlan-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcServicePlan-id'],
      },
      params,
    };
  },
};

export const supportedRegions = {
  /**
   * `GET /deviceManagement/virtualEndpoint/supportedRegions`
   *
   * List the supported regions that are available for creating Cloud PC connections.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/supportedRegions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/supportedRegions`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/supportedRegions']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/supportedRegions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/supportedRegions',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}`
   *
   * Cloud PC supported regions.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcSupportedRegion-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
      paramDefs: {
        path: ['cloudPcSupportedRegion-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/supportedRegions/{cloudPcSupportedRegion-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcSupportedRegion-id'],
      },
      params,
    };
  },
};
