import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/zebraFotaConnector/disconnect': Operation<
    '/deviceManagement/zebraFotaConnector/disconnect',
    'post'
  >;
}

/**
 * `POST /deviceManagement/zebraFotaConnector/disconnect`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/zebraFotaConnector/disconnect']['body'],
  params?: IEndpoints['POST /deviceManagement/zebraFotaConnector/disconnect']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/zebraFotaConnector/disconnect']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/zebraFotaConnector/disconnect',
    paramDefs: [],
    params,
    body,
  };
}
