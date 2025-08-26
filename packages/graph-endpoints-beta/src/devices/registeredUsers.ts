import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /devices/{device-id}/registeredUsers': Operation<
    '/devices/{device-id}/registeredUsers',
    'get'
  >;
}

/**
 * `GET /devices/{device-id}/registeredUsers`
 *
 * Retrieve a list of users that are registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration.
 */
export function list(
  params?: IEndpoints['GET /devices/{device-id}/registeredUsers']['parameters']
): EndpointRequest<IEndpoints['GET /devices/{device-id}/registeredUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/devices/{device-id}/registeredUsers',
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
