import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getUserInstallStatusReport': Operation<
    '/deviceManagement/reports/getUserInstallStatusReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getUserInstallStatusReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getUserInstallStatusReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getUserInstallStatusReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getUserInstallStatusReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getUserInstallStatusReport',
    paramDefs: [],
    params,
    body,
  };
}
