import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/security': Operation<'/reports/security', 'delete'>;
  'GET /reports/security': Operation<'/reports/security', 'get'>;
  'PATCH /reports/security': Operation<'/reports/security', 'patch'>;
}

/**
 * `DELETE /reports/security`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/security']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/security']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/security',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/security`
 *
 * Provides the ability to launch a simulated phishing attack that organizations can learn from.
 */
export function get(
  params?: IEndpoints['GET /reports/security']['parameters']
): EndpointRequest<IEndpoints['GET /reports/security']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/security',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/security`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/security']['body'],
  params?: IEndpoints['PATCH /reports/security']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/security']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/security',
    paramDefs: [],
    params,
    body,
  };
}
