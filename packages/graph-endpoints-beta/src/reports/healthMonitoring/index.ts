export * as alertConfigurations from './alertConfigurations';
export * as alerts from './alerts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/healthMonitoring': Operation<'/reports/healthMonitoring', 'delete'>;
  'GET /reports/healthMonitoring': Operation<'/reports/healthMonitoring', 'get'>;
  'PATCH /reports/healthMonitoring': Operation<'/reports/healthMonitoring', 'patch'>;
}

/**
 * `DELETE /reports/healthMonitoring`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/healthMonitoring']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/healthMonitoring']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/healthMonitoring',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/healthMonitoring`
 *
 * Reports for Microsoft Entra Health Monitoring.
 */
export function get(
  params?: IEndpoints['GET /reports/healthMonitoring']['parameters']
): EndpointRequest<IEndpoints['GET /reports/healthMonitoring']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/healthMonitoring',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/healthMonitoring`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/healthMonitoring']['body'],
  params?: IEndpoints['PATCH /reports/healthMonitoring']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/healthMonitoring']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/healthMonitoring',
    paramDefs: [],
    params,
    body,
  };
}
