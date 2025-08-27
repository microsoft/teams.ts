import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports`
 *
 * Get inaccessible Cloud PCs with details, including the latest health state, failed connection count, failed health check count, and system status. An inaccessible Cloud PC represents a Cloud PC that is in an unavailable state (at least one of the health checks failed) or has consecutive user connections failure.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getInaccessibleCloudPcReports',
    paramDefs: [],
    params,
    body,
  };
}
