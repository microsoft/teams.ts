import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/methods': Operation<'/me/authentication/methods', 'get'>;
  'GET /me/authentication/methods/{authenticationMethod-id}': Operation<
    '/me/authentication/methods/{authenticationMethod-id}',
    'get'
  >;
  'PATCH /me/authentication/methods/{authenticationMethod-id}': Operation<
    '/me/authentication/methods/{authenticationMethod-id}',
    'patch'
  >;
  'POST /me/authentication/methods': Operation<'/me/authentication/methods', 'post'>;
  'POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn': Operation<
    '/me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
    'post'
  >;
  'POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn': Operation<
    '/me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
    'post'
  >;
  'POST /me/authentication/methods/{authenticationMethod-id}/resetPassword': Operation<
    '/me/authentication/methods/{authenticationMethod-id}/resetPassword',
    'post'
  >;
}

/**
 * `GET /me/authentication/methods`
 *
 * Retrieve a list of authentication methods registered to a user. The authentication methods are defined by the types derived from the authenticationMethod resource type, and only the methods supported on this API version. See Microsoft Entra authentication methods API overview for a list of currently supported methods. We don&#x27;t recommend using the authentication methods APIs for scenarios where you need to iterate over your entire user population for auditing or security check purposes. For these types of scenarios, we recommend using the authentication method registration and usage reporting APIs.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/methods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/methods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/methods',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/methods/{authenticationMethod-id}`
 *
 * Retrieve the properties and relationships of an authenticationMethod object.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/methods/{authenticationMethod-id}',
    paramDefs: {
      path: ['authenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/authentication/methods/{authenticationMethod-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication/methods/{authenticationMethod-id}']['body'],
  params?: IEndpoints['PATCH /me/authentication/methods/{authenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/authentication/methods/{authenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/authentication/methods/{authenticationMethod-id}',
    paramDefs: {
      path: ['authenticationMethod-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/authentication/methods`
 *
 */
export function create(
  body: IEndpoints['POST /me/authentication/methods']['body']
): EndpointRequest<IEndpoints['POST /me/authentication/methods']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/methods',
    body,
  };
}

export const disableSmsSignIn = {
  /**
   * `POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/methods/{authenticationMethod-id}/disableSmsSignIn',
      paramDefs: {
        path: ['authenticationMethod-id'],
      },
      params,
    };
  },
};

export const enableSmsSignIn = {
  /**
   * `POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/methods/{authenticationMethod-id}/enableSmsSignIn',
      paramDefs: {
        path: ['authenticationMethod-id'],
      },
      params,
    };
  },
};

export const resetPassword = {
  /**
   * `POST /me/authentication/methods/{authenticationMethod-id}/resetPassword`
   *
   * Initiate a reset for the password associated with a password authentication method object. This can only be done by an administrator with appropriate permissions and can&#x27;t be performed on a user&#x27;s own account. To reset a user&#x27;s password in in Azure AD B2C, use the Update user API operation and update the passwordProfile &gt; forceChangePasswordNextSignIn object. This flow writes the new password to Microsoft Entra ID and pushes it to on-premises Active Directory if configured using password writeback. The admin can either provide a new password or have the system generate one. The user is prompted to change their password on their next sign in. This reset is a long-running operation and will return a Location header with a link where the caller can periodically check for the status of the reset operation.
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/resetPassword']['body'],
    params?: IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/resetPassword']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/methods/{authenticationMethod-id}/resetPassword']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/methods/{authenticationMethod-id}/resetPassword',
      paramDefs: {
        path: ['authenticationMethod-id'],
      },
      params,
      body,
    };
  },
};
