import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/sponsors': Operation<'/me/sponsors', 'get'>;
  'GET /me/sponsors/{directoryObject-id}': Operation<'/me/sponsors/{directoryObject-id}', 'get'>;
}

/**
 * `GET /me/sponsors`
 *
 * The users and groups responsible for this guest user&#x27;s privileges in the tenant and keep the guest user&#x27;s information and access updated. (HTTP Methods: GET, POST, DELETE.). Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /me/sponsors']['parameters']
): EndpointRequest<IEndpoints['GET /me/sponsors']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/sponsors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/sponsors/{directoryObject-id}`
 *
 * The users and groups responsible for this guest user&#x27;s privileges in the tenant and keep the guest user&#x27;s information and access updated. (HTTP Methods: GET, POST, DELETE.). Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /me/sponsors/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/sponsors/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/sponsors/{directoryObject-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
