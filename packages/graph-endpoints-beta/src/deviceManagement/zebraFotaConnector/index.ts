export * as approveFotaApps from './approveFotaApps';
export * as connect from './connect';
export * as disconnect from './disconnect';
export * as hasActiveDeployments from './hasActiveDeployments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/zebraFotaConnector': Operation<
    '/deviceManagement/zebraFotaConnector',
    'delete'
  >;
  'GET /deviceManagement/zebraFotaConnector': Operation<
    '/deviceManagement/zebraFotaConnector',
    'get'
  >;
  'PATCH /deviceManagement/zebraFotaConnector': Operation<
    '/deviceManagement/zebraFotaConnector',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/zebraFotaConnector`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/zebraFotaConnector']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/zebraFotaConnector']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/zebraFotaConnector',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/zebraFotaConnector`
 *
 * The singleton ZebraFotaConnector associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/zebraFotaConnector']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/zebraFotaConnector']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/zebraFotaConnector',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/zebraFotaConnector`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/zebraFotaConnector']['body'],
  params?: IEndpoints['PATCH /deviceManagement/zebraFotaConnector']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/zebraFotaConnector']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/zebraFotaConnector',
    paramDefs: [],
    params,
    body,
  };
}
