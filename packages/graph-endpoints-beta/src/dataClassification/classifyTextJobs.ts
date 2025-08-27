import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/classifyTextJobs': Operation<
    '/dataClassification/classifyTextJobs',
    'get'
  >;
  'GET /dataClassification/classifyTextJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}': Operation<
    '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    'patch'
  >;
  'POST /dataClassification/classifyTextJobs': Operation<
    '/dataClassification/classifyTextJobs',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/classifyTextJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/classifyTextJobs`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/classifyTextJobs']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/classifyTextJobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/classifyTextJobs',
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
 * `GET /dataClassification/classifyTextJobs/{jobResponseBase-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/classifyTextJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/classifyTextJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/classifyTextJobs/{jobResponseBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/classifyTextJobs/{jobResponseBase-id}',
    paramDefs: [{ name: 'jobResponseBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/classifyTextJobs`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/classifyTextJobs']['body'],
  params?: IEndpoints['POST /dataClassification/classifyTextJobs']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/classifyTextJobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/classifyTextJobs',
    paramDefs: [],
    params,
    body,
  };
}
