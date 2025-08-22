export * as add from './add';
export * as analytics from './analytics';
export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as drive from './drive';
export * as drives from './drives';
export * as externalColumns from './externalColumns';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as lists from './lists';
export * as onenote from './onenote';
export * as operations from './operations';
export * as pages from './pages';
export * as permissions from './permissions';
export * as remove from './remove';
export * as sitesSites from './sitesSites';
export * as termStore from './termStore';
export * as termStores from './termStores';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /sites': Operation<'/sites', 'get'>;
  'GET /sites/{site-id}': Operation<'/sites/{site-id}', 'get'>;
  'PATCH /sites/{site-id}': Operation<'/sites/{site-id}', 'patch'>;
}

/**
 * `GET /sites`
 *
 * Search across a SharePoint tenant for sites that match keywords provided. The only property that works for sorting is createdDateTime. The search filter is a free text search that uses multiple properties when retrieving the search results.
 */
export function list(
  params?: IEndpoints['GET /sites']['parameters']
): EndpointRequest<IEndpoints['GET /sites']['response']> {
  return {
    method: 'get',
    path: '/sites',
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
  * `GET /sites/{site-id}`
  *
  * Retrieve properties and relationships for a site resource.
A site resource represents a team site in SharePoint.
  */
export function get(
  params?: IEndpoints['GET /sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
