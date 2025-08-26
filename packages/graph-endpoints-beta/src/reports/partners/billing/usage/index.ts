export * as billed from './billed';
export * as unbilled from './unbilled';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/usage': Operation<'/reports/partners/billing/usage', 'delete'>;
  'GET /reports/partners/billing/usage': Operation<'/reports/partners/billing/usage', 'get'>;
  'PATCH /reports/partners/billing/usage': Operation<'/reports/partners/billing/usage', 'patch'>;
}

/**
 * `DELETE /reports/partners/billing/usage`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/usage']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing/usage']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/partners/billing/usage',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/partners/billing/usage`
 *
 * Represents details for billed and unbilled Azure usage data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/usage']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/usage']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing/usage',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/usage`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/usage']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/usage']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing/usage']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/partners/billing/usage',
    paramDefs: [],
    params,
    body,
  };
}
