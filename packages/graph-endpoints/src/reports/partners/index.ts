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
    method: 'delete',
    path: '/reports/partners',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    method: 'get',
    path: '/reports/partners',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners']['body'],
  params?: IEndpoints['PATCH /reports/partners']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/partners']['response']> {
  return {
    method: 'patch',
    path: '/reports/partners',
    paramDefs: [],
    params,
    body,
  };
}
