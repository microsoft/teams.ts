export * as emailMethods from './emailMethods';
export * as fido2Methods from './fido2Methods';
export * as methods from './methods';
export * as microsoftAuthenticatorMethods from './microsoftAuthenticatorMethods';
export * as operations from './operations';
export * as passwordMethods from './passwordMethods';
export * as phoneMethods from './phoneMethods';
export * as platformCredentialMethods from './platformCredentialMethods';
export * as softwareOathMethods from './softwareOathMethods';
export * as temporaryAccessPassMethods from './temporaryAccessPassMethods';
export * as windowsHelloForBusinessMethods from './windowsHelloForBusinessMethods';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication': Operation<'/me/authentication', 'delete'>;
  'GET /me/authentication': Operation<'/me/authentication', 'get'>;
  'PATCH /me/authentication': Operation<'/me/authentication', 'patch'>;
}

/**
 * `DELETE /me/authentication`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/authentication']['response']> {
  return {
    method: 'delete',
    path: '/me/authentication',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/authentication`
 *
 * The authentication methods that are supported for the user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication']['response']> {
  return {
    method: 'get',
    path: '/me/authentication',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/authentication`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication']['body'],
  params?: IEndpoints['PATCH /me/authentication']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/authentication']['response']> {
  return {
    method: 'patch',
    path: '/me/authentication',
    paramDefs: [],
    params,
    body,
  };
}
