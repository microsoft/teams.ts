export * as getPositionOfWebPart from './getPositionOfWebPart';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 * The set of web parts in this section.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
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
 * `GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 * The set of web parts in this section.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}
