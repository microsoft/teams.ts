import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion`
 *
 * Restore a previous version of a ListItem to be the current version. This will create a new version with the contents of the previous version, but preserves all existing versions of the item.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
