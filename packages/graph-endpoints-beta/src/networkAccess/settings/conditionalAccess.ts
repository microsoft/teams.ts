import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/settings/conditionalAccess': Operation<
    '/networkAccess/settings/conditionalAccess',
    'delete'
  >;
  'GET /networkAccess/settings/conditionalAccess': Operation<
    '/networkAccess/settings/conditionalAccess',
    'get'
  >;
  'PATCH /networkAccess/settings/conditionalAccess': Operation<
    '/networkAccess/settings/conditionalAccess',
    'patch'
  >;
}

/**
 * `DELETE /networkAccess/settings/conditionalAccess`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/settings/conditionalAccess']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/settings/conditionalAccess']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/settings/conditionalAccess',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/settings/conditionalAccess`
 *
 * Retrieve the conditional access settings, which include the preservation of the original source IP address in network traffic for accurate identification and tracking, and the establishment of scalable network connectivity through the Global Secure Access services.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/settings/conditionalAccess']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/settings/conditionalAccess']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/settings/conditionalAccess',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/settings/conditionalAccess`
 *
 * Update the conditional access settings to include the preservation of the original source IP address in network traffic for accurate identification and tracking, as well as the establishment of scalable network connectivity through the Global Secure Access services.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/settings/conditionalAccess']['body'],
  params?: IEndpoints['PATCH /networkAccess/settings/conditionalAccess']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/settings/conditionalAccess']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/settings/conditionalAccess',
    paramDefs: [],
    params,
    body,
  };
}
