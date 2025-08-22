export * as content from './content';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/children': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}',
    'get'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/children': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/children',
    'post'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/children`
 *
 * Return a collection of DriveItems in the children relationship of a DriveItem. DriveItems with a non-null folder or package facet can have one or more child DriveItems.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/children',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}`
 *
 * Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
      { name: 'driveItem-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /drives/{drive-id}/items/{driveItem-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/children']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/children']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items/{driveItem-id}/children',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
