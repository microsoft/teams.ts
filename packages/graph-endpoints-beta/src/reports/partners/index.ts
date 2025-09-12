export * as billing from './billing';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners': Operation<'/reports/partners', 'delete'>;
  'GET /reports/partners': Operation<'/reports/partners', 'get'>;
  'PATCH /reports/partners': Operation<'/reports/partners', 'patch'>;
}

/**
 * `DELETE /reports/partners`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/partners',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /reports/partners`
 *
 * Represents billing details for a Microsoft direct partner.
 */
export function list(
  params?: IEndpoints['GET /reports/partners']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /reports/partners`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners']['body']
): EndpointRequest<IEndpoints['PATCH /reports/partners']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/partners',
    body,
  };
}
