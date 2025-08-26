import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport': Operation<
    '/deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveCloudPkiLeafCertificateSummaryReport',
    paramDefs: [],
    params,
    body,
  };
}
