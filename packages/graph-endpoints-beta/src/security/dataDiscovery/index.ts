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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataDiscovery`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataDiscovery']['body'],
  params?: IEndpoints['PATCH /security/dataDiscovery']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/dataDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataDiscovery',
    paramDefs: [],
    params,
    body,
  };
}
