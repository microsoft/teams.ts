export * as calls from './calls';
export * as onlineMeetings from './onlineMeetings';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /app': Operation<'/app', 'get'>;
  'PATCH /app': Operation<'/app', 'patch'>;
}

/**
 * `GET /app`
 *
 */
export function get(
  params?: IEndpoints['GET /app']['parameters']
): EndpointRequest<IEndpoints['GET /app']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /app`
 *
 */
export function update(
  body: IEndpoints['PATCH /app']['body']
): EndpointRequest<IEndpoints['PATCH /app']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app',
    body,
  };
}
