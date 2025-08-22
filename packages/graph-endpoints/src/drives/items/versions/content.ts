import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    'get'
  >;
  'PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    'put'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content`
 *
 * The content stream for this version of the item.
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content`
 *
 * The content stream for this version of the item.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItemVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content`
 *
 * The content stream for this version of the item.
 */
export function set(
  body: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['body'],
  params?: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content']['response']
> {
  return {
    method: 'put',
    path: '/drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
