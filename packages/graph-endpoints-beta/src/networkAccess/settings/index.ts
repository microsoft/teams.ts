export * as conditionalAccess from './conditionalAccess';
export * as crossTenantAccess from './crossTenantAccess';
export * as forwardingOptions from './forwardingOptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/settings': Operation<'/networkAccess/settings', 'delete'>;
  'GET /networkAccess/settings': Operation<'/networkAccess/settings', 'get'>;
  'PATCH /networkAccess/settings': Operation<'/networkAccess/settings', 'patch'>;
}

/**
 * `DELETE /networkAccess/settings`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/settings']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/settings']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/settings',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/settings`
 *
 * Global Secure Access settings.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/settings']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/settings']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/settings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/settings`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/settings']['body'],
  params?: IEndpoints['PATCH /networkAccess/settings']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/settings']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/settings',
    paramDefs: [],
    params,
    body,
  };
}
