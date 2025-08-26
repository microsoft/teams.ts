import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/invalidateAllRefreshTokens': Operation<'/me/invalidateAllRefreshTokens', 'post'>;
}

/**
 * `POST /me/invalidateAllRefreshTokens`
 *
 * Invalidates all of the user&#x27;s refresh tokens issued to applications and session cookies in a user&#x27;s browser, by resetting the refreshTokensValidFromDateTime user property to the current date-time. Typically, this operation is performed (by the user or an administrator) if the user has a lost or stolen device. This operation would prevent access to any of the organization&#x27;s data accessed through applications on the device without the user first being required to sign in again. In fact, this operation would force the user to sign in again for all applications that they have previously consented to, independent of device. For developers, if the application attempts to redeem a delegated access token for this user by using an invalidated refresh token, the application receives an error. If this happens, the application needs to acquire a new refresh token by making a request to the OAuth 2.0 /authorize endpoint, which forces the user to sign in.
 */
export function create(
  body: IEndpoints['POST /me/invalidateAllRefreshTokens']['body'],
  params?: IEndpoints['POST /me/invalidateAllRefreshTokens']['parameters']
): EndpointRequest<IEndpoints['POST /me/invalidateAllRefreshTokens']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/invalidateAllRefreshTokens',
    paramDefs: [],
    params,
    body,
  };
}
