import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'delete'
  >;
  'GET /users/{user-id}/settings/storage/quota/services': Operation<
    '/users/{user-id}/settings/storage/quota/services',
    'get'
  >;
  'GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'get'
  >;
  'PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'patch'
  >;
  'POST /users/{user-id}/settings/storage/quota/services': Operation<
    '/users/{user-id}/settings/storage/quota/services',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'serviceStorageQuotaBreakdown-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/storage/quota/services`
 *
 * The breakdown of services contributing to the user&#x27;s quota usage.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/storage/quota/services']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/storage/quota/services']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/storage/quota/services',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 * The breakdown of services contributing to the user&#x27;s quota usage.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'serviceStorageQuotaBreakdown-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'serviceStorageQuotaBreakdown-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/settings/storage/quota/services`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/settings/storage/quota/services']['body'],
  params?: IEndpoints['POST /users/{user-id}/settings/storage/quota/services']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/settings/storage/quota/services']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/settings/storage/quota/services',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
