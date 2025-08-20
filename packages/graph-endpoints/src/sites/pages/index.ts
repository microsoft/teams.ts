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
 * Delete a baseSitePage from the site pages list in a site.
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/pages/{baseSitePage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/pages/{baseSitePage-id}']['response']> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
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
    method: 'get',
    path: '/sites/{site-id}/pages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
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
    method: 'get',
    path: '/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/sites/{site-id}/pages/{baseSitePage-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'baseSitePage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/pages`
 *
 * Create a new sitePage in the site pages list in a site.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/pages']['body'],
  params?: IEndpoints['POST /sites/{site-id}/pages']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/pages']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/pages',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
