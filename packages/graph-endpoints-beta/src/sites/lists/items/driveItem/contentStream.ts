import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
    'put'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['body'],
  params?: IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/contentStream',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
