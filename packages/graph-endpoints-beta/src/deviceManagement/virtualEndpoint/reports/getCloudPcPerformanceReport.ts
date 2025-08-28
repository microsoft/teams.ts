import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport': Operation<
    '/deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport`
 *
 * Get a report related to the performance of Cloud PCs.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getCloudPcPerformanceReport',
    paramDefs: [],
    params,
    body,
  };
}
