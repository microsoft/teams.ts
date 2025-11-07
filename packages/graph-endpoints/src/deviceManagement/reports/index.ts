import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/reports': Operation<'/deviceManagement/reports', 'delete'>;
  'GET /deviceManagement/reports': Operation<'/deviceManagement/reports', 'get'>;
  'PATCH /deviceManagement/reports': Operation<'/deviceManagement/reports', 'patch'>;
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
  'POST /deviceManagement/reports/getCachedReport': Operation<
    '/deviceManagement/reports/getCachedReport',
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
  'POST /deviceManagement/reports/getComplianceSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getComplianceSettingNonComplianceReport',
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
  'POST /deviceManagement/reports/getConfigurationSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getConfigurationSettingNonComplianceReport',
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
  'POST /deviceManagement/reports/getDevicesWithoutCompliancePolicyReport': Operation<
    '/deviceManagement/reports/getDevicesWithoutCompliancePolicyReport',
    'post'
  >;
  'POST /deviceManagement/reports/getHistoricalReport': Operation<
    '/deviceManagement/reports/getHistoricalReport',
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
  'POST /deviceManagement/reports/getReportFilters': Operation<
    '/deviceManagement/reports/getReportFilters',
    'post'
  >;
  'POST /deviceManagement/reports/getSettingNonComplianceReport': Operation<
    '/deviceManagement/reports/getSettingNonComplianceReport',
    'post'
  >;
  'POST /deviceManagement/reports/retrieveDeviceAppInstallationStatusReport': Operation<
    '/deviceManagement/reports/retrieveDeviceAppInstallationStatusReport',
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
    method: 'patch',
    path: '/deviceManagement/reports',
    body,
  };
}

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

export const getCachedReport = {
  /**
   * `POST /deviceManagement/reports/getCachedReport`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/reports/getCachedReport']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getCachedReport']['response']> {
    return {
      method: 'post',
      path: '/deviceManagement/reports/getCachedReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getCompliancePolicyNonComplianceSummaryReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getComplianceSettingNonComplianceReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationPolicyNonComplianceSummaryReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getConfigurationSettingNonComplianceReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getDeviceNonComplianceReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getDevicesWithoutCompliancePolicyReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getHistoricalReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getPolicyNonComplianceSummaryReport',
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
      method: 'post',
      path: '/deviceManagement/reports/getSettingNonComplianceReport',
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
      method: 'post',
      path: '/deviceManagement/reports/retrieveDeviceAppInstallationStatusReport',
      body,
    };
  },
};
