export * as ediscovery from './ediscovery';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /compliance': Operation<'/compliance', 'get'>;
  'PATCH /compliance': Operation<'/compliance', 'patch'>;
}

/**
 * `GET /compliance`
 *
 */
export function get(
  params?: IEndpoints['GET /compliance']['parameters']
): EndpointRequest<IEndpoints['GET /compliance']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /compliance`
 *
 */
export function update(
  body: IEndpoints['PATCH /compliance']['body']
): EndpointRequest<IEndpoints['PATCH /compliance']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/compliance',
    body,
  };
}
