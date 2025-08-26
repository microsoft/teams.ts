import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /reports/partners/billing/manifests/{manifest-id}': Operation<
    '/reports/partners/billing/manifests/{manifest-id}',
    'delete'
  >;
  'GET /reports/partners/billing/manifests': Operation<
    '/reports/partners/billing/manifests',
    'get'
  >;
  'GET /reports/partners/billing/manifests/{manifest-id}': Operation<
    '/reports/partners/billing/manifests/{manifest-id}',
    'get'
  >;
  'PATCH /reports/partners/billing/manifests/{manifest-id}': Operation<
    '/reports/partners/billing/manifests/{manifest-id}',
    'patch'
  >;
  'POST /reports/partners/billing/manifests': Operation<
    '/reports/partners/billing/manifests',
    'post'
  >;
}

/**
 * `DELETE /reports/partners/billing/manifests/{manifest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /reports/partners/billing/manifests/{manifest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /reports/partners/billing/manifests/{manifest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/reports/partners/billing/manifests/{manifest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'manifest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /reports/partners/billing/manifests`
 *
 * Read the properties and relationships of a manifest object.
 */
export function list(
  params?: IEndpoints['GET /reports/partners/billing/manifests']['parameters']
): EndpointRequest<IEndpoints['GET /reports/partners/billing/manifests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing/manifests',
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
 * `GET /reports/partners/billing/manifests/{manifest-id}`
 *
 * Read the properties and relationships of a manifest object.
 */
export function get(
  params?: IEndpoints['GET /reports/partners/billing/manifests/{manifest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /reports/partners/billing/manifests/{manifest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/reports/partners/billing/manifests/{manifest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'manifest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /reports/partners/billing/manifests/{manifest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /reports/partners/billing/manifests/{manifest-id}']['body'],
  params?: IEndpoints['PATCH /reports/partners/billing/manifests/{manifest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /reports/partners/billing/manifests/{manifest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/reports/partners/billing/manifests/{manifest-id}',
    paramDefs: [{ name: 'manifest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /reports/partners/billing/manifests`
 *
 */
export function create(
  body: IEndpoints['POST /reports/partners/billing/manifests']['body'],
  params?: IEndpoints['POST /reports/partners/billing/manifests']['parameters']
): EndpointRequest<IEndpoints['POST /reports/partners/billing/manifests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/reports/partners/billing/manifests',
    paramDefs: [],
    params,
    body,
  };
}
