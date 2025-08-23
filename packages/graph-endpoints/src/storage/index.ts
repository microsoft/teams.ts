export * as fileStorage from './fileStorage';
export * as settings from './settings';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /storage': Operation<'/storage', 'get'>;
  'PATCH /storage': Operation<'/storage', 'patch'>;
}

/**
 * `GET /storage`
 *
 */
export function get(
  params?: IEndpoints['GET /storage']['parameters']
): EndpointRequest<IEndpoints['GET /storage']['response']> {
  return {
    method: 'get',
    path: '/storage',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /storage`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage']['body'],
  params?: IEndpoints['PATCH /storage']['parameters']
): EndpointRequest<IEndpoints['PATCH /storage']['response']> {
  return {
    method: 'patch',
    path: '/storage',
    paramDefs: [],
    params,
    body,
  };
}
