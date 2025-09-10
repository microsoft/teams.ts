export * as people from './people';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/settings': Operation<'/copilot/settings', 'delete'>;
  'GET /copilot/settings': Operation<'/copilot/settings', 'get'>;
  'PATCH /copilot/settings': Operation<'/copilot/settings', 'patch'>;
}

/**
 * `DELETE /copilot/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/settings',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /copilot/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/settings']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/settings',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/settings']['body']
): EndpointRequest<IEndpoints['PATCH /copilot/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/settings',
    body,
  };
}
