import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
    'get'
  >;
  'PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
    'put'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function set(
  body: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['body'],
  params?: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
    body,
  };
}
