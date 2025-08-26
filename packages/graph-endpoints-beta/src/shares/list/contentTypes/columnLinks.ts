import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks': Operation<
    '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
    'post'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks`
 *
 * The collection of columns that are required by this content type.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 * The collection of columns that are required by this content type.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'columnLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks',
    paramDefs: [
      { name: 'sharedDriveItem-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
