export * as activities from './activities';
export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as drive from './drive';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as operations from './operations';
export * as permissions from './permissions';
export * as subscriptions from './subscriptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list': Operation<'/drives/{drive-id}/list', 'delete'>;
  'GET /drives/{drive-id}/list': Operation<'/drives/{drive-id}/list', 'get'>;
  'PATCH /drives/{drive-id}/list': Operation<'/drives/{drive-id}/list', 'patch'>;
}

/**
 * `DELETE /drives/{drive-id}/list`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list']['parameters']
): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/list',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list`
 *
 * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list']['parameters']
): EndpointRequest<IEndpoints['PATCH /drives/{drive-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/list',
    paramDefs: [{ name: 'drive-id', in: 'path' }],
    params,
    body,
  };
}
