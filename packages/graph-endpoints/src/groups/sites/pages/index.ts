export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pages': Operation<
    '/groups/{group-id}/sites/{site-id}/pages',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/pages': Operation<
    '/groups/{group-id}/sites/{site-id}/pages',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'baseSitePage-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pages`
 *
 * The collection of pages in the baseSitePages list in this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pages',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}`
 *
 * The collection of pages in the baseSitePages list in this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'baseSitePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'baseSitePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/pages`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pages']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pages']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/pages']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/pages',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}
