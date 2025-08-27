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

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites': Operation<'/groups/{group-id}/sites', 'get'>;
  'GET /groups/{group-id}/sites/{site-id}': Operation<'/groups/{group-id}/sites/{site-id}', 'get'>;
  'PATCH /groups/{group-id}/sites/{site-id}': Operation<
    '/groups/{group-id}/sites/{site-id}',
    'patch'
  >;
}

/**
 * `GET /groups/{group-id}/sites`
 *
 * The list of SharePoint sites in this group. Access the default site with /sites/root.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}`
 *
 * The list of SharePoint sites in this group. Access the default site with /sites/root.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/sites/{site-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
