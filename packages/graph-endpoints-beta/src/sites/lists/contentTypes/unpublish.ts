import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/unpublish',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
    body,
  };
}
