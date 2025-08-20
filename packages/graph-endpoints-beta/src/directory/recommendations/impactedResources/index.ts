export * as complete from './complete';
export * as dismiss from './dismiss';
export * as postpone from './postpone';
export * as reactivate from './reactivate';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    'delete'
  >;
  'GET /directory/recommendations/{recommendation-id}/impactedResources': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources',
    'get'
  >;
  'GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    'get'
  >;
  'PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    'patch'
  >;
  'POST /directory/recommendations/{recommendation-id}/impactedResources': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources',
    'post'
  >;
}

/**
 * `DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'recommendation-id', in: 'path' },
      { name: 'impactedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/recommendations/{recommendation-id}/impactedResources`
 *
 * Get the impactedResource objects for a recommendation.
 */
export function list(
  params?: IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations/{recommendation-id}/impactedResources',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'recommendation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}`
 *
 * Read the properties and relationships of an impactedResource object.
 */
export function get(
  params?: IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'recommendation-id', in: 'path' },
      { name: 'impactedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['body'],
  params?: IEndpoints['PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    paramDefs: [
      { name: 'recommendation-id', in: 'path' },
      { name: 'impactedResource-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directory/recommendations/{recommendation-id}/impactedResources`
 *
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/impactedResources',
    paramDefs: [{ name: 'recommendation-id', in: 'path' }],
    params,
    body,
  };
}
