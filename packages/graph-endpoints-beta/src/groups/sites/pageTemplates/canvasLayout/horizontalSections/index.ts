export * as columns from './columns';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections`
 *
 * Collection of horizontal sections on the SharePoint page.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections',
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
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}`
 *
 * Collection of horizontal sections on the SharePoint page.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}
