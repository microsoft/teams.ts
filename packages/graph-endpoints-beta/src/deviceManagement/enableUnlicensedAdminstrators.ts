import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/enableUnlicensedAdminstrators': Operation<
    '/deviceManagement/enableUnlicensedAdminstrators',
    'post'
  >;
}

/**
 * `POST /deviceManagement/enableUnlicensedAdminstrators`
 *
 * Upon enabling, users assigned as administrators via Role Assignment Memberships will no longer require an assigned Intune license. You are limited to 350 unlicensed direct members for each AAD security group in a role assignment, but you can assign multiple AAD security groups to a role if you need to support more than 350 unlicensed administrators. Licensed administrators will continue to function as-is in that transitive memberships apply and are not subject to the 350 member limit.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/enableUnlicensedAdminstrators']['body'],
  params?: IEndpoints['POST /deviceManagement/enableUnlicensedAdminstrators']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/enableUnlicensedAdminstrators']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/enableUnlicensedAdminstrators',
    paramDefs: [],
    params,
    body,
  };
}
