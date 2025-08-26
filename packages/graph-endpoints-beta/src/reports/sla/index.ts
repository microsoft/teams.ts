export * as azureADAuthentication from './azureADAuthentication';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/sla': Operation<'/reports/sla', 'delete'>;
  'GET /reports/sla': Operation<'/reports/sla', 'get'>;
  'PATCH /reports/sla': Operation<'/reports/sla', 'patch'>;
}

/**
 * `DELETE /reports/sla`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/sla']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/sla']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/sla',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/sla`
 *
 * Reports that relate to tenant-level Microsoft Entra Health SLA attainment.
 */
export function get(
  params?: IEndpoints['GET /reports/sla']['parameters']
): EndpointRequest<IEndpoints['GET /reports/sla']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/sla',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/sla`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/sla']['body'],
  params?: IEndpoints['PATCH /reports/sla']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/sla']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/sla',
    paramDefs: [],
    params,
    body,
  };
}
