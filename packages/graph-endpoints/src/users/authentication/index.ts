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
  'DELETE /users/{user-id}/authentication': Operation<'/users/{user-id}/authentication', 'delete'>;
  'GET /users/{user-id}/authentication': Operation<'/users/{user-id}/authentication', 'get'>;
  'PATCH /users/{user-id}/authentication': Operation<'/users/{user-id}/authentication', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/authentication`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/authentication']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/authentication',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication`
 *
 * The authentication methods that are supported for the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/authentication']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/authentication',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
