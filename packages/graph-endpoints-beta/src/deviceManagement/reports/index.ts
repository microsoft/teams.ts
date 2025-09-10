import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reports': Operation<'/deviceManagement/reports', 'delete'>;
  'GET /deviceManagement/reports': Operation<'/deviceManagement/reports', 'get'>;
  'PATCH /deviceManagement/reports': Operation<'/deviceManagement/reports', 'patch'>;
  'GET /deviceManagement/reports/cachedReportConfigurations': Operation<
    '/deviceManagement/reports/cachedReportConfigurations',
    'get'
  >;
  'POST /deviceManagement/reports/cachedReportConfigurations': Operation<
    '/deviceManagement/reports/cachedReportConfigurations',
    'post'
  >;
  'GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}': Operation<
    '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}': Operation<
    '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    'patch'
  >;
  'DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}': Operation<
    '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/reports/exportJobs': Operation<
    '/deviceManagement/reports/exportJobs',
    'get'
  >;
  'POST /deviceManagement/reports/exportJobs': Operation<
    '/deviceManagement/reports/exportJobs',
    'post'
  >;
  'GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}': Operation<
    '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    'get'
  >;
  'PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}': Operation<
    '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    'patch'
  >;
  'DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}': Operation<
    '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
    'delete'
  >;
  'POST /deviceManagement/reports/getActiveMalwareReport': Operation<
    '/deviceManagement/reports/getActiveMalwareReport',
    'post'
  >;
  'POST /deviceManagement/reports/getActiveMalwareSummaryReport': Operation<
    '/deviceManagement/reports/getActiveMalwareSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getAllCertificatesReport': Operation<
    '/deviceManagement/reports/getAllCertificatesReport',
    'post'
  >;
  'POST /deviceManagement/reports/getAppStatusOverviewReport': Operation<
    '/deviceManagement/reports/getAppStatusOverviewReport',
    'post'
  >;
  'POST /deviceManagement/reports/getAppsInstallSummaryReport': Operation<
    '/deviceManagement/reports/getAppsInstallSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getCachedReport': Operation<
    '/deviceManagement/reports/getCachedReport',
    'post'
  >;
  'POST /deviceManagement/reports/getCertificatesReport': Operation<
    '/deviceManagement/reports/getCertificatesReport',
    'post'
  >;
  'POST /deviceManagement/reports/getCompliancePoliciesReportForDevice': Operation<
    '/deviceManagement/reports/getCompliancePoliciesReportForDevice',
    'post'
  >;
  'POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyDeviceSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getCompliancePolicyDevicesReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyDevicesReport',
    'post'
  >;
  'POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getComplianceSettingDetailsReport': Operation<
    '/deviceManagement/reports/getComplianceSettingDetailsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getComplianceSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getComplianceSettingNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getComplianceSettingsReport': Operation<
    '/deviceManagement/reports/getComplianceSettingsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport': Operation<
    '/deviceManagement/reports/getConfigManagerDevicePolicyStatusReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice': Operation<
    '/deviceManagement/reports/getConfigurationPoliciesReportForDevice',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationPolicyDevicesReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyDevicesReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport': Operation<
    '/deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationSettingDetailsReport': Operation<
    '/deviceManagement/reports/getConfigurationSettingDetailsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getConfigurationSettingNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getConfigurationSettingsReport': Operation<
    '/deviceManagement/reports/getConfigurationSettingsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport': Operation<
    '/deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary': Operation<
    '/deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles': Operation<
    '/deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport': Operation<
    '/deviceManagement/reports/getDeviceManagementIntentSettingsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceNonComplianceReport': Operation<
    '/deviceManagement/reports/getDeviceNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDevicePoliciesComplianceReport': Operation<
    '/deviceManagement/reports/getDevicePoliciesComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport': Operation<
    '/deviceManagement/reports/getDevicePolicySettingsComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport': Operation<
    '/deviceManagement/reports/getDeviceStatusByCompliacePolicyReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport': Operation<
    '/deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport': Operation<
    '/deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport': Operation<
    '/deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport': Operation<
    '/deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDevicesStatusBySettingReport': Operation<
    '/deviceManagement/reports/getDevicesStatusBySettingReport',
    'post'
  >;
  'POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport': Operation<
    '/deviceManagement/reports/getDevicesWithoutCompliancePolicyReport',
    'post'
  >;
  'POST /deviceManagement/reports/getEncryptionReportForDevices': Operation<
    '/deviceManagement/reports/getEncryptionReportForDevices',
    'post'
  >;
  'POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice': Operation<
    '/deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice',
    'post'
  >;
  'POST /deviceManagement/reports/getFailedMobileAppsReport': Operation<
    '/deviceManagement/reports/getFailedMobileAppsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getFailedMobileAppsSummaryReport': Operation<
    '/deviceManagement/reports/getFailedMobileAppsSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport': Operation<
    '/deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getHistoricalReport': Operation<
    '/deviceManagement/reports/getHistoricalReport',
    'post'
  >;
  'POST /deviceManagement/reports/getMalwareSummaryReport': Operation<
    '/deviceManagement/reports/getMalwareSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport': Operation<
    '/deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport',
    'post'
  >;
  'POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport': Operation<
    '/deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport': Operation<
    '/deviceManagement/reports/getNoncompliantDevicesAndSettingsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getPolicyNonComplianceMetadata': Operation<
    '/deviceManagement/reports/getPolicyNonComplianceMetadata',
    'post'
  >;
  'POST /deviceManagement/reports/getPolicyNonComplianceReport': Operation<
    '/deviceManagement/reports/getPolicyNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport': Operation<
    '/deviceManagement/reports/getPolicyNonComplianceSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport': Operation<
    '/deviceManagement/reports/getQuietTimePolicyUserSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getQuietTimePolicyUsersReport': Operation<
    '/deviceManagement/reports/getQuietTimePolicyUsersReport',
    'post'
  >;
  'POST /deviceManagement/reports/getRelatedAppsStatusReport': Operation<
    '/deviceManagement/reports/getRelatedAppsStatusReport',
    'post'
  >;
  'POST /deviceManagement/reports/getRemoteAssistanceSessionsReport': Operation<
    '/deviceManagement/reports/getRemoteAssistanceSessionsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getReportFilters': Operation<
    '/deviceManagement/reports/getReportFilters',
    'post'
  >;
  'POST /deviceManagement/reports/getSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getSettingNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport': Operation<
    '/deviceManagement/reports/getUnhealthyDefenderAgentsReport',
    'post'
  >;
  'POST /deviceManagement/reports/getUnhealthyFirewallReport': Operation<
    '/deviceManagement/reports/getUnhealthyFirewallReport',
    'post'
  >;
  'POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport': Operation<
    '/deviceManagement/reports/getUnhealthyFirewallSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getUserInstallStatusReport': Operation<
    '/deviceManagement/reports/getUserInstallStatusReport',
    'post'
  >;
  'POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport': Operation<
    '/deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport': Operation<
    '/deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport': Operation<
    '/deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport': Operation<
    '/deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport': Operation<
    '/deviceManagement/reports/getWindowsUpdateAlertSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport': Operation<
    '/deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport',
    'post'
  >;
  'POST /deviceManagement/reports/getZebraFotaDeploymentReport': Operation<
    '/deviceManagement/reports/getZebraFotaDeploymentReport',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses': Operation<
    '/deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus': Operation<
    '/deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveAppleOSUpdateFailures': Operation<
    '/deviceManagement/reports/retrieveAppleOSUpdateFailures',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport': Operation<
    '/deviceManagement/reports/retrieveCloudPkiLeafCertificateReport',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport': Operation<
    '/deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport': Operation<
    '/deviceManagement/reports/retrieveDeviceAppInstallationStatusReport',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveEnrollmentTimeGroupingFailureReport': Operation<
    '/deviceManagement/reports/retrieveEnrollmentTimeGroupingFailureReport',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveSecurityTaskAppsReport': Operation<
    '/deviceManagement/reports/retrieveSecurityTaskAppsReport',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport': Operation<
    '/deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/reports`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/reports']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/reports']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/reports',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/reports`
 *
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/reports']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/reports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/reports',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/reports']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/reports']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/reports',
    body,
  };
}

export const cachedReportConfigurations = {
  /**
   * `GET /deviceManagement/reports/cachedReportConfigurations`
   *
   * Entity representing the configuration of a cached report.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/reports/cachedReportConfigurations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/reports/cachedReportConfigurations`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/cachedReportConfigurations']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/cachedReportConfigurations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/cachedReportConfigurations',
      body,
    };
  },
  /**
   * `GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}`
   *
   * Entity representing the configuration of a cached report.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementCachedReportConfiguration-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
      paramDefs: {
        path: ['deviceManagementCachedReportConfiguration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/reports/cachedReportConfigurations/{deviceManagementCachedReportConfiguration-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementCachedReportConfiguration-id'],
      },
      params,
    };
  },
};

export const exportJobs = {
  /**
   * `GET /deviceManagement/reports/exportJobs`
   *
   * Entity representing a job to export a report.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/reports/exportJobs']['parameters']
  ): EndpointRequest<IEndpoints['GET /deviceManagement/reports/exportJobs']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/reports/exportJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/reports/exportJobs`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/exportJobs']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/reports/exportJobs']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/exportJobs',
      body,
    };
  },
  /**
   * `GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}`
   *
   * Entity representing a job to export a report.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementExportJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
      paramDefs: {
        path: ['deviceManagementExportJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/reports/exportJobs/{deviceManagementExportJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementExportJob-id'],
      },
      params,
    };
  },
};

export const getActiveMalwareReport = {
  /**
   * `POST /deviceManagement/reports/getActiveMalwareReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getActiveMalwareReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getActiveMalwareReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getActiveMalwareReport',
      body,
    };
  },
};

export const getActiveMalwareSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getActiveMalwareSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getActiveMalwareSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getActiveMalwareSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getActiveMalwareSummaryReport',
      body,
    };
  },
};

export const getAllCertificatesReport = {
  /**
   * `POST /deviceManagement/reports/getAllCertificatesReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getAllCertificatesReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getAllCertificatesReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getAllCertificatesReport',
      body,
    };
  },
};

export const getAppStatusOverviewReport = {
  /**
   * `POST /deviceManagement/reports/getAppStatusOverviewReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getAppStatusOverviewReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getAppStatusOverviewReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getAppStatusOverviewReport',
      body,
    };
  },
};

export const getAppsInstallSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getAppsInstallSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getAppsInstallSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getAppsInstallSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getAppsInstallSummaryReport',
      body,
    };
  },
};

export const getCachedReport = {
  /**
   * `POST /deviceManagement/reports/getCachedReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCachedReport']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getCachedReport']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getCachedReport',
      body,
    };
  },
};

export const getCertificatesReport = {
  /**
   * `POST /deviceManagement/reports/getCertificatesReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCertificatesReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getCertificatesReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getCertificatesReport',
      body,
    };
  },
};

export const getCompliancePoliciesReportForDevice = {
  /**
   * `POST /deviceManagement/reports/getCompliancePoliciesReportForDevice`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCompliancePoliciesReportForDevice']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getCompliancePoliciesReportForDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getCompliancePoliciesReportForDevice',
      body,
    };
  },
};

export const getCompliancePolicyDeviceSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDeviceSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getCompliancePolicyDeviceSummaryReport',
      body,
    };
  },
};

export const getCompliancePolicyDevicesReport = {
  /**
   * `POST /deviceManagement/reports/getCompliancePolicyDevicesReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDevicesReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getCompliancePolicyDevicesReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getCompliancePolicyDevicesReport',
      body,
    };
  },
};

export const getCompliancePolicyNonComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getCompliancePolicyNonComplianceReport',
      body,
    };
  },
};

export const getCompliancePolicyNonComplianceSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport',
      body,
    };
  },
};

export const getComplianceSettingDetailsReport = {
  /**
   * `POST /deviceManagement/reports/getComplianceSettingDetailsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getComplianceSettingDetailsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getComplianceSettingDetailsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getComplianceSettingDetailsReport',
      body,
    };
  },
};

export const getComplianceSettingNonComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getComplianceSettingNonComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getComplianceSettingNonComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getComplianceSettingNonComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getComplianceSettingNonComplianceReport',
      body,
    };
  },
};

export const getComplianceSettingsReport = {
  /**
   * `POST /deviceManagement/reports/getComplianceSettingsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getComplianceSettingsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getComplianceSettingsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getComplianceSettingsReport',
      body,
    };
  },
};

export const getConfigManagerDevicePolicyStatusReport = {
  /**
   * `POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigManagerDevicePolicyStatusReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigManagerDevicePolicyStatusReport',
      body,
    };
  },
};

export const getConfigurationPoliciesReportForDevice = {
  /**
   * `POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationPoliciesReportForDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationPoliciesReportForDevice',
      body,
    };
  },
};

export const getConfigurationPolicyDeviceSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationPolicyDeviceSummaryReport',
      body,
    };
  },
};

export const getConfigurationPolicyDevicesReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationPolicyDevicesReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDevicesReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyDevicesReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationPolicyDevicesReport',
      body,
    };
  },
};

export const getConfigurationPolicyNonComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationPolicyNonComplianceReport',
      body,
    };
  },
};

export const getConfigurationPolicyNonComplianceSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport',
      body,
    };
  },
};

export const getConfigurationPolicySettingsDeviceSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationPolicySettingsDeviceSummaryReport',
      body,
    };
  },
};

export const getConfigurationSettingDetailsReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationSettingDetailsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingDetailsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationSettingDetailsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationSettingDetailsReport',
      body,
    };
  },
};

export const getConfigurationSettingNonComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationSettingNonComplianceReport',
      body,
    };
  },
};

export const getConfigurationSettingsReport = {
  /**
   * `POST /deviceManagement/reports/getConfigurationSettingsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getConfigurationSettingsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getConfigurationSettingsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationSettingsReport',
      body,
    };
  },
};

export const getDeviceConfigurationPolicySettingsSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceConfigurationPolicySettingsSummaryReport',
      body,
    };
  },
};

export const getDeviceConfigurationPolicyStatusSummary = {
  /**
   * `POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceConfigurationPolicyStatusSummary',
      body,
    };
  },
};

export const getDeviceManagementIntentPerSettingContributingProfiles = {
  /**
   * `POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles',
      body,
    };
  },
};

export const getDeviceManagementIntentSettingsReport = {
  /**
   * `POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceManagementIntentSettingsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceManagementIntentSettingsReport',
      body,
    };
  },
};

export const getDeviceNonComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getDeviceNonComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceNonComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceNonComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceNonComplianceReport',
      body,
    };
  },
};

export const getDevicePoliciesComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getDevicePoliciesComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDevicePoliciesComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDevicePoliciesComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDevicePoliciesComplianceReport',
      body,
    };
  },
};

export const getDevicePolicySettingsComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDevicePolicySettingsComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDevicePolicySettingsComplianceReport',
      body,
    };
  },
};

export const getDeviceStatusByCompliacePolicyReport = {
  /**
   * `POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliacePolicyReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceStatusByCompliacePolicyReport',
      body,
    };
  },
};

export const getDeviceStatusByCompliancePolicySettingReport = {
  /**
   * `POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceStatusByCompliancePolicySettingReport',
      body,
    };
  },
};

export const getDeviceStatusSummaryByCompliacePolicyReport = {
  /**
   * `POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceStatusSummaryByCompliacePolicyReport',
      body,
    };
  },
};

export const getDeviceStatusSummaryByCompliancePolicySettingsReport = {
  /**
   * `POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDeviceStatusSummaryByCompliancePolicySettingsReport',
      body,
    };
  },
};

export const getDevicesStatusByPolicyPlatformComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDevicesStatusByPolicyPlatformComplianceReport',
      body,
    };
  },
};

export const getDevicesStatusBySettingReport = {
  /**
   * `POST /deviceManagement/reports/getDevicesStatusBySettingReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDevicesStatusBySettingReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDevicesStatusBySettingReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDevicesStatusBySettingReport',
      body,
    };
  },
};

export const getDevicesWithoutCompliancePolicyReport = {
  /**
   * `POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getDevicesWithoutCompliancePolicyReport',
      body,
    };
  },
};

export const getEncryptionReportForDevices = {
  /**
   * `POST /deviceManagement/reports/getEncryptionReportForDevices`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getEncryptionReportForDevices']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getEncryptionReportForDevices']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getEncryptionReportForDevices',
      body,
    };
  },
};

export const getEnrollmentConfigurationPoliciesByDevice = {
  /**
   * `POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getEnrollmentConfigurationPoliciesByDevice',
      body,
    };
  },
};

export const getFailedMobileAppsReport = {
  /**
   * `POST /deviceManagement/reports/getFailedMobileAppsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getFailedMobileAppsReport',
      body,
    };
  },
};

export const getFailedMobileAppsSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getFailedMobileAppsSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getFailedMobileAppsSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getFailedMobileAppsSummaryReport',
      body,
    };
  },
};

export const getGroupPolicySettingsDeviceSettingsReport = {
  /**
   * `POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getGroupPolicySettingsDeviceSettingsReport',
      body,
    };
  },
};

export const getHistoricalReport = {
  /**
   * `POST /deviceManagement/reports/getHistoricalReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getHistoricalReport']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getHistoricalReport']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getHistoricalReport',
      body,
    };
  },
};

export const getMalwareSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getMalwareSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getMalwareSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getMalwareSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getMalwareSummaryReport',
      body,
    };
  },
};

export const getMobileApplicationManagementAppConfigurationReport = {
  /**
   * `POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getMobileApplicationManagementAppConfigurationReport',
      body,
    };
  },
};

export const getMobileApplicationManagementAppRegistrationSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getMobileApplicationManagementAppRegistrationSummaryReport',
      body,
    };
  },
};

export const getNoncompliantDevicesAndSettingsReport = {
  /**
   * `POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getNoncompliantDevicesAndSettingsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getNoncompliantDevicesAndSettingsReport',
      body,
    };
  },
};

export const getPolicyNonComplianceMetadata = {
  /**
   * `POST /deviceManagement/reports/getPolicyNonComplianceMetadata`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceMetadata']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceMetadata']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getPolicyNonComplianceMetadata',
      body,
    };
  },
};

export const getPolicyNonComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getPolicyNonComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getPolicyNonComplianceReport',
      body,
    };
  },
};

export const getPolicyNonComplianceSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getPolicyNonComplianceSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getPolicyNonComplianceSummaryReport',
      body,
    };
  },
};

export const getQuietTimePolicyUserSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUserSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getQuietTimePolicyUserSummaryReport',
      body,
    };
  },
};

export const getQuietTimePolicyUsersReport = {
  /**
   * `POST /deviceManagement/reports/getQuietTimePolicyUsersReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUsersReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getQuietTimePolicyUsersReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getQuietTimePolicyUsersReport',
      body,
    };
  },
};

export const getRelatedAppsStatusReport = {
  /**
   * `POST /deviceManagement/reports/getRelatedAppsStatusReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getRelatedAppsStatusReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getRelatedAppsStatusReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getRelatedAppsStatusReport',
      body,
    };
  },
};

export const getRemoteAssistanceSessionsReport = {
  /**
   * `POST /deviceManagement/reports/getRemoteAssistanceSessionsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getRemoteAssistanceSessionsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getRemoteAssistanceSessionsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getRemoteAssistanceSessionsReport',
      body,
    };
  },
};

export const getReportFilters = {
  /**
   * `POST /deviceManagement/reports/getReportFilters`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getReportFilters']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getReportFilters']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getReportFilters',
      body,
    };
  },
};

export const getSettingNonComplianceReport = {
  /**
   * `POST /deviceManagement/reports/getSettingNonComplianceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getSettingNonComplianceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getSettingNonComplianceReport',
      body,
    };
  },
};

export const getUnhealthyDefenderAgentsReport = {
  /**
   * `POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getUnhealthyDefenderAgentsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getUnhealthyDefenderAgentsReport',
      body,
    };
  },
};

export const getUnhealthyFirewallReport = {
  /**
   * `POST /deviceManagement/reports/getUnhealthyFirewallReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getUnhealthyFirewallReport',
      body,
    };
  },
};

export const getUnhealthyFirewallSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getUnhealthyFirewallSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getUnhealthyFirewallSummaryReport',
      body,
    };
  },
};

export const getUserInstallStatusReport = {
  /**
   * `POST /deviceManagement/reports/getUserInstallStatusReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getUserInstallStatusReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getUserInstallStatusReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getUserInstallStatusReport',
      body,
    };
  },
};

export const getWindowsDriverUpdateAlertSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getWindowsDriverUpdateAlertSummaryReport',
      body,
    };
  },
};

export const getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport = {
  /**
   * `POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getWindowsDriverUpdateAlertsPerPolicyPerDeviceReport',
      body,
    };
  },
};

export const getWindowsQualityUpdateAlertSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getWindowsQualityUpdateAlertSummaryReport',
      body,
    };
  },
};

export const getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport = {
  /**
   * `POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getWindowsQualityUpdateAlertsPerPolicyPerDeviceReport',
      body,
    };
  },
};

export const getWindowsUpdateAlertSummaryReport = {
  /**
   * `POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getWindowsUpdateAlertSummaryReport',
      body,
    };
  },
};

export const getWindowsUpdateAlertsPerPolicyPerDeviceReport = {
  /**
   * `POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getWindowsUpdateAlertsPerPolicyPerDeviceReport',
      body,
    };
  },
};

export const getZebraFotaDeploymentReport = {
  /**
   * `POST /deviceManagement/reports/getZebraFotaDeploymentReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getZebraFotaDeploymentReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/getZebraFotaDeploymentReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/getZebraFotaDeploymentReport',
      body,
    };
  },
};

export const retrieveAndroidWorkProfileDeviceMigrationStatuses = {
  /**
   * `POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveAndroidWorkProfileDeviceMigrationStatuses',
      body,
    };
  },
};

export const retrieveAppleDeviceOSUpdateStatus = {
  /**
   * `POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveAppleDeviceOSUpdateStatus',
      body,
    };
  },
};

export const retrieveAppleOSUpdateFailures = {
  /**
   * `POST /deviceManagement/reports/retrieveAppleOSUpdateFailures`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveAppleOSUpdateFailures']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveAppleOSUpdateFailures']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveAppleOSUpdateFailures',
      body,
    };
  },
};

export const retrieveCloudPkiLeafCertificateReport = {
  /**
   * `POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveCloudPkiLeafCertificateReport',
      body,
    };
  },
};

export const retrieveCloudPkiLeafCertificateSummaryReport = {
  /**
   * `POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport',
      body,
    };
  },
};

export const retrieveDeviceAppInstallationStatusReport = {
  /**
   * `POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveDeviceAppInstallationStatusReport',
      body,
    };
  },
};

export const retrieveEnrollmentTimeGroupingFailureReport = {
  /**
   * `POST /deviceManagement/reports/retrieveEnrollmentTimeGroupingFailureReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveEnrollmentTimeGroupingFailureReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveEnrollmentTimeGroupingFailureReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveEnrollmentTimeGroupingFailureReport',
      body,
    };
  },
};

export const retrieveSecurityTaskAppsReport = {
  /**
   * `POST /deviceManagement/reports/retrieveSecurityTaskAppsReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveSecurityTaskAppsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveSecurityTaskAppsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveSecurityTaskAppsReport',
      body,
    };
  },
};

export const retrieveWin32CatalogAppsUpdateReport = {
  /**
   * `POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/reports/retrieveWin32CatalogAppsUpdateReport',
      body,
    };
  },
};
