import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/devices/{device-id}/registeredOwners': Operation<
    '/me/devices/{device-id}/registeredOwners',
    'get'
  >;
}

/**
 * `GET /me/devices/{device-id}/registeredOwners`
 *
 * The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /me/devices/{device-id}/registeredOwners']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/registeredOwners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}/registeredOwners',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'device-id', in: 'path' },
    ],
    params,
  };
}
