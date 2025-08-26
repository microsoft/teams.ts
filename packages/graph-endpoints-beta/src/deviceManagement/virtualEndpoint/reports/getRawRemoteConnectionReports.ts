import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports`
 *
 * Get the raw real-time remote connection report for a Cloud PC without any calculation, such as roundTripTime or available bandwidth, which are aggregated hourly from the raw event data.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getRawRemoteConnectionReports',
    paramDefs: [],
    params,
    body,
  };
}
