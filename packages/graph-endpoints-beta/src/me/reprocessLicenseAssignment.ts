import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/reprocessLicenseAssignment': Operation<'/me/reprocessLicenseAssignment', 'post'>;
}

/**
 * `POST /me/reprocessLicenseAssignment`
 *
 * Reprocess all group-based license assignments for the user. To learn more about group-based licensing, see What is group-based licensing in Microsoft Entra ID. Also see Identify and resolve license assignment problems for a group in Microsoft Entra ID for more details.
 */
export function create(
  body: IEndpoints['POST /me/reprocessLicenseAssignment']['body'],
  params?: IEndpoints['POST /me/reprocessLicenseAssignment']['parameters']
): EndpointRequest<IEndpoints['POST /me/reprocessLicenseAssignment']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/reprocessLicenseAssignment',
    paramDefs: [],
    params,
    body,
  };
}
