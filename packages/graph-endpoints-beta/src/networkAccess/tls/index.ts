export * as externalCertificateAuthorityCertificates from './externalCertificateAuthorityCertificates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/tls': Operation<'/networkAccess/tls', 'delete'>;
  'GET /networkAccess/tls': Operation<'/networkAccess/tls', 'get'>;
  'PATCH /networkAccess/tls': Operation<'/networkAccess/tls', 'patch'>;
}

/**
 * `DELETE /networkAccess/tls`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/tls']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/tls']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/tls',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/tls`
 *
 * A container for tenant-level TLS inspection settings for Global Secure Access.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/tls']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/tls']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tls',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/tls`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/tls']['body'],
  params?: IEndpoints['PATCH /networkAccess/tls']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/tls']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/tls',
    paramDefs: [],
    params,
    body,
  };
}
