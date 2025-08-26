import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/signInPreferences': Operation<
    '/me/authentication/signInPreferences',
    'get'
  >;
  'PATCH /me/authentication/signInPreferences': Operation<
    '/me/authentication/signInPreferences',
    'patch'
  >;
}

/**
 * `GET /me/authentication/signInPreferences`
 *
 * The settings and preferences for the sign-in experience of a user. Use this property to configure the user&#x27;s default multifactor authentication (MFA) method.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/signInPreferences']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/signInPreferences']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/signInPreferences',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication/signInPreferences`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/signInPreferences']['body'],
  params?: IEndpoints['PATCH /me/authentication/signInPreferences']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/authentication/signInPreferences']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/signInPreferences',
    paramDefs: [],
    params,
    body,
  };
}
