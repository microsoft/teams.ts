import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getCertificatesReport': Operation<
    '/deviceManagement/reports/getCertificatesReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getCertificatesReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getCertificatesReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getCertificatesReport']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/reports/getCertificatesReport']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getCertificatesReport',
    paramDefs: [],
    params,
    body,
  };
}
