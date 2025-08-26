export * as uploadedStreams from './uploadedStreams';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataDiscovery/cloudAppDiscovery': Operation<
    '/security/dataDiscovery/cloudAppDiscovery',
    'delete'
  >;
  'GET /security/dataDiscovery/cloudAppDiscovery': Operation<
    '/security/dataDiscovery/cloudAppDiscovery',
    'get'
  >;
  'PATCH /security/dataDiscovery/cloudAppDiscovery': Operation<
    '/security/dataDiscovery/cloudAppDiscovery',
    'patch'
  >;
}

/**
 * `DELETE /security/dataDiscovery/cloudAppDiscovery`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/dataDiscovery/cloudAppDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/dataDiscovery/cloudAppDiscovery',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/dataDiscovery/cloudAppDiscovery`
 *
 * The available entities are IP addresses, devices, and users who access a cloud app.
 */
export function get(
  params?: IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery']['parameters']
): EndpointRequest<IEndpoints['GET /security/dataDiscovery/cloudAppDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/dataDiscovery/cloudAppDiscovery',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/dataDiscovery/cloudAppDiscovery`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery']['body'],
  params?: IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/dataDiscovery/cloudAppDiscovery']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/dataDiscovery/cloudAppDiscovery',
    paramDefs: [],
    params,
    body,
  };
}
