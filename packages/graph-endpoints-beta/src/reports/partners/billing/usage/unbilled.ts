import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/usage/unbilled': Operation<
    '/reports/partners/billing/usage/unbilled',
    'delete'
  >;
  'GET /reports/partners/billing/usage/unbilled': Operation<
    '/reports/partners/billing/usage/unbilled',
    'get'
  >;
  'PATCH /reports/partners/billing/usage/unbilled': Operation<
    '/reports/partners/billing/usage/unbilled',
    'patch'
  >;
}

/**
 * `DELETE /reports/partners/billing/usage/unbilled`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/usage/unbilled']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/usage/unbilled']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/partners/billing/usage/unbilled',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/partners/billing/usage/unbilled`
 *
 * Represents details for unbilled Azure usage data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/usage/unbilled']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/usage/unbilled']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing/usage/unbilled',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/usage/unbilled`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/usage/unbilled']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/usage/unbilled']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/usage/unbilled']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/partners/billing/usage/unbilled',
    paramDefs: [],
    params,
    body,
  };
}
