import type { EndpointRequest, Operation } from './../../../types/common.ts';

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
  'POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
  'POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
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
    method: 'delete',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'phoneAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/phoneMethods`
 *
 * The phone numbers registered to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/phoneMethods']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/phoneMethods']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/phoneMethods',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 * The phone numbers registered to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'phoneAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 * Update a user&#x27;s phone number associated with a phone authentication method object. You can&#x27;t change a phone&#x27;s type. To change a phone&#x27;s type, add a new number of the desired type and then delete the object with the original type. If a user is enabled by policy to use SMS to sign in and the mobile number is changed, the system will attempt to register the number for use in that system. Self-service operations aren&#x27;t supported.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'phoneAuthenticationMethod-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/phoneMethods`
 *
 * Add a new phone authentication method for a user. A user may only have one phone of each type, captured in the phoneType property. This means, for example, adding a mobile phone to a user with a pre-existing mobile phone fails. Additionally, a user must always have a mobile phone before adding an alternateMobile phone. Adding a phone number makes it available for use in both Azure multi-factor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a mobile number is added, the system attempts to register the number for use in that system.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/authentication/phoneMethods',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const disableSmsSignIn = {
  /**
   * `POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn`
   *
   * Disable SMS sign-in for an existing mobile phone number registered to a user. The number will no longer be available for SMS sign-in, which can prevent your user from signing in.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
      paramDefs: {
        path: ['user-id', 'phoneAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const enableSmsSignIn = {
  /**
   * `POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn`
   *
   * Enable SMS sign-in for an existing mobile phone number registered to a user. To be successfully enabled:
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
      paramDefs: {
        path: ['user-id', 'phoneAuthenticationMethod-id'],
      },
      params,
    };
  },
};
