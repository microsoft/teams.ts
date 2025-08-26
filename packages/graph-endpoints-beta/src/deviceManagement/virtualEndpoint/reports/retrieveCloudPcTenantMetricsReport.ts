import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport`
 *
 * Get a report related to the performance of Cloud PCs.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport',
    paramDefs: [],
    params,
    body,
  };
}
