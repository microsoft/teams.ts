import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /devices/{device-id}/registeredOwners': Operation<
    '/devices/{device-id}/registeredOwners',
    'get'
  >;
}

/**
 * `GET /devices/{device-id}/registeredOwners`
 *
 * Retrieve a list of users that are registered owners of the device. A registered owner is the user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner.
 */
export function list(
  params?: IEndpoints['GET /devices/{device-id}/registeredOwners']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/registeredOwners']['response']> {
  return {
    method: 'get',
    path: '/devices/{device-id}/registeredOwners',
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
