export * as exportJobs from './exportJobs';
export * as getActionStatusReports from './getActionStatusReports';
export * as getCloudPcPerformanceReport from './getCloudPcPerformanceReport';
export * as getCloudPcRecommendationReports from './getCloudPcRecommendationReports';
export * as getConnectionQualityReports from './getConnectionQualityReports';
export * as getDailyAggregatedRemoteConnectionReports from './getDailyAggregatedRemoteConnectionReports';
export * as getFrontlineReport from './getFrontlineReport';
export * as getInaccessibleCloudPcReports from './getInaccessibleCloudPcReports';
export * as getRawRemoteConnectionReports from './getRawRemoteConnectionReports';
export * as getRemoteConnectionHistoricalReports from './getRemoteConnectionHistoricalReports';
export * as getTotalAggregatedRemoteConnectionReports from './getTotalAggregatedRemoteConnectionReports';
export * as retrieveBulkActionStatusReport from './retrieveBulkActionStatusReport';
export * as retrieveCloudPcRecommendationReports from './retrieveCloudPcRecommendationReports';
export * as retrieveCloudPcTenantMetricsReport from './retrieveCloudPcTenantMetricsReport';
export * as retrieveCloudPcTroubleshootReports from './retrieveCloudPcTroubleshootReports';
export * as retrieveConnectionQualityReports from './retrieveConnectionQualityReports';
export * as retrieveCrossRegionDisasterRecoveryReport from './retrieveCrossRegionDisasterRecoveryReport';
export * as retrieveFrontlineReports from './retrieveFrontlineReports';

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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/virtualEndpoint/reports`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports']['body'],
  params?: IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/virtualEndpoint/reports']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/virtualEndpoint/reports',
    paramDefs: [],
    params,
    body,
  };
}
