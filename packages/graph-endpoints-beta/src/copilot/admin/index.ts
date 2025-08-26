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
    ver: 'beta',
    method: 'delete',
    path: '/copilot/admin',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    ver: 'beta',
    method: 'get',
    path: '/copilot/admin',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/admin`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/admin']['body'],
  params?: IEndpoints['PATCH /copilot/admin']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/admin']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/admin',
    paramDefs: [],
    params,
    body,
  };
}
