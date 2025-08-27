import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getAllCertificatesReport': Operation<
    '/deviceManagement/reports/getAllCertificatesReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getAllCertificatesReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getAllCertificatesReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getAllCertificatesReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getAllCertificatesReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getAllCertificatesReport',
    paramDefs: [],
    params,
    body,
  };
}
