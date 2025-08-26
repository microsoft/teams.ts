import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel': Operation<
    '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel',
    'post'
  >;
}

/**
 * `POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel']['body'],
  params?: IEndpoints['POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}/cancel',
    paramDefs: [{ name: 'zebraFotaDeployment-id', in: 'path' }],
    params,
    body,
  };
}
