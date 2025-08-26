export * as driveItem from './driveItem';
export * as listItem from './listItem';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/activities/{itemActivityOLD-id}': Operation<
    '/drives/{drive-id}/activities/{itemActivityOLD-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/activities': Operation<'/drives/{drive-id}/activities', 'get'>;
  'GET /drives/{drive-id}/activities/{itemActivityOLD-id}': Operation<
    '/drives/{drive-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/activities/{itemActivityOLD-id}': Operation<
    '/drives/{drive-id}/activities/{itemActivityOLD-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/activities': Operation<'/drives/{drive-id}/activities', 'post'>;
}

/**
 * `DELETE /drives/{drive-id}/activities/{itemActivityOLD-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/activities`
 *
 * The list of recent activities that took place under this drive.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/activities']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/activities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/activities',
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
 * `GET /drives/{drive-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place under this drive.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/activities/{itemActivityOLD-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/activities/{itemActivityOLD-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/activities/{itemActivityOLD-id}',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'itemActivityOLD-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/activities']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/activities']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/activities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/activities',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
