import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/revokeSignInSessions': Operation<
    '/users/{user-id}/revokeSignInSessions',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/revokeSignInSessions`
 *
 * Invalidates all the refresh tokens issued to applications for a user (and session cookies in a user&#x27;s browser), by resetting the signInSessionsValidFromDateTime user property to the current date-time. Typically, this operation is performed (by the user or an administrator) if the user has a lost or stolen device. This operation prevents access to the organization&#x27;s data through applications on the device by requiring the user to sign in again to all applications that they consented to previously, independent of device.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/revokeSignInSessions']['body'],
  params?: IEndpoints['POST /users/{user-id}/revokeSignInSessions']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/revokeSignInSessions']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/revokeSignInSessions',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
