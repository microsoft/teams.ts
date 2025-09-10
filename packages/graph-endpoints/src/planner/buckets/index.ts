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
    method: 'delete',
    path: '/planner/buckets/{plannerBucket-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerBucket-id'],
    },
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
    method: 'get',
    path: '/planner/buckets',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    method: 'get',
    path: '/planner/buckets/{plannerBucket-id}',
    paramDefs: {
      path: ['plannerBucket-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/planner/buckets/{plannerBucket-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['plannerBucket-id'],
    },
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
  body: IEndpoints['POST /planner/buckets']['body']
): EndpointRequest<IEndpoints['POST /planner/buckets']['response']> {
  return {
    method: 'post',
    path: '/planner/buckets',
    body,
  };
}
