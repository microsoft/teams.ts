export * as connections from './connections';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /external': Operation<'/external', 'get'>;
  'PATCH /external': Operation<'/external', 'patch'>;
}

/**
 * `GET /external`
 *
 */
export function get(
  params?: IEndpoints['GET /external']['parameters']
): EndpointRequest<IEndpoints['GET /external']['response']> {
  return {
    method: 'get',
    path: '/external',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /external`
 *
 */
export function update(
  body: IEndpoints['PATCH /external']['body'],
  params?: IEndpoints['PATCH /external']['parameters']
): EndpointRequest<IEndpoints['PATCH /external']['response']> {
  return {
    method: 'patch',
    path: '/external',
    paramDefs: [],
    params,
    body,
  };
}
