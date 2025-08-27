import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getConnectionQualityReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports`
 *
 * Get the overall connection quality reports for all devices within a current tenant during a given time period, including metrics like the average round trip time (P50), average available bandwidth, and UDP connection percentage. Get also other real-time metrics such as last connection round trip time, last connection client IP, last connection gateway, and last connection protocol.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getConnectionQualityReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getConnectionQualityReports',
    paramDefs: [],
    params,
    body,
  };
}
