export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as evaluate from './evaluate';
export * as rights from './rights';
export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /dataClassification/sensitivityLabels': Operation<
    '/dataClassification/sensitivityLabels',
    'get'
  >;
  'GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /dataClassification/sensitivityLabels': Operation<
    '/dataClassification/sensitivityLabels',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitivityLabels',
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
 * `GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/sensitivityLabels']['body'],
  params?: IEndpoints['POST /dataClassification/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['POST /dataClassification/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/sensitivityLabels',
    paramDefs: [],
    params,
    body,
  };
}
