export * as queries from './queries';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/auditLog': Operation<'/security/auditLog', 'delete'>;
  'GET /security/auditLog': Operation<'/security/auditLog', 'get'>;
  'PATCH /security/auditLog': Operation<'/security/auditLog', 'patch'>;
}

/**
 * `DELETE /security/auditLog`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/auditLog']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/auditLog']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/auditLog',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /security/auditLog`
 *
 */
export function get(
  params?: IEndpoints['GET /security/auditLog']['parameters']
): EndpointRequest<IEndpoints['GET /security/auditLog']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/auditLog',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /security/auditLog`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/auditLog']['body'],
  params?: IEndpoints['PATCH /security/auditLog']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/auditLog']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/auditLog',
    paramDefs: [],
    params,
    body,
  };
}
