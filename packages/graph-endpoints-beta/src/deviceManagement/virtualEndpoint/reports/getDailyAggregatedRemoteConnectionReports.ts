import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports`
 *
 * Get the daily aggregated remote connection reports, such as round trip time, available bandwidth, and so on, in a given period.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getDailyAggregatedRemoteConnectionReports',
    paramDefs: [],
    params,
    body,
  };
}
