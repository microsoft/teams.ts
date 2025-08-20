export * as customerInsights from './customerInsights';
export * as history from './history';
export * as requirements from './requirements';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/partner/securityScore': Operation<'/security/partner/securityScore', 'delete'>;
  'GET /security/partner/securityScore': Operation<'/security/partner/securityScore', 'get'>;
  'PATCH /security/partner/securityScore': Operation<'/security/partner/securityScore', 'patch'>;
}

/**
 * `DELETE /security/partner/securityScore`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/partner/securityScore']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/partner/securityScore']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/partner/securityScore',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/partner/securityScore`
 *
 * Read the properties and relationships of a partnerSecurityScore object.
 */
export function get(
  params?: IEndpoints['GET /security/partner/securityScore']['parameters']
): EndpointRequest<IEndpoints['GET /security/partner/securityScore']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/partner/securityScore',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/partner/securityScore`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/partner/securityScore']['body'],
  params?: IEndpoints['PATCH /security/partner/securityScore']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/partner/securityScore']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/partner/securityScore',
    paramDefs: [],
    params,
    body,
  };
}
