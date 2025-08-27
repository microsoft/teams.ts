import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    'delete'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
    'get'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    'get'
  >;
  'PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    'patch'
  >;
  'POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
    'post'
  >;
}

/**
 * `DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}`
 *
 * Delete a browserSite from a browserSiteList.
 */
export function del(
  params?: IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'browserSiteList-id', in: 'path' },
      { name: 'browserSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites`
 *
 * Get a list of the browserSite objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'browserSiteList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}`
 *
 * Get a browserSite that resides on a browserSiteList.
 */
export function get(
  params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'browserSiteList-id', in: 'path' },
      { name: 'browserSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}`
 *
 * Update the properties of a browserSite object.
 */
export function update(
  body: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['body'],
  params?: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}',
    paramDefs: [
      { name: 'browserSiteList-id', in: 'path' },
      { name: 'browserSite-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites`
 *
 * Create a new browserSite object in a browserSiteList.
 */
export function create(
  body: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['body'],
  params?: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites',
    paramDefs: [{ name: 'browserSiteList-id', in: 'path' }],
    params,
    body,
  };
}
