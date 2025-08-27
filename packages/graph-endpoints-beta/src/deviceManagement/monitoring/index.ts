export * as alertRecords from './alertRecords';
export * as alertRules from './alertRules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/monitoring': Operation<'/deviceManagement/monitoring', 'delete'>;
  'GET /deviceManagement/monitoring': Operation<'/deviceManagement/monitoring', 'get'>;
  'PATCH /deviceManagement/monitoring': Operation<'/deviceManagement/monitoring', 'patch'>;
}

/**
 * `DELETE /deviceManagement/monitoring`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/monitoring']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/monitoring',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/monitoring`
 *
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/monitoring']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/monitoring',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/monitoring`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/monitoring']['body'],
  params?: IEndpoints['PATCH /deviceManagement/monitoring']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/monitoring']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/monitoring',
    paramDefs: [],
    params,
    body,
  };
}
