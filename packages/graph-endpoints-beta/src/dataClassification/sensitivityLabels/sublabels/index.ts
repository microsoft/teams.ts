export * as computeRightsAndInheritance from './computeRightsAndInheritance';
export * as evaluate from './evaluate';
export * as rights from './rights';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'delete'
  >;
  'GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'get'
  >;
  'GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'get'
  >;
  'PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'patch'
  >;
  'POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'post'
  >;
}

/**
 * `DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['body'],
  params?: IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: [
      { name: 'sensitivityLabel-id', in: 'path' },
      { name: 'sensitivityLabel-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels']['body'],
  params?: IEndpoints['POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: [{ name: 'sensitivityLabel-id', in: 'path' }],
    params,
    body,
  };
}
