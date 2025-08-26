import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/zebraFotaConnector/approveFotaApps': Operation<
    '/deviceManagement/zebraFotaConnector/approveFotaApps',
    'post'
  >;
}

/**
 * `POST /deviceManagement/zebraFotaConnector/approveFotaApps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaConnector/approveFotaApps']['body'],
  params?: IEndpoints['POST /deviceManagement/zebraFotaConnector/approveFotaApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/zebraFotaConnector/approveFotaApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaConnector/approveFotaApps',
    paramDefs: [],
    params,
    body,
  };
}
