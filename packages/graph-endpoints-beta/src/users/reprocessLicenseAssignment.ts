import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/reprocessLicenseAssignment': Operation<
    '/users/{user-id}/reprocessLicenseAssignment',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/reprocessLicenseAssignment`
 *
 * Reprocess all group-based license assignments for the user. To learn more about group-based licensing, see What is group-based licensing in Microsoft Entra ID. Also see Identify and resolve license assignment problems for a group in Microsoft Entra ID for more details.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/reprocessLicenseAssignment']['body'],
  params?: IEndpoints['POST /users/{user-id}/reprocessLicenseAssignment']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/reprocessLicenseAssignment']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/reprocessLicenseAssignment',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
