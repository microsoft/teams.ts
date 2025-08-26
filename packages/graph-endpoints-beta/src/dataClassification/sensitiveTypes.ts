import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}': Operation<
    '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    'delete'
  >;
  'GET /dataClassification/sensitiveTypes': Operation<'/dataClassification/sensitiveTypes', 'get'>;
  'GET /dataClassification/sensitiveTypes/{sensitiveType-id}': Operation<
    '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    'get'
  >;
  'PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}': Operation<
    '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    'patch'
  >;
  'POST /dataClassification/sensitiveTypes': Operation<
    '/dataClassification/sensitiveTypes',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/sensitiveTypes/{sensitiveType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitiveType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/sensitiveTypes`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/sensitiveTypes']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/sensitiveTypes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitiveTypes',
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
 * `GET /dataClassification/sensitiveTypes/{sensitiveType-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/sensitiveTypes/{sensitiveType-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/sensitiveTypes/{sensitiveType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitiveType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/sensitiveTypes/{sensitiveType-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/sensitiveTypes/{sensitiveType-id}',
    paramDefs: [{ name: 'sensitiveType-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/sensitiveTypes`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/sensitiveTypes']['body'],
  params?: IEndpoints['POST /dataClassification/sensitiveTypes']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/sensitiveTypes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/sensitiveTypes',
    paramDefs: [],
    params,
    body,
  };
}
