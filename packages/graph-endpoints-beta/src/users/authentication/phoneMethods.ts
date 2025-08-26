import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/phoneMethods': Operation<
    '/users/{user-id}/authentication/phoneMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'patch'
  >;
  'POST /users/{user-id}/authentication/phoneMethods': Operation<
    '/users/{user-id}/authentication/phoneMethods',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'phoneAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/phoneMethods`
 *
 * Represents the phone registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/phoneMethods']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/phoneMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/phoneMethods',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 * Represents the phone registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'phoneAuthenticationMethod-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 * Update the phone number associated with a phone authentication method. You can&#x27;t change a phone&#x27;s type. To change a phone&#x27;s type, add a new number of the desired type and then delete the object with the original type. If a user is enabled by policy to use SMS to sign in and the mobile number is changed, the system attempts to register the number for use in that system. Self-service operations aren&#x27;t supported.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'phoneAuthenticationMethod-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/phoneMethods`
 *
 * Add a new phone authentication method. A user may only have one phone of each type, captured in the phoneType property. This means, for example, adding a mobile phone to a user with a preexisting mobile phone will fail. Additionally, a user must always have a mobile phone before adding an alternateMobile phone. Adding a phone number makes it available for use in both Azure multifactor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a mobile number is added, the system attempts to register the number for use in that system.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/phoneMethods',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
