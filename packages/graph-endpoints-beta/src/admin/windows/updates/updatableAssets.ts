import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    'delete'
  >;
  'GET /admin/windows/updates/updatableAssets': Operation<
    '/admin/windows/updates/updatableAssets',
    'get'
  >;
  'GET /admin/windows/updates/updatableAssets/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}': Operation<
    '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    'patch'
  >;
  'POST /admin/windows/updates/updatableAssets': Operation<
    '/admin/windows/updates/updatableAssets',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}`
 *
 * Delete an updatableAsset object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/updatableAssets`
 *
 * Get a list of updatableAsset objects and their properties. Listing updatable assets returns updatableAsset resources of the following derived types: azureADDevice and updatableAssetGroup. Use list azureADDevice resources or list updatableAssetGroup resources to filter and get resources of only one of the derived types.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/updatableAssets']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/updatableAssets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatableAssets',
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
 * `GET /admin/windows/updates/updatableAssets/{updatableAsset-id}`
 *
 * Read the properties and relationships of an updatableAsset object.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/updatableAssets/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/updatableAssets/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'updatableAsset-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/updatableAssets/{updatableAsset-id}',
    paramDefs: [{ name: 'updatableAsset-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/updatableAssets`
 *
 * Create a new updatableAssetGroup object. The updatableAssetGroup resource inherits from updatableAsset.
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/updatableAssets']['body'],
  params?: IEndpoints['POST /admin/windows/updates/updatableAssets']['parameters']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/updatableAssets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/updatableAssets',
    paramDefs: [],
    params,
    body,
  };
}
