export * as webparts from './webparts';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection`
 *
 * Vertical section on the SharePoint page.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    paramDefs: [
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
 * `PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}
