import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore`
 *
 * Restore a document set version.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/restore',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'documentSetVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
