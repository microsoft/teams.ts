export * as reauthorize from './reauthorize';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/subscriptions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/subscriptions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/subscriptions`
 *
 * The set of subscriptions on the item. Only supported on the root of a drive.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the item. Only supported on the root of a drive.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/subscriptions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/subscriptions',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
