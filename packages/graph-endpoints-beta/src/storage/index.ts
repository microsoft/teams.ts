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
    ver: 'beta',
    method: 'get',
    path: '/storage',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage']['body']
): EndpointRequest<IEndpoints['PATCH /storage']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage',
    body,
  };
}
