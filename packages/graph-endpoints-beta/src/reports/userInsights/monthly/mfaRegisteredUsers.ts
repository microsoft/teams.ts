import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    'delete'
  >;
  'GET /reports/userInsights/monthly/mfaRegisteredUsers': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers',
    'get'
  >;
  'GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    'get'
  >;
  'PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    'patch'
  >;
  'POST /reports/userInsights/monthly/mfaRegisteredUsers': Operation<
    '/reports/userInsights/monthly/mfaRegisteredUsers',
    'post'
  >;
}

/**
 * `DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mfaUserCountMetric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/userInsights/monthly/mfaRegisteredUsers`
 *
 */
export function list(
  params?: IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/mfaRegisteredUsers',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mfaUserCountMetric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['body'],
  params?: IEndpoints['PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userInsights/monthly/mfaRegisteredUsers/{mfaUserCountMetric-id}',
    paramDefs: [{ name: 'mfaUserCountMetric-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/userInsights/monthly/mfaRegisteredUsers`
 *
 */
export function create(
  body: IEndpoints['POST /reports/userInsights/monthly/mfaRegisteredUsers']['body'],
  params?: IEndpoints['POST /reports/userInsights/monthly/mfaRegisteredUsers']['parameters']
): EndpointRequest<
  IEndpoints['POST /reports/userInsights/monthly/mfaRegisteredUsers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/userInsights/monthly/mfaRegisteredUsers',
    paramDefs: [],
    params,
    body,
  };
}
