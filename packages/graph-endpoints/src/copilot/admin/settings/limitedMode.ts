import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/admin/settings/limitedMode': Operation<
    '/copilot/admin/settings/limitedMode',
    'delete'
  >;
  'GET /copilot/admin/settings/limitedMode': Operation<
    '/copilot/admin/settings/limitedMode',
    'get'
  >;
  'PATCH /copilot/admin/settings/limitedMode': Operation<
    '/copilot/admin/settings/limitedMode',
    'patch'
  >;
}

/**
 * `DELETE /copilot/admin/settings/limitedMode`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/admin/settings/limitedMode']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/admin/settings/limitedMode']['response']> {
  return {
    method: 'delete',
    path: '/copilot/admin/settings/limitedMode',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /copilot/admin/settings/limitedMode`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/admin/settings/limitedMode']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/admin/settings/limitedMode']['response']> {
  return {
    method: 'get',
    path: '/copilot/admin/settings/limitedMode',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /copilot/admin/settings/limitedMode`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/admin/settings/limitedMode']['body'],
  params?: IEndpoints['PATCH /copilot/admin/settings/limitedMode']['parameters']
): EndpointRequest<IEndpoints['PATCH /copilot/admin/settings/limitedMode']['response']> {
  return {
    method: 'patch',
    path: '/copilot/admin/settings/limitedMode',
    paramDefs: [],
    params,
    body,
  };
}
