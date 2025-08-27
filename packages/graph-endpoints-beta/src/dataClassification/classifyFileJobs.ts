import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/classifyFileJobs': Operation<
    '/dataClassification/classifyFileJobs',
    'get'
  >;
  'GET /dataClassification/classifyFileJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    'patch'
  >;
  'POST /dataClassification/classifyFileJobs': Operation<
    '/dataClassification/classifyFileJobs',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/classifyFileJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/classifyFileJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/classifyFileJobs']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/classifyFileJobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/classifyFileJobs',
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
 * `GET /dataClassification/classifyFileJobs/{jobResponseBase-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/classifyFileJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/classifyFileJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/classifyFileJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/classifyFileJobs/{jobResponseBase-id}',
    paramDefs: [{ name: 'jobResponseBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/classifyFileJobs`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/classifyFileJobs']['body'],
  params?: IEndpoints['POST /dataClassification/classifyFileJobs']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/classifyFileJobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/classifyFileJobs',
    paramDefs: [],
    params,
    body,
  };
}
