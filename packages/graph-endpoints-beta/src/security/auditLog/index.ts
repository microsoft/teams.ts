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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/auditLog`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/auditLog']['body']
): EndpointRequest<IEndpoints['PATCH /security/auditLog']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/auditLog',
    body,
  };
}
