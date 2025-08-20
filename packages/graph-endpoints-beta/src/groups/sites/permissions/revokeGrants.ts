import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/revokeGrants': Operation<
    '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}/revokeGrants',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/revokeGrants`
 *
 * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/revokeGrants']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/revokeGrants']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/revokeGrants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/permissions/{permission-id}/revokeGrants',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
