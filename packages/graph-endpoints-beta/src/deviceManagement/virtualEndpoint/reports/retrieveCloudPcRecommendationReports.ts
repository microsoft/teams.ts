import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/retrieveCloudPcRecommendationReports',
    paramDefs: [],
    params,
    body,
  };
}
