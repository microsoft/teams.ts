import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink': Operation<
    '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink',
    'post'
  >;
}

/**
  * `POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink`
  *
  * Create a sharing link for a listItem. The createLink action creates a new sharing link if the specified link type doesn&#x27;t already exist for the calling application.
If a sharing link of the specified type already exists for the app, this action returns the existing sharing link. listItem resources inherit sharing permissions from the list the item resides in.
  */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'listItem-id', in: 'path' },
    ],
    params,
    body,
  };
}
