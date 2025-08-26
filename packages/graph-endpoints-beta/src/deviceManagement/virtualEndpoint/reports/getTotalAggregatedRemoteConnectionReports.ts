import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports`
 *
 * Get the total aggregated remote connection usage of a Cloud PC during a given time span.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getTotalAggregatedRemoteConnectionReports',
    paramDefs: [],
    params,
    body,
  };
}
