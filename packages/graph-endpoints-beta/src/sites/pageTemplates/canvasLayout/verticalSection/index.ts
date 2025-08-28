export * as webparts from './webparts';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    'delete'
  >;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    'get'
  >;
  'PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    'patch'
  >;
}

/**
 * `DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection`
 *
 * Vertical section on the SharePoint page.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}
