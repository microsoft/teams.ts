import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/zebraFotaConnector/hasActiveDeployments': Operation<
    '/deviceManagement/zebraFotaConnector/hasActiveDeployments',
    'post'
  >;
}

/**
 * `POST /deviceManagement/zebraFotaConnector/hasActiveDeployments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaConnector/hasActiveDeployments']['body'],
  params?: IEndpoints['POST /deviceManagement/zebraFotaConnector/hasActiveDeployments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/zebraFotaConnector/hasActiveDeployments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaConnector/hasActiveDeployments',
    paramDefs: [],
    params,
    body,
  };
}
