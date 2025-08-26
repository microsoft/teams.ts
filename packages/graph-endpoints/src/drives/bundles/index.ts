export * as content from './content';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/bundles': Operation<'/drives/{drive-id}/bundles', 'get'>;
  'GET /drives/{drive-id}/bundles/{driveItem-id}': Operation<
    '/drives/{drive-id}/bundles/{driveItem-id}',
    'get'
  >;
  'POST /drives/{drive-id}/bundles': Operation<'/drives/{drive-id}/bundles', 'post'>;
}

/**
 * `GET /drives/{drive-id}/bundles`
 *
 * Collection of bundles (albums and multi-select-shared sets of items). Only in personal OneDrive.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/bundles']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/bundles']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/bundles',
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
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/bundles/{driveItem-id}`
 *
 * Collection of bundles (albums and multi-select-shared sets of items). Only in personal OneDrive.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/bundles/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/bundles/{driveItem-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/bundles/{driveItem-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'driveItem-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /drives/{drive-id}/bundles`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/bundles']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/bundles']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/bundles']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/bundles',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
