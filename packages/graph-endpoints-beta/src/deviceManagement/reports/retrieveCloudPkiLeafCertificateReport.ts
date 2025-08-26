import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport': Operation<
    '/deviceManagement/reports/retrieveCloudPkiLeafCertificateReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveCloudPkiLeafCertificateReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveCloudPkiLeafCertificateReport',
    paramDefs: [],
    params,
    body,
  };
}
