import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant`
 *
 * Grant users access to a link represented by a permission.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}/grant',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
