export * as settings from './settings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/admin': Operation<'/copilot/admin', 'delete'>;
  'GET /copilot/admin': Operation<'/copilot/admin', 'get'>;
  'PATCH /copilot/admin': Operation<'/copilot/admin', 'patch'>;
}

/**
 * `DELETE /copilot/admin`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/admin']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/admin']['response']> {
  return {
    method: 'delete',
    path: '/copilot/admin',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /copilot/admin`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/admin']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/admin']['response']> {
  return {
    method: 'get',
    path: '/copilot/admin',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/admin`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/admin']['body']
): EndpointRequest<IEndpoints['PATCH /copilot/admin']['response']> {
  return {
    method: 'patch',
    path: '/copilot/admin',
    body,
  };
}
