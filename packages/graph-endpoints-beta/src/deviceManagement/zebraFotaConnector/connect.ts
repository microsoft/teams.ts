import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/zebraFotaConnector/connect': Operation<
    '/deviceManagement/zebraFotaConnector/connect',
    'post'
  >;
}

/**
 * `POST /deviceManagement/zebraFotaConnector/connect`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaConnector/connect']['body'],
  params?: IEndpoints['POST /deviceManagement/zebraFotaConnector/connect']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/zebraFotaConnector/connect']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaConnector/connect',
    paramDefs: [],
    params,
    body,
  };
}
