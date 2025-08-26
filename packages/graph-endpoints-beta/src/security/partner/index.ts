export * as securityAlerts from './securityAlerts';
export * as securityScore from './securityScore';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner': Operation<'/security/partner', 'delete'>;
  'GET /security/partner': Operation<'/security/partner', 'get'>;
  'PATCH /security/partner': Operation<'/security/partner', 'patch'>;
}

/**
 * `DELETE /security/partner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/partner']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/partner`
 *
 * A container that safeguards the Microsoft Azure resources of Microsoft Cloud Solution Provider (CSP) partners’ customers, including alerts, scores, and all aspects of security.
 */
export function get(
  params?: IEndpoints['GET /security/partner']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/partner`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/partner']['body'],
  params?: IEndpoints['PATCH /security/partner']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/partner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner',
    paramDefs: [],
    params,
    body,
  };
}
