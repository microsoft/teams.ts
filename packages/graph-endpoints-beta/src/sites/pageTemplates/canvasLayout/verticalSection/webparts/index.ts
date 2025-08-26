export * as getPositionOfWebPart from './getPositionOfWebPart';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'delete'
  >;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'get'
  >;
  'GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    'patch'
  >;
  'POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts': Operation<
    '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 * The set of web parts in this section.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
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
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 * The set of web parts in this section.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts/{webPart-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
      { name: 'webPart-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['body'],
  params?: IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/pageTemplates/{pageTemplate-id}/canvasLayout/verticalSection/webparts',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'pageTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}
