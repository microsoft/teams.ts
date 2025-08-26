export * as limitedMode from './limitedMode';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/admin/settings': Operation<'/copilot/admin/settings', 'delete'>;
  'GET /copilot/admin/settings': Operation<'/copilot/admin/settings', 'get'>;
  'PATCH /copilot/admin/settings': Operation<'/copilot/admin/settings', 'patch'>;
}

/**
 * `DELETE /copilot/admin/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/admin/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/admin/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/admin/settings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /copilot/admin/settings`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/admin/settings']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/admin/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/admin/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/admin/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/admin/settings']['body'],
  params?: IEndpoints['PATCH /copilot/admin/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/admin/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/admin/settings',
    paramDefs: [],
    params,
    body,
  };
}
