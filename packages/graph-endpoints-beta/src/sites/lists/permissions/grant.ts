import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/grant': Operation<
    '/sites/{site-id}/lists/{list-id}/permissions/{permission-id}/grant',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/grant`
 *
 * Grant users access to a link represented by a permission.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/grant']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/grant']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/grant']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/permissions/{permission-id}/grant',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
