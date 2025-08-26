import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports': Operation<
    '/deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports',
    'post'
  >;
}

/**
 * `POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports`
 *
 * Get the device recommendation reports for Cloud PCs, such as the usage category report. The usage category report categorizes a Cloud PC as Undersized, Oversized, Rightsized, or Underutilized, and also provides the recommended SKU when the Cloud PC isn&#x27;t Rightsized.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports']['body'],
  params?: IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports',
    paramDefs: [],
    params,
    body,
  };
}
