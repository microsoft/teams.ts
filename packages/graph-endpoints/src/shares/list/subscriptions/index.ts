export * as reauthorize from './reauthorize';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/subscriptions': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/subscriptions': Operation<
    '/shares/{sharedDriveItem-id}/list/subscriptions',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/subscriptions`
 *
 * The set of subscriptions on the list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}`
 *
 * The set of subscriptions on the list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'subscription-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/subscriptions`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/subscriptions']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/subscriptions',
    paramDefs: [{ name: 'sharedDriveItem-id', in: 'path' }],
    params,
    body,
  };
}
