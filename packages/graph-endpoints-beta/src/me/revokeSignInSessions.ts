import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/revokeSignInSessions': Operation<'/me/revokeSignInSessions', 'post'>;
}

/**
 * `POST /me/revokeSignInSessions`
 *
 * Invalidates all the refresh tokens issued to applications for a user (as well as session cookies in a user&#x27;s browser), by resetting the signInSessionsValidFromDateTime user property to the current date-time. Typically, this operation is performed (by the user or an administrator) if the user has a lost or stolen device. This operation prevents access to the organization&#x27;s data through applications on the device by requiring the user to sign in again to all applications that they have previously consented to, independent of device. If the application attempts to redeem a delegated access token for this user by using an invalidated refresh token, the application will get an error. If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint, which will force the user to sign in.
 */
export function create(
  body: IEndpoints['POST /me/revokeSignInSessions']['body'],
  params?: IEndpoints['POST /me/revokeSignInSessions']['parameters']
): EndpointRequest<IEndpoints['POST /me/revokeSignInSessions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/revokeSignInSessions',
    paramDefs: [],
    params,
    body,
  };
}
