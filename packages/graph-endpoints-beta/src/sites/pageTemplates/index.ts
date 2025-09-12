export * as canvasLayout from './canvasLayout';
export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as webParts from './webParts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}',
    'delete'
  >;
  'GET /sites/{site-id}/pageTemplates': Operation<'/sites/{site-id}/pageTemplates', 'get'>;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}',
    'patch'
  >;
  'POST /sites/{site-id}/pageTemplates': Operation<'/sites/{site-id}/pageTemplates', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'pageTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates`
 *
 * The collection of page templates on this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/pageTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}`
 *
 * The collection of page templates on this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}',
    paramDefs: {
      path: ['site-id', 'pageTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}',
    paramDefs: {
      path: ['site-id', 'pageTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/pageTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/pageTemplates']['body'],
  params?: IEndpoints['POST /sites/{site-id}/pageTemplates']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/pageTemplates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/pageTemplates',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}
