export * as manifests from './manifests';
export * as operations from './operations';
export * as reconciliation from './reconciliation';
export * as usage from './usage';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing': Operation<'/reports/partners/billing', 'delete'>;
  'GET /reports/partners/billing': Operation<'/reports/partners/billing', 'get'>;
  'PATCH /reports/partners/billing': Operation<'/reports/partners/billing', 'patch'>;
}

/**
 * `DELETE /reports/partners/billing`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/partners/billing']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/partners/billing',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/partners/billing`
 *
 * Represents billing details for billed and unbilled data.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/partners/billing']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/partners/billing',
    paramDefs: [],
    params,
    body,
  };
}
