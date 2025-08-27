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
  * Create a sharing link for a listItem. The createLink action creates a new sharing link if the specified link type doesn&#x27;t already exist for the calling application.
If a sharing link of the specified type already exists for the app, this action returns the existing sharing link. listItem resources inherit sharing permissions from the list the item resides in.
  */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/items/{listItem-id}/createLink']['response']
> {
  return {
    ver: 'beta',
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
