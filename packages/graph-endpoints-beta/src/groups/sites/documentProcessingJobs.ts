import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs': Operation<
    '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'documentProcessingJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs`
 *
 * The document processing jobs running on this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
 *
 * The document processing jobs running on this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'documentProcessingJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'documentProcessingJob-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/documentProcessingJobs']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/documentProcessingJobs',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
