import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/operations': Operation<
    '/sites/{site-id}/onenote/operations',
    'get'
  >;
  'GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}': Operation<
    '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/operations': Operation<
    '/sites/{site-id}/onenote/operations',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/operations`
 *
 * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/operations']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/operations',
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
 * `GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
 *
 * The status of OneNote operations. Getting an operations collection isn&#x27;t supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/operations/{onenoteOperation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/onenote/operations/{onenoteOperation-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'onenoteOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/operations`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/operations']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/operations']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/operations']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/onenote/operations',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
