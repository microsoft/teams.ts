import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    'put'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['body'],
  params?: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
    body,
  };
}
