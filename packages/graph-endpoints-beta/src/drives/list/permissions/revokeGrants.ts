import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants': Operation<
    '/drives/{drive-id}/list/permissions/{permission-id}/revokeGrants',
    'post'
  >;
}

/**
 * `POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants`
 *
 * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants']['parameters']
): EndpointRequest<
  IEndpoints['POST /drives/{drive-id}/list/permissions/{permission-id}/revokeGrants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/drives/{drive-id}/list/permissions/{permission-id}/revokeGrants',
    paramDefs: [
      { name: 'drive-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
