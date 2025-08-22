import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/items/{listItem-id}/createLink': Operation<
    '/drives/{drive-id}/list/items/{listItem-id}/createLink',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/items/{listItem-id}/createLink`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['response']
> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/list/items/{listItem-id}/createLink',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
