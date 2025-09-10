import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/virtualEndpoint/reports': Operation<
    '/deviceManagement/virtualEndpoint/reports',
    'delete'
  >;
  'GET /deviceManagement/virtualEndpoint/reports': Operation<
    '/deviceManagement/virtualEndpoint/reports',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/reports': Operation<
    '/deviceManagement/virtualEndpoint/reports',
    'patch'
  >;
  'GET /deviceManagement/virtualEndpoint/reports/exportJobs': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs',
    'get'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/exportJobs': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs',
    'post'
  >;
  'GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    'get'
  >;
  'PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    'patch'
  >;
  'DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}': Operation<
    '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
    'delete'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getActionStatusReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getConnectionQualityReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/getFrontlineReport',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport',
    'post'
  >;
  'POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/virtualEndpoint/reports`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/reports']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/virtualEndpoint/reports']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/virtualEndpoint/reports',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/virtualEndpoint/reports`
 *
 * Cloud PC related reports.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/virtualEndpoint/reports']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/virtualEndpoint/reports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/virtualEndpoint/reports',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/reports',
    body,
  };
}

export const exportJobs = {
  /**
   * `GET /deviceManagement/virtualEndpoint/reports/exportJobs`
   *
   * Read the properties and relationships of a cloudPcExportJob object. You can download a report by first creating a new cloudPcExportJob resource to initiate downloading. Use this GET operation to verify the exportJobStatus property of the cloudPcExportJob resource. The property becomes completed when the report finishes downloading in the location specified by the exportUrl property.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/reports/exportJobs',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/exportJobs`
   *
   * Create a new cloudPcExportJob resource to initiate downloading the entire or specified portion of a report. Use the GET cloudPcExportJob operation to verify the exportJobStatus property of the cloudPcExportJob resource. When the property result is completed, the report finishes downloading to the location specified by the exportUrl property.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/exportJobs']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/exportJobs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/exportJobs',
      body,
    };
  },
  /**
   * `GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}`
   *
   * Read the properties and relationships of a cloudPcExportJob object. You can download a report by first creating a new cloudPcExportJob resource to initiate downloading. Use this GET operation to verify the exportJobStatus property of the cloudPcExportJob resource. The property becomes completed when the report finishes downloading in the location specified by the exportUrl property.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudPcExportJob-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
      paramDefs: {
        path: ['cloudPcExportJob-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/virtualEndpoint/reports/exportJobs/{cloudPcExportJob-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudPcExportJob-id'],
      },
      params,
    };
  },
};

export const getActionStatusReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports`
   *
   * Get the remote action status reports, including data such as the Cloud PC ID, Cloud PC device display name, initiating user&#x27;s principal name, device owner&#x27;s user principal name, action taken, and action state.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getActionStatusReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getActionStatusReports',
      body,
    };
  },
};

export const getCloudPcPerformanceReport = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport`
   *
   * Get a report related to the performance of Cloud PCs.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport',
      body,
    };
  },
};

export const getCloudPcRecommendationReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports`
   *
   * Get the device recommendation reports for Cloud PCs, such as the usage category report. The usage category report categorizes a Cloud PC as Undersized, Oversized, Rightsized, or Underutilized, and also provides the recommended SKU when the Cloud PC isn&#x27;t Rightsized.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports',
      body,
    };
  },
};

export const getConnectionQualityReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports`
   *
   * Get the overall connection quality reports for all devices within a current tenant during a given time period, including metrics like the average round trip time (P50), average available bandwidth, and UDP connection percentage. Get also other real-time metrics such as last connection round trip time, last connection client IP, last connection gateway, and last connection protocol.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getConnectionQualityReports',
      body,
    };
  },
};

export const getDailyAggregatedRemoteConnectionReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports`
   *
   * Get the daily aggregated remote connection reports, such as round trip time, available bandwidth, and so on, in a given period.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports',
      body,
    };
  },
};

export const getFrontlineReport = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport`
   *
   * Get the Windows 365 Frontline reports, such as real-time or historical data reports.
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getFrontlineReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getFrontlineReport',
      body,
    };
  },
};

export const getInaccessibleCloudPcReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports`
   *
   * Get inaccessible Cloud PCs with details, including the latest health state, failed connection count, failed health check count, and system status. An inaccessible Cloud PC represents a Cloud PC that is in an unavailable state (at least one of the health checks failed) or has consecutive user connections failure.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports',
      body,
    };
  },
};

export const getRawRemoteConnectionReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports`
   *
   * Get the raw real-time remote connection report for a Cloud PC without any calculation, such as roundTripTime or available bandwidth, which are aggregated hourly from the raw event data.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports',
      body,
    };
  },
};

export const getRemoteConnectionHistoricalReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports`
   *
   * Get the remote connection history records of a Cloud PC during a given period. This report contains data such as signInDateTime, signOutDateTime, usageInHour, remoteSignInTimeInSec and roundTripTimeInMsP50, and so on. This data is aggregated hourly for a specified time period, such as the last seven days.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports',
      body,
    };
  },
};

export const getTotalAggregatedRemoteConnectionReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports`
   *
   * Get the total aggregated remote connection usage of a Cloud PC during a given time span.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports',
      body,
    };
  },
};

export const retrieveBulkActionStatusReport = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport`
   *
   * Get the bulk remote action status report, including data such as the bulk action ID, bulk action display name, initiating user&#x27;s principal name, action type, and action state.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/retrieveBulkActionStatusReport',
      body,
    };
  },
};

export const retrieveCloudPcRecommendationReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports',
      body,
    };
  },
};

export const retrieveCloudPcTenantMetricsReport = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport`
   *
   * Get a report related to the performance of Cloud PCs.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport',
      body,
    };
  },
};

export const retrieveCloudPcTroubleshootReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports`
   *
   * Get troubleshooting reports for Cloud PCs. You can get a regional troubleshooting report, a report with troubleshooting details, a report with troubleshooting trends, or a report on the number of troubleshooting issues.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports',
      body,
    };
  },
};

export const retrieveConnectionQualityReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports',
      body,
    };
  },
};

export const retrieveCrossRegionDisasterRecoveryReport = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport`
   *
   * Retrieve the Windows 365 cross-region disaster recovery report, including cloudPcId, userId, deviceId, cloudPCDeviceDisplayName, userPrincipalName, enabledDRType, disasterRecoveryStatus, licenseType, drHealthStatus, currentRestorePointDateTime, backupCloudPcStatus, and activationExpirationDateTime.
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/retrieveCrossRegionDisasterRecoveryReport',
      body,
    };
  },
};

export const retrieveFrontlineReports = {
  /**
   * `POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/virtualEndpoint/reports/retrieveFrontlineReports',
      body,
    };
  },
};
