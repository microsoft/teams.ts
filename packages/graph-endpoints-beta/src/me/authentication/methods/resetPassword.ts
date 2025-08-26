import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/authentication/methods/{authenticationMethod-id}/resetPassword': Operation<
    '/me/authentication/methods/{authenticationMethod-id}/resetPassword',
    'post'
  >;
}

/**
 * `POST /me/authentication/methods/{authenticationMethod-id}/resetPassword`
 *
 * Initiate a reset for the password associated with a password authentication method object. This can only be done by an administrator with appropriate permissions and can&#x27;t be performed on a user&#x27;s own account. To reset a user&#x27;s password in in Azure AD B2C, use the Update user API operation and update the passwordProfile &gt; forceChangePasswordNextSignIn object. This flow writes the new password to Microsoft Entra ID and pushes it to on-premises Active Directory if configured using password writeback. The admin can either provide a new password or have the system generate one. The user is prompted to change their password on their next sign in. This reset is a long-running operation and will return a Location header with a link where the caller can periodically check for the status of the reset operation.
 */
export function create(
  body: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/resetPassword']['body'],
  params?: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/resetPassword']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/resetPassword']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/methods/{authenticationMethod-id}/resetPassword',
    paramDefs: [{ name: 'authenticationMethod-id', in: 'path' }],
    params,
    body,
  };
}
