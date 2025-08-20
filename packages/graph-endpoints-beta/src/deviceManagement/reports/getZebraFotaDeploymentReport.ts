import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getZebraFotaDeploymentReport': Operation<
    '/deviceManagement/reports/getZebraFotaDeploymentReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getZebraFotaDeploymentReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getZebraFotaDeploymentReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getZebraFotaDeploymentReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getZebraFotaDeploymentReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getZebraFotaDeploymentReport',
    paramDefs: [],
    params,
    body,
  };
}
