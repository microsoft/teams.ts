import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/usage/billed': Operation<
    '/reports/partners/billing/usage/billed',
    'delete'
  >;
  'GET /reports/partners/billing/usage/billed': Operation<
    '/reports/partners/billing/usage/billed',
    'get'
  >;
  'PATCH /reports/partners/billing/usage/billed': Operation<
    '/reports/partners/billing/usage/billed',
    'patch'
  >;
}

/**
 * `DELETE /reports/partners/billing/usage/billed`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/usage/billed']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/usage/billed']['response']> {
  return {
    method: 'delete',
    path: '/reports/partners/billing/usage/billed',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/partners/billing/usage/billed`
 *
 * Represents details for billed Azure usage data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/usage/billed']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/usage/billed']['response']> {
  return {
    method: 'get',
    path: '/reports/partners/billing/usage/billed',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/usage/billed`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/usage/billed']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/usage/billed']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/usage/billed']['response']> {
  return {
    method: 'patch',
    path: '/reports/partners/billing/usage/billed',
    paramDefs: [],
    params,
    body,
  };
}
