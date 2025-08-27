export * as publish from './publish';
export * as sharedCookies from './sharedCookies';
export * as sites from './sites';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    'delete'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists': Operation<
    '/admin/edge/internetExplorerMode/siteLists',
    'get'
  >;
  'GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    'get'
  >;
  'PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}': Operation<
    '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    'patch'
  >;
  'POST /admin/edge/internetExplorerMode/siteLists': Operation<
    '/admin/edge/internetExplorerMode/siteLists',
    'post'
  >;
}

/**
 * `DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}`
 *
 * Delete a browserSiteList object.
 */
export function del(
  params?: IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['response']
> {
  return {
    method: 'delete',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'browserSiteList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/edge/internetExplorerMode/siteLists`
 *
 * Get a list of the browserSiteList objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists']['parameters']
): EndpointRequest<IEndpoints['GET /admin/edge/internetExplorerMode/siteLists']['response']> {
  return {
    method: 'get',
    path: '/admin/edge/internetExplorerMode/siteLists',
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
 * `GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}`
 *
 * Get a browserSiteList that contains browserSite and browserSharedCookie resources.
 */
export function get(
  params?: IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['response']
> {
  return {
    method: 'get',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'browserSiteList-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}`
 *
 * Update the properties of a browserSiteList object.
 */
export function update(
  body: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['body'],
  params?: IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}']['response']
> {
  return {
    method: 'patch',
    path: '/admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}',
    paramDefs: [{ name: 'browserSiteList-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/edge/internetExplorerMode/siteLists`
 *
 * Create a new browserSiteList object to support Internet Explorer mode.
 */
export function create(
  body: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists']['body'],
  params?: IEndpoints['POST /admin/edge/internetExplorerMode/siteLists']['parameters']
): EndpointRequest<IEndpoints['POST /admin/edge/internetExplorerMode/siteLists']['response']> {
  return {
    method: 'post',
    path: '/admin/edge/internetExplorerMode/siteLists',
    paramDefs: [],
    params,
    body,
  };
}
