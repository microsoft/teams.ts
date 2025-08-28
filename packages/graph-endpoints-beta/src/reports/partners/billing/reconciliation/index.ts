export * as billed from './billed';
export * as unbilled from './unbilled';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/reconciliation': Operation<
    '/reports/partners/billing/reconciliation',
    'delete'
  >;
  'GET /reports/partners/billing/reconciliation': Operation<
    '/reports/partners/billing/reconciliation',
    'get'
  >;
  'PATCH /reports/partners/billing/reconciliation': Operation<
    '/reports/partners/billing/reconciliation',
    'patch'
  >;
}

/**
 * `DELETE /reports/partners/billing/reconciliation`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/reconciliation']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/reconciliation']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/partners/billing/reconciliation',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/partners/billing/reconciliation`
 *
 * Represents details for billed and unbilled invoice reconciliation data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/reconciliation']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/reconciliation']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing/reconciliation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/reconciliation`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/reconciliation']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/reconciliation']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/reconciliation']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/partners/billing/reconciliation',
    paramDefs: [],
    params,
    body,
  };
}
