import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/reconciliation/unbilled': Operation<
    '/reports/partners/billing/reconciliation/unbilled',
    'delete'
  >;
  'GET /reports/partners/billing/reconciliation/unbilled': Operation<
    '/reports/partners/billing/reconciliation/unbilled',
    'get'
  >;
  'PATCH /reports/partners/billing/reconciliation/unbilled': Operation<
    '/reports/partners/billing/reconciliation/unbilled',
    'patch'
  >;
}

/**
 * `DELETE /reports/partners/billing/reconciliation/unbilled`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/reconciliation/unbilled']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/partners/billing/reconciliation/unbilled']['response']
> {
  return {
    method: 'delete',
    path: '/reports/partners/billing/reconciliation/unbilled',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/partners/billing/reconciliation/unbilled`
 *
 * Represents details for unbilled invoice reconciliation data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/reconciliation/unbilled']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/partners/billing/reconciliation/unbilled']['response']
> {
  return {
    method: 'get',
    path: '/reports/partners/billing/reconciliation/unbilled',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/reconciliation/unbilled`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/reconciliation/unbilled']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/reconciliation/unbilled']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/partners/billing/reconciliation/unbilled']['response']
> {
  return {
    method: 'patch',
    path: '/reports/partners/billing/reconciliation/unbilled',
    paramDefs: [],
    params,
    body,
  };
}
