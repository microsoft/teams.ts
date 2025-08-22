import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/reconciliation/billed': Operation<
    '/reports/partners/billing/reconciliation/billed',
    'delete'
  >;
  'GET /reports/partners/billing/reconciliation/billed': Operation<
    '/reports/partners/billing/reconciliation/billed',
    'get'
  >;
  'PATCH /reports/partners/billing/reconciliation/billed': Operation<
    '/reports/partners/billing/reconciliation/billed',
    'patch'
  >;
}

/**
 * `DELETE /reports/partners/billing/reconciliation/billed`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/reconciliation/billed']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/partners/billing/reconciliation/billed']['response']
> {
  return {
    method: 'delete',
    path: '/reports/partners/billing/reconciliation/billed',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/partners/billing/reconciliation/billed`
 *
 * Represents details for billed invoice reconciliation data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/reconciliation/billed']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/reconciliation/billed']['response']> {
  return {
    method: 'get',
    path: '/reports/partners/billing/reconciliation/billed',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/reconciliation/billed`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/reconciliation/billed']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/reconciliation/billed']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/partners/billing/reconciliation/billed']['response']
> {
  return {
    method: 'patch',
    path: '/reports/partners/billing/reconciliation/billed',
    paramDefs: [],
    params,
    body,
  };
}
