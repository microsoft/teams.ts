import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy': Operation<
    '/sites/{site-id}/lists/{list-id}/contentTypes/addCopy',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy`
 *
 * Add a copy of a content type from a site to a list.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/contentTypes/addCopy']['response']
> {
  return {
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/contentTypes/addCopy',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
    ],
    params,
    body,
  };
}
