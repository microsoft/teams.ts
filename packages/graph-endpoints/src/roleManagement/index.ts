export * as directory from './directory';
export * as entitlementManagement from './entitlementManagement';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement': Operation<'/roleManagement', 'get'>;
  'PATCH /roleManagement': Operation<'/roleManagement', 'patch'>;
}

/**
 * `GET /roleManagement`
 *
 */
export function get(
  params?: IEndpoints['GET /roleManagement']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement']['response']> {
  return {
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
 */
export function update(
  body: IEndpoints['PATCH /roleManagement']['body'],
  params?: IEndpoints['PATCH /roleManagement']['parameters']
): EndpointRequest<IEndpoints['PATCH /roleManagement']['response']> {
  return {
    method: 'patch',
    path: '/roleManagement',
    paramDefs: [],
    params,
    body,
  };
}
