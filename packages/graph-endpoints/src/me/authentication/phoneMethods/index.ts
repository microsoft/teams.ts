import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/phoneMethods': Operation<'/me/authentication/phoneMethods', 'get'>;
  'GET /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'patch'
  >;
  'POST /me/authentication/phoneMethods': Operation<'/me/authentication/phoneMethods', 'post'>;
  'POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn': Operation<
    '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
  'POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn': Operation<
    '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
    'post'
  >;
}

/**
 * `DELETE /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 * Delete a user&#x27;s phone authentication method. This removes the phone number from the user and they&#x27;ll no longer be able to use the number for authentication, whether via SMS or voice calls. A user can&#x27;t have an alternateMobile number without a mobile number. If you want to remove a mobile number from a user that also has an alternateMobile number, first update the mobile number to the new number, then delete the alternateMobile number. If the phone number is the user&#x27;s default Azure multi-factor authentication (MFA) authentication method, it can&#x27;t be deleted. Have the user change their default authentication method, and then delete the number.
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['phoneAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/phoneMethods`
 *
 * Retrieve a list of phone authentication method objects for a user. This will return up to three objects, as a user can have up to three phones usable for authentication. This method is available only for standard Microsoft Entra ID and B2B users, but not B2C users.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/phoneMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/phoneMethods']['response']> {
  return {
    method: 'get',
    path: '/me/authentication/phoneMethods',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 * Retrieve a single phoneAuthenticationMethod object for a user. This method is available only for standard Microsoft Entra ID and B2B users, but not B2C users.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: {
      path: ['phoneAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    paramDefs: {
      path: ['phoneAuthenticationMethod-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/authentication/phoneMethods`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/phoneMethods']['body']
): EndpointRequest<IEndpoints['POST /me/authentication/phoneMethods']['response']> {
  return {
    method: 'post',
    path: '/me/authentication/phoneMethods',
    body,
  };
}

export const disableSmsSignIn = {
  /**
   * `POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn`
   *
   * Disable SMS sign-in for an existing mobile phone number registered to a user. The number will no longer be available for SMS sign-in, which can prevent your user from signing in.
   */
  create: function create(
    params?: IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn']['response']
  > {
    return {
      method: 'post',
      path: '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/disableSmsSignIn',
      paramDefs: {
        path: ['phoneAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const enableSmsSignIn = {
  /**
   * `POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn`
   *
   * Enable SMS sign-in for an existing mobile phone number registered to a user. To be successfully enabled:
   */
  create: function create(
    params?: IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn']['response']
  > {
    return {
      method: 'post',
      path: '/me/authentication/phoneMethods/{phoneAuthenticationMethod-id}/enableSmsSignIn',
      paramDefs: {
        path: ['phoneAuthenticationMethod-id'],
      },
      params,
    };
  },
};
