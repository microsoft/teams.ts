import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'delete'
  >;
  'GET /me/settings/storage/quota/services': Operation<
    '/me/settings/storage/quota/services',
    'get'
  >;
  'GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'get'
  >;
  'PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'patch'
  >;
  'POST /me/settings/storage/quota/services': Operation<
    '/me/settings/storage/quota/services',
    'post'
  >;
}

/**
 * `DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceStorageQuotaBreakdown-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/settings/storage/quota/services`
 *
 * Get a list of serviceStorageQuotaBreakdown objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /me/settings/storage/quota/services']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/storage/quota/services']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/storage/quota/services',
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
 * `GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 * The breakdown of services contributing to the user&#x27;s quota usage.
 */
export function get(
  params?: IEndpoints['GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceStorageQuotaBreakdown-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['body'],
  params?: IEndpoints['PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [{ name: 'serviceStorageQuotaBreakdown-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/settings/storage/quota/services`
 *
 */
export function create(
  body: IEndpoints['POST /me/settings/storage/quota/services']['body'],
  params?: IEndpoints['POST /me/settings/storage/quota/services']['parameters']
): EndpointRequest<IEndpoints['POST /me/settings/storage/quota/services']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/settings/storage/quota/services',
    paramDefs: [],
    params,
    body,
  };
}
