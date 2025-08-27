import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/retrieveConnectionQualityReports',
    paramDefs: [],
    params,
    body,
  };
}
