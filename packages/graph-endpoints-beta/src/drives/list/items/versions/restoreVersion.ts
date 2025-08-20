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
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/restoreVersion']['response']
> {
  return {
    ver: 'beta',
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
