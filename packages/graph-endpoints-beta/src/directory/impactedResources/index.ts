export * as complete from './complete';
export * as dismiss from './dismiss';
export * as postpone from './postpone';
export * as reactivate from './reactivate';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/impactedResources/{impactedResource-id}': Operation<
    '/directory/impactedResources/{impactedResource-id}',
    'delete'
  >;
  'GET /directory/impactedResources': Operation<'/directory/impactedResources', 'get'>;
  'GET /directory/impactedResources/{impactedResource-id}': Operation<
    '/directory/impactedResources/{impactedResource-id}',
    'get'
  >;
  'PATCH /directory/impactedResources/{impactedResource-id}': Operation<
    '/directory/impactedResources/{impactedResource-id}',
    'patch'
  >;
  'POST /directory/impactedResources': Operation<'/directory/impactedResources', 'post'>;
}

/**
 * `DELETE /directory/impactedResources/{impactedResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/impactedResources/{impactedResource-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'impactedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/impactedResources`
 *
 */
export function list(
  params?: IEndpoints['GET /directory/impactedResources']['parameters']
): EndpointRequest<IEndpoints['GET /directory/impactedResources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/impactedResources',
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
 * `GET /directory/impactedResources/{impactedResource-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /directory/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/impactedResources/{impactedResource-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'impactedResource-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/impactedResources/{impactedResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/impactedResources/{impactedResource-id}']['body'],
  params?: IEndpoints['PATCH /directory/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/impactedResources/{impactedResource-id}',
    paramDefs: [{ name: 'impactedResource-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/impactedResources`
 *
 */
export function create(
  body: IEndpoints['POST /directory/impactedResources']['body'],
  params?: IEndpoints['POST /directory/impactedResources']['parameters']
): EndpointRequest<IEndpoints['POST /directory/impactedResources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/impactedResources',
    paramDefs: [],
    params,
    body,
  };
}
