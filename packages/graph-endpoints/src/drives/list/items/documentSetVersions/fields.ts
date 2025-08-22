import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'delete'
  >;
  'GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'patch'
  >;
}

/**
 * `DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
 *
 * A collection of the fields and values for this version of the list item.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
