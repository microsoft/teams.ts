import type { EndpointRequest, Operation } from './types/common.ts';

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
    method: 'get',
    path: '/compliance',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /compliance`
 *
 */
export function update(
  body: IEndpoints['PATCH /compliance']['body'],
  params?: IEndpoints['PATCH /compliance']['parameters']
): EndpointRequest<IEndpoints['PATCH /compliance']['response']> {
  return {
    method: 'patch',
    path: '/compliance',
    paramDefs: [],
    params,
    body,
  };
}
