export * as cloudPC from './cloudPC';
export * as defender from './defender';
export * as deviceManagement from './deviceManagement';
export * as directory from './directory';
export * as enterpriseApps from './enterpriseApps';
export * as entitlementManagement from './entitlementManagement';
export * as exchange from './exchange';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement': Operation<'/roleManagement', 'get'>;
  'PATCH /roleManagement': Operation<'/roleManagement', 'patch'>;
}

/**
 * `GET /roleManagement`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement']['body'],
  params?: IEndpoints['PATCH /roleManagement']['parameters']
): EndpointRequest<IEndpoints['PATCH /roleManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement',
    paramDefs: [],
    params,
    body,
  };
}
