import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports`
 *
 * Get troubleshooting reports for Cloud PCs. You can get a regional troubleshooting report, a report with troubleshooting details, a report with troubleshooting trends, or a report on the number of troubleshooting issues.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTroubleshootReports',
    paramDefs: [],
    params,
    body,
  };
}
