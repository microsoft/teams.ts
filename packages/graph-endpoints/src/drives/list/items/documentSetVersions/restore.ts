import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore`
 *
 * Restore a document set version.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
