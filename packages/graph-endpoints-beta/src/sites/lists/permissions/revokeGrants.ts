import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/revokeGrants': Operation<
    '/sites/{site-id}/lists/{list-id}/permissions/{permission-id}/revokeGrants',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/revokeGrants`
 *
 * Revoke access to a listItem or driveItem granted via a sharing link by removing the specified recipient from the link.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/revokeGrants']['body'],
  params?: IEndpoints['POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/revokeGrants']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/lists/{list-id}/permissions/{permission-id}/revokeGrants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/lists/{list-id}/permissions/{permission-id}/revokeGrants',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'permission-id', in: 'path' },
    ],
    params,
    body,
  };
}
