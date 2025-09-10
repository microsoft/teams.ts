export * as cloudAppDiscovery from './cloudAppDiscovery';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataDiscovery': Operation<'/security/dataDiscovery', 'delete'>;
  'GET /security/dataDiscovery': Operation<'/security/dataDiscovery', 'get'>;
  'PATCH /security/dataDiscovery': Operation<'/security/dataDiscovery', 'patch'>;
}

/**
 * `DELETE /security/dataDiscovery`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataDiscovery']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/dataDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataDiscovery',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/dataDiscovery`
 *
 */
export function get(
  params?: IEndpoints['GET /security/dataDiscovery']['parameters']
): EndpointRequest<IEndpoints['GET /security/dataDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataDiscovery',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/dataDiscovery`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataDiscovery']['body']
): EndpointRequest<IEndpoints['PATCH /security/dataDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataDiscovery',
    body,
  };
}
