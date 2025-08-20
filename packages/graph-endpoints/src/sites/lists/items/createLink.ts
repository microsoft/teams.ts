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
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/createLink']['response']
> {
  return {
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
