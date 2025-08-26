export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/buckets/{plannerBucket-id}': Operation<
    '/planner/buckets/{plannerBucket-id}',
    'delete'
  >;
  'GET /planner/buckets': Operation<'/planner/buckets', 'get'>;
  'GET /planner/buckets/{plannerBucket-id}': Operation<
    '/planner/buckets/{plannerBucket-id}',
    'get'
  >;
  'PATCH /planner/buckets/{plannerBucket-id}': Operation<
    '/planner/buckets/{plannerBucket-id}',
    'patch'
  >;
  'POST /planner/buckets': Operation<'/planner/buckets', 'post'>;
}

/**
 * `DELETE /planner/buckets/{plannerBucket-id}`
 *
 * Delete plannerBucket.
 */
export function del(
  params?: IEndpoints['DELETE /planner/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/buckets/{plannerBucket-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/buckets`
 *
 * Retrieve a list of plannerbucket objects.
 */
export function list(
  params?: IEndpoints['GET /planner/buckets']['parameters']
): EndpointRequest<IEndpoints['GET /planner/buckets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/buckets',
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
 * `GET /planner/buckets/{plannerBucket-id}`
 *
 * Retrieve the properties and relationships of a plannerBucket object.
 */
export function get(
  params?: IEndpoints['GET /planner/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<IEndpoints['GET /planner/buckets/{plannerBucket-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/buckets/{plannerBucket-id}`
 *
 * Update the properties of plannerbucket object.
 */
export function update(
  body: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}']['body'],
  params?: IEndpoints['PATCH /planner/buckets/{plannerBucket-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/buckets/{plannerBucket-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/buckets/{plannerBucket-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerBucket-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /planner/buckets`
 *
 * Create a new plannerBucket object.
 */
export function create(
  body: IEndpoints['POST /planner/buckets']['body'],
  params?: IEndpoints['POST /planner/buckets']['parameters']
): EndpointRequest<IEndpoints['POST /planner/buckets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/planner/buckets',
    paramDefs: [],
    params,
    body,
  };
}
