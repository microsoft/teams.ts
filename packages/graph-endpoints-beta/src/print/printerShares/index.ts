export * as allowedGroups from './allowedGroups';
export * as allowedUsers from './allowedUsers';
export * as jobs from './jobs';
export * as printer from './printer';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/printerShares/{printerShare-id}': Operation<
    '/print/printerShares/{printerShare-id}',
    'delete'
  >;
  'GET /print/printerShares': Operation<'/print/printerShares', 'get'>;
  'GET /print/printerShares/{printerShare-id}': Operation<
    '/print/printerShares/{printerShare-id}',
    'get'
  >;
  'PATCH /print/printerShares/{printerShare-id}': Operation<
    '/print/printerShares/{printerShare-id}',
    'patch'
  >;
  'POST /print/printerShares': Operation<'/print/printerShares', 'post'>;
}

/**
 * `DELETE /print/printerShares/{printerShare-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /print/printerShares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/printerShares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/printerShares/{printerShare-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/printerShares`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /print/printerShares']['parameters']
): EndpointRequest<IEndpoints['GET /print/printerShares']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares',
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
 * `GET /print/printerShares/{printerShare-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /print/printerShares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/printerShares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/printerShares/{printerShare-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printerShare-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/printerShares/{printerShare-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /print/printerShares/{printerShare-id}']['body'],
  params?: IEndpoints['PATCH /print/printerShares/{printerShare-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/printerShares/{printerShare-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/printerShares/{printerShare-id}',
    paramDefs: [{ name: 'printerShare-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /print/printerShares`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares']['body'],
  params?: IEndpoints['POST /print/printerShares']['parameters']
): EndpointRequest<IEndpoints['POST /print/printerShares']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares',
    paramDefs: [],
    params,
    body,
  };
}
