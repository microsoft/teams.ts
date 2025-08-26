import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'delete'
  >;
  'GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    'patch'
  >;
}

/**
 * `DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
 *
 * A collection of the fields and values for this version of the list item.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/fields',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
