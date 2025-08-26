import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}': Operation<
    '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    'delete'
  >;
  'GET /admin/windows/updates/catalog/entries': Operation<
    '/admin/windows/updates/catalog/entries',
    'get'
  >;
  'GET /admin/windows/updates/catalog/entries/{catalogEntry-id}': Operation<
    '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}': Operation<
    '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    'patch'
  >;
  'POST /admin/windows/updates/catalog/entries': Operation<
    '/admin/windows/updates/catalog/entries',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'catalogEntry-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/catalog/entries`
 *
 * Get a list of catalogEntry resources from the catalog. Currently, this operation returns entries of the featureUpdateCatalogEntry or qualityUpdateCatalog types, inherited from catalogEntry.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/catalog/entries']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/catalog/entries']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/catalog/entries',
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
 * `GET /admin/windows/updates/catalog/entries/{catalogEntry-id}`
 *
 * Lists the content that you can approve for deployment. Read-only.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/catalog/entries/{catalogEntry-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/catalog/entries/{catalogEntry-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'catalogEntry-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/catalog/entries/{catalogEntry-id}',
    paramDefs: [{ name: 'catalogEntry-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/catalog/entries`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/catalog/entries']['body'],
  params?: IEndpoints['POST /admin/windows/updates/catalog/entries']['parameters']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/catalog/entries']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/catalog/entries',
    paramDefs: [],
    params,
    body,
  };
}
