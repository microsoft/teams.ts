import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'delete'
  >;
  'GET /sites/{site-id}/documentProcessingJobs': Operation<
    '/sites/{site-id}/documentProcessingJobs',
    'get'
  >;
  'GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}': Operation<
    '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    'patch'
  >;
  'POST /sites/{site-id}/documentProcessingJobs': Operation<
    '/sites/{site-id}/documentProcessingJobs',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'documentProcessingJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/documentProcessingJobs`
 *
 * The document processing jobs running on this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/documentProcessingJobs']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/documentProcessingJobs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/documentProcessingJobs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
 *
 * The document processing jobs running on this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'documentProcessingJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/documentProcessingJobs/{documentProcessingJob-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'documentProcessingJob-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/documentProcessingJobs`
 *
 * Create a new documentProcessingJob object. The document processing job queues a document, or all documents in a folder, for processing by the applied content models.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/documentProcessingJobs']['body'],
  params?: IEndpoints['POST /sites/{site-id}/documentProcessingJobs']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/documentProcessingJobs']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/documentProcessingJobs',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
