import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
      { name: 'listItemVersion-id', in: 'path' },
    ],
    params,
    body,
  };
}
