import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/evaluateDlpPoliciesJobs': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs',
    'get'
  >;
  'GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    'patch'
  >;
  'POST /dataClassification/evaluateDlpPoliciesJobs': Operation<
    '/dataClassification/evaluateDlpPoliciesJobs',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/evaluateDlpPoliciesJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/evaluateDlpPoliciesJobs',
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
 * `GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/evaluateDlpPoliciesJobs/{jobResponseBase-id}',
    paramDefs: [{ name: 'jobResponseBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/evaluateDlpPoliciesJobs`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/evaluateDlpPoliciesJobs']['body'],
  params?: IEndpoints['POST /dataClassification/evaluateDlpPoliciesJobs']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/evaluateDlpPoliciesJobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/evaluateDlpPoliciesJobs',
    paramDefs: [],
    params,
    body,
  };
}
