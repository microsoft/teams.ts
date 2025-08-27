import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/evaluateLabelJobs': Operation<
    '/dataClassification/evaluateLabelJobs',
    'get'
  >;
  'GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    'patch'
  >;
  'POST /dataClassification/evaluateLabelJobs': Operation<
    '/dataClassification/evaluateLabelJobs',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/evaluateLabelJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/evaluateLabelJobs']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/evaluateLabelJobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/evaluateLabelJobs',
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
 * `GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/evaluateLabelJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/evaluateLabelJobs/{jobResponseBase-id}',
    paramDefs: [{ name: 'jobResponseBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/evaluateLabelJobs`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/evaluateLabelJobs']['body'],
  params?: IEndpoints['POST /dataClassification/evaluateLabelJobs']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/evaluateLabelJobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/evaluateLabelJobs',
    paramDefs: [],
    params,
    body,
  };
}
