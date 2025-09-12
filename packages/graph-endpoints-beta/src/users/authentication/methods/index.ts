import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/methods': Operation<
    '/users/{user-id}/authentication/methods',
    'get'
  >;
  'GET /users/{user-id}/authentication/methods/{authenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    'patch'
  >;
  'POST /users/{user-id}/authentication/methods': Operation<
    '/users/{user-id}/authentication/methods',
    'post'
  >;
  'POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
  'POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
    'post'
  >;
  'POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/resetPassword': Operation<
    '/users/{user-id}/authentication/methods/{authenticationMethod-id}/resetPassword',
    'post'
  >;
}

/**
 * `GET /users/{user-id}/authentication/methods`
 *
 * Represents all authentication methods registered to a user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/methods']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/methods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/methods',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/methods/{authenticationMethod-id}`
 *
 * Represents all authentication methods registered to a user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'authenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'authenticationMethod-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/authentication/methods`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/methods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/methods']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/methods']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/methods',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const disableSmsSignIn = {
  /**
   * `POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
      paramDefs: {
        path: ['user-id', 'authenticationMethod-id'],
      },
      params,
    };
  },
};

export const enableSmsSignIn = {
  /**
   * `POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
      paramDefs: {
        path: ['user-id', 'authenticationMethod-id'],
      },
      params,
    };
  },
};

export const resetPassword = {
  /**
   * `POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/resetPassword`
   *
   * Initiate a reset for the password associated with a password authentication method object. This can only be done by an administrator with appropriate permissions and can&#x27;t be performed on a user&#x27;s own account. To reset a user&#x27;s password in in Azure AD B2C, use the Update user API operation and update the passwordProfile &gt; forceChangePasswordNextSignIn object. This flow writes the new password to Microsoft Entra ID and pushes it to on-premises Active Directory if configured using password writeback. The admin can either provide a new password or have the system generate one. The user is prompted to change their password on their next sign in. This reset is a long-running operation and will return a Location header with a link where the caller can periodically check for the status of the reset operation.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/resetPassword']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/resetPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/methods/{authenticationMethod-id}/resetPassword']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/methods/{authenticationMethod-id}/resetPassword',
      paramDefs: {
        path: ['user-id', 'authenticationMethod-id'],
      },
      params,
      body,
    };
  },
};
