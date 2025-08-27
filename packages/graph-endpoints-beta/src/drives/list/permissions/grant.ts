import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/permissions/{permission-id}/grant': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}/grant',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/permissions/{permission-id}/grant`
 *
 * Grant users access to a link represented by a permission.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/grant']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/grant']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/grant']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/permissions/{permission-id}/grant',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
