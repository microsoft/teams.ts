import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    'delete'
  >;
  'GET /storage/settings/quota/services': Operation<'/storage/settings/quota/services', 'get'>;
  'GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    'get'
  >;
  'PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    'patch'
  >;
  'POST /storage/settings/quota/services': Operation<'/storage/settings/quota/services', 'post'>;
}

/**
 * `DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceStorageQuotaBreakdown-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/settings/quota/services`
 *
 * The breakdown of services contributing to the user&#x27;s quota usage.
 */
export function list(
  params?: IEndpoints['GET /storage/settings/quota/services']['parameters']
): EndpointRequest<IEndpoints['GET /storage/settings/quota/services']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/settings/quota/services',
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
 * `GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 * The breakdown of services contributing to the user&#x27;s quota usage.
 */
export function get(
  params?: IEndpoints['GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceStorageQuotaBreakdown-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['body'],
  params?: IEndpoints['PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    paramDefs: [{ name: 'serviceStorageQuotaBreakdown-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /storage/settings/quota/services`
 *
 */
export function create(
  body: IEndpoints['POST /storage/settings/quota/services']['body'],
  params?: IEndpoints['POST /storage/settings/quota/services']['parameters']
): EndpointRequest<IEndpoints['POST /storage/settings/quota/services']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/settings/quota/services',
    paramDefs: [],
    params,
    body,
  };
}
