export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/pages/{baseSitePage-id}': Operation<
    '/sites/{site-id}/pages/{baseSitePage-id}',
    'delete'
  >;
  'GET /sites/{site-id}/pages': Operation<'/sites/{site-id}/pages', 'get'>;
  'GET /sites/{site-id}/pages/{baseSitePage-id}': Operation<
    '/sites/{site-id}/pages/{baseSitePage-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/pages/{baseSitePage-id}': Operation<
    '/sites/{site-id}/pages/{baseSitePage-id}',
    'patch'
  >;
  'POST /sites/{site-id}/pages': Operation<'/sites/{site-id}/pages', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/pages/{baseSitePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/pages/{baseSitePage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/pages/{baseSitePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'baseSitePage-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/pages`
 *
 * Get the collection of baseSitePage objects from the site pages list in a site. All pages in the site are returned (with pagination). Sort alphabetically by name in ascending order. The following table lists the available subtypes.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/pages']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pages',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/pages/{baseSitePage-id}`
 *
 * Get the metadata for a baseSitePage in the site pages list in a site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/pages/{baseSitePage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/pages/{baseSitePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: {
      path: ['site-id', 'baseSitePage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/pages/{baseSitePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/pages/{baseSitePage-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: {
      path: ['site-id', 'baseSitePage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/pages`
 *
 * Create a new newsLinkPage in the site pages list of a site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/pages']['body'],
  params?: IEndpoints['POST /sites/{site-id}/pages']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/pages',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}
