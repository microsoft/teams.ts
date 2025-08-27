import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/manager': Operation<'/me/manager', 'get'>;
}

/**
 * `GET /me/manager`
 *
 * The user or contact that is this user&#x27;s manager. Read-only. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /me/manager']['parameters']
): EndpointRequest<IEndpoints['GET /me/manager']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/manager',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}
