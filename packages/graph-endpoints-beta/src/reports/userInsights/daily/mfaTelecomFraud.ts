import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    'delete'
  >;
  'GET /reports/userInsights/daily/mfaTelecomFraud': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud',
    'get'
  >;
  'GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    'get'
  >;
  'PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    'patch'
  >;
  'POST /reports/userInsights/daily/mfaTelecomFraud': Operation<
    '/reports/userInsights/daily/mfaTelecomFraud',
    'post'
  >;
}

/**
 * `DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mfaTelecomFraudMetric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/userInsights/daily/mfaTelecomFraud`
 *
 */
export function get(
  params?: IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud']['parameters']
): EndpointRequest<IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/mfaTelecomFraud',
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
 * `GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mfaTelecomFraudMetric-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['body'],
  params?: IEndpoints['PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/userInsights/daily/mfaTelecomFraud/{mfaTelecomFraudMetric-id}',
    paramDefs: [{ name: 'mfaTelecomFraudMetric-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/userInsights/daily/mfaTelecomFraud`
 *
 */
export function create(
  body: IEndpoints['POST /reports/userInsights/daily/mfaTelecomFraud']['body'],
  params?: IEndpoints['POST /reports/userInsights/daily/mfaTelecomFraud']['parameters']
): EndpointRequest<IEndpoints['POST /reports/userInsights/daily/mfaTelecomFraud']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/userInsights/daily/mfaTelecomFraud',
    paramDefs: [],
    params,
    body,
  };
}
