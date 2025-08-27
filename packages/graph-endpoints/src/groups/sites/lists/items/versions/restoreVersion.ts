import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion`
 *
 * Restore a previous version of a ListItem to be the current version. This will create a new version with the contents of the previous version, but preserves all existing versions of the item.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
