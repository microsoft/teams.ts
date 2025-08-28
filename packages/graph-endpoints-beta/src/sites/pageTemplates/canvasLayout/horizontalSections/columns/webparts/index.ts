export * as getPositionOfWebPart from './getPositionOfWebPart';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    'delete'
  >;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
    'get'
  >;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    'patch'
  >;
  'POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
      { name: 'horizontalSectionColumn-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts`
 *
 * The collection of WebParts in this column.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
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
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
      { name: 'horizontalSectionColumn-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}`
 *
 * The collection of WebParts in this column.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
      { name: 'horizontalSectionColumn-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
      { name: 'horizontalSectionColumn-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['body'],
  params?: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'horizontalSection-id', in: 'path' },
      { name: 'horizontalSectionColumn-id', in: 'path' },
    ],
    params,
    body,
  };
}
