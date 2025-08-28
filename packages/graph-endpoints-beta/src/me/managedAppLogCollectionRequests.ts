import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'delete'
  >;
  'GET /me/managedAppLogCollectionRequests': Operation<
    '/me/managedAppLogCollectionRequests',
    'get'
  >;
  'GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'get'
  >;
  'PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'patch'
  >;
  'POST /me/managedAppLogCollectionRequests': Operation<
    '/me/managedAppLogCollectionRequests',
    'post'
  >;
}

/**
 * `DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppLogCollectionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedAppLogCollectionRequests`
 *
 * Zero or more log collection requests triggered for the user.
 */
export function list(
  params?: IEndpoints['GET /me/managedAppLogCollectionRequests']['parameters']
): EndpointRequest<IEndpoints['GET /me/managedAppLogCollectionRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedAppLogCollectionRequests',
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
 * `GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
 *
 * Zero or more log collection requests triggered for the user.
 */
export function get(
  params?: IEndpoints['GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppLogCollectionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    paramDefs: [{ name: 'managedAppLogCollectionRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/managedAppLogCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedAppLogCollectionRequests']['body'],
  params?: IEndpoints['POST /me/managedAppLogCollectionRequests']['parameters']
): EndpointRequest<IEndpoints['POST /me/managedAppLogCollectionRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedAppLogCollectionRequests',
    paramDefs: [],
    params,
    body,
  };
}
