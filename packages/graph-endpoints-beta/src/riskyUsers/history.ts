import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'delete'
  >;
  'GET /riskyUsers/{riskyUser-id}/history': Operation<'/riskyUsers/{riskyUser-id}/history', 'get'>;
  'GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'get'
  >;
  'PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}': Operation<
    '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    'patch'
  >;
  'POST /riskyUsers/{riskyUser-id}/history': Operation<
    '/riskyUsers/{riskyUser-id}/history',
    'post'
  >;
}

/**
 * `DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'riskyUser-id', in: 'path' },
      { name: 'riskyUserHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /riskyUsers/{riskyUser-id}/history`
 *
 * Get the risk history of a riskyUser resource.
 */
export function get(
  params?: IEndpoints['GET /riskyUsers/{riskyUser-id}/history']['parameters']
): EndpointRequest<IEndpoints['GET /riskyUsers/{riskyUser-id}/history']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskyUsers/{riskyUser-id}/history',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyUser-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
 *
 * Get a riskyUserHistoryItem object of a riskyUser.
 */
export function get$1(
  params?: IEndpoints['GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'riskyUser-id', in: 'path' },
      { name: 'riskyUserHistoryItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['body'],
  params?: IEndpoints['PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}',
    paramDefs: [
      { name: 'riskyUser-id', in: 'path' },
      { name: 'riskyUserHistoryItem-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /riskyUsers/{riskyUser-id}/history`
 *
 */
export function create(
  body: IEndpoints['POST /riskyUsers/{riskyUser-id}/history']['body'],
  params?: IEndpoints['POST /riskyUsers/{riskyUser-id}/history']['parameters']
): EndpointRequest<IEndpoints['POST /riskyUsers/{riskyUser-id}/history']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/riskyUsers/{riskyUser-id}/history',
    paramDefs: [{ name: 'riskyUser-id', in: 'path' }],
    params,
    body,
  };
}
