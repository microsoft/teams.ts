import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports`
 *
 * Get the remote connection history records of a Cloud PC during a given period. This report contains data such as signInDateTime, signOutDateTime, usageInHour, remoteSignInTimeInSec and roundTripTimeInMsP50, and so on. This data is aggregated hourly for a specified time period, such as the last seven days.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getRemoteConnectionHistoricalReports',
    paramDefs: [],
    params,
    body,
  };
}
