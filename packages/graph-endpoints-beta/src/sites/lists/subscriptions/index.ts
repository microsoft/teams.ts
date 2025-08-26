export * as reauthorize from './reauthorize';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/subscriptions': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /sites/{site-id}/lists/{list-id}/subscriptions': Operation<
    '/sites/{site-id}/lists/{list-id}/subscriptions',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/subscriptions`
 *
 * The set of subscriptions on the list.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions',
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
      { name: 'list-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the list.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/lists/{list-id}/subscriptions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/subscriptions',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}
