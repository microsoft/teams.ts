import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'delete'
  >;
  'GET /sites/{site-id}/operations': Operation<'/sites/{site-id}/operations', 'get'>;
  'GET /sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}': Operation<
    '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'POST /sites/{site-id}/operations': Operation<'/sites/{site-id}/operations', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/operations`
 *
 * Get the list of richLongRunningOperations associated with a site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/operations']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/operations',
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
 * `GET /sites/{site-id}/operations/{richLongRunningOperation-id}`
 *
 * Read the properties of a richLongRunningOperation object.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/operations/{richLongRunningOperation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/operations/{richLongRunningOperation-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'richLongRunningOperation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/operations`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/operations']['body'],
  params?: IEndpoints['POST /sites/{site-id}/operations']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/operations',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
