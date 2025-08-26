import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/jobs/{jobResponseBase-id}': Operation<
    '/dataClassification/jobs/{jobResponseBase-id}',
    'delete'
  >;
  'GET /dataClassification/jobs': Operation<'/dataClassification/jobs', 'get'>;
  'GET /dataClassification/jobs/{jobResponseBase-id}': Operation<
    '/dataClassification/jobs/{jobResponseBase-id}',
    'get'
  >;
  'PATCH /dataClassification/jobs/{jobResponseBase-id}': Operation<
    '/dataClassification/jobs/{jobResponseBase-id}',
    'patch'
  >;
  'POST /dataClassification/jobs': Operation<'/dataClassification/jobs', 'post'>;
}

/**
 * `DELETE /dataClassification/jobs/{jobResponseBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/jobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /dataClassification/jobs/{jobResponseBase-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/jobs/{jobResponseBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/jobs`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/jobs']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/jobs',
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
 * `GET /dataClassification/jobs/{jobResponseBase-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/jobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/jobs/{jobResponseBase-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/jobs/{jobResponseBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'jobResponseBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/jobs/{jobResponseBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/jobs/{jobResponseBase-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/jobs/{jobResponseBase-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /dataClassification/jobs/{jobResponseBase-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/jobs/{jobResponseBase-id}',
    paramDefs: [{ name: 'jobResponseBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/jobs`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/jobs']['body'],
  params?: IEndpoints['POST /dataClassification/jobs']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/jobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/jobs',
    paramDefs: [],
    params,
    body,
  };
}
