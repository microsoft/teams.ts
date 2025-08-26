export * as daily from './daily';
export * as monthly from './monthly';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userInsights': Operation<'/reports/userInsights', 'delete'>;
  'GET /reports/userInsights': Operation<'/reports/userInsights', 'get'>;
  'PATCH /reports/userInsights': Operation<'/reports/userInsights', 'patch'>;
}

/**
 * `DELETE /reports/userInsights`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/userInsights']['parameters']
): EndpointRequest<IEndpoints['DELETE /reports/userInsights']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userInsights',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /reports/userInsights`
 *
 * Represents a collection of user activities on applications in a tenant that is configured for Microsoft Entra External ID for customers.
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/userInsights`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/userInsights']['body'],
  params?: IEndpoints['PATCH /reports/userInsights']['parameters']
): EndpointRequest<IEndpoints['PATCH /reports/userInsights']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userInsights',
    paramDefs: [],
    params,
    body,
  };
}
