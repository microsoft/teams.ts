export * as hardwareOathMethods from './hardwareOathMethods';
export * as methods from './methods';
export * as microsoftAuthenticatorMethods from './microsoftAuthenticatorMethods';
export * as passwordlessMicrosoftAuthenticatorMethods from './passwordlessMicrosoftAuthenticatorMethods';
export * as platformCredentialMethods from './platformCredentialMethods';
export * as qrCodePinMethod from './qrCodePinMethod';
export * as windowsHelloForBusinessMethods from './windowsHelloForBusinessMethods';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication': Operation<'/users/{user-id}/authentication', 'delete'>;
  'GET /users/{user-id}/authentication': Operation<'/users/{user-id}/authentication', 'get'>;
  'PATCH /users/{user-id}/authentication': Operation<'/users/{user-id}/authentication', 'patch'>;
  'GET /users/{user-id}/authentication/emailMethods': Operation<
    '/users/{user-id}/authentication/emailMethods',
    'get'
  >;
  'POST /users/{user-id}/authentication/emailMethods': Operation<
    '/users/{user-id}/authentication/emailMethods',
    'post'
  >;
  'GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/externalAuthenticationMethods': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods',
    'get'
  >;
  'POST /users/{user-id}/authentication/externalAuthenticationMethods': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods',
    'post'
  >;
  'GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/fido2Methods': Operation<
    '/users/{user-id}/authentication/fido2Methods',
    'get'
  >;
  'GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'get'
  >;
  'DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/operations': Operation<
    '/users/{user-id}/authentication/operations',
    'get'
  >;
  'POST /users/{user-id}/authentication/operations': Operation<
    '/users/{user-id}/authentication/operations',
    'post'
  >;
  'GET /users/{user-id}/authentication/operations/{longRunningOperation-id}': Operation<
    '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}': Operation<
    '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}': Operation<
    '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/passwordMethods': Operation<
    '/users/{user-id}/authentication/passwordMethods',
    'get'
  >;
  'POST /users/{user-id}/authentication/passwordMethods': Operation<
    '/users/{user-id}/authentication/passwordMethods',
    'post'
  >;
  'GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
    'get'
  >;
  'GET /users/{user-id}/authentication/phoneMethods': Operation<
    '/users/{user-id}/authentication/phoneMethods',
    'get'
  >;
  'POST /users/{user-id}/authentication/phoneMethods': Operation<
    '/users/{user-id}/authentication/phoneMethods',
    'post'
  >;
  'GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/requirements': Operation<
    '/users/{user-id}/authentication/requirements',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/requirements': Operation<
    '/users/{user-id}/authentication/requirements',
    'patch'
  >;
  'GET /users/{user-id}/authentication/signInPreferences': Operation<
    '/users/{user-id}/authentication/signInPreferences',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/signInPreferences': Operation<
    '/users/{user-id}/authentication/signInPreferences',
    'patch'
  >;
  'GET /users/{user-id}/authentication/softwareOathMethods': Operation<
    '/users/{user-id}/authentication/softwareOathMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'get'
  >;
  'DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/temporaryAccessPassMethods': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods',
    'get'
  >;
  'POST /users/{user-id}/authentication/temporaryAccessPassMethods': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods',
    'post'
  >;
  'GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'get'
  >;
  'DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/authentication']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
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
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
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
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const emailMethods = {
  /**
   * `GET /users/{user-id}/authentication/emailMethods`
   *
   * Represents the email addresses registered to a user for authentication.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/emailMethods']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/emailMethods']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/emailMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/authentication/emailMethods`
   *
   * Set a user&#x27;s emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method. Self-service operations aren&#x27;t supported.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/emailMethods']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/emailMethods']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/emailMethods']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/emailMethods',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}`
   *
   * Represents the email addresses registered to a user for authentication.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'emailAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}`
   *
   * Update a user&#x27;s email address associated with an email Authentication Method object. Self-service operations aren&#x27;t supported.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
      paramDefs: {
        path: ['user-id', 'emailAuthenticationMethod-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}`
   *
   * Deletes a user&#x27;s email Authentication Method object.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'emailAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const externalAuthenticationMethods = {
  /**
   * `GET /users/{user-id}/authentication/externalAuthenticationMethods`
   *
   * Represents the external methods registered to a user for authentication.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/externalAuthenticationMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/authentication/externalAuthenticationMethods`
   *
   * Create a new externalAuthenticationMethod object. This API doesn&#x27;t support self-service operations.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/externalAuthenticationMethods']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/externalAuthenticationMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/externalAuthenticationMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/externalAuthenticationMethods',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
   *
   * Represents the external methods registered to a user for authentication.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'externalAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
      paramDefs: {
        path: ['user-id', 'externalAuthenticationMethod-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}`
   *
   * Delete an externalAuthenticationMethod object. This API doesn&#x27;t support self-service operations.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/externalAuthenticationMethods/{externalAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'externalAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const fido2Methods = {
  /**
   * `GET /users/{user-id}/authentication/fido2Methods`
   *
   * Represents the FIDO2 security keys registered to a user for authentication.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/fido2Methods']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/fido2Methods']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/fido2Methods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
   *
   * Represents the FIDO2 security keys registered to a user for authentication.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'fido2AuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
   *
   * Deletes a user&#x27;s FIDO2 security key authentication method object.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'fido2AuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /users/{user-id}/authentication/operations`
   *
   * Read the properties and relationships of a longRunningOperation object. This API allows you to retrieve the details and status of the following long-running Microsoft Graph API operations. The possible states of the long-running operation are notStarted, running, succeeded, failed, unknownFutureValue where succeeded and failed are terminal states.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/authentication/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/operations']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/operations',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/operations/{longRunningOperation-id}`
   *
   * Read the properties and relationships of a longRunningOperation object. This API allows you to retrieve the details and status of the following long-running Microsoft Graph API operations. The possible states of the long-running operation are notStarted, running, succeeded, failed, unknownFutureValue where succeeded and failed are terminal states.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'longRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
      paramDefs: {
        path: ['user-id', 'longRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/operations/{longRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'longRunningOperation-id'],
      },
      params,
    };
  },
};

export const passwordMethods = {
  /**
   * `GET /users/{user-id}/authentication/passwordMethods`
   *
   * Represents the details of the password authentication method registered to a user for authentication.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/passwordMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/passwordMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/passwordMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/authentication/passwordMethods`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/passwordMethods']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/passwordMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/passwordMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/passwordMethods',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}`
   *
   * Represents the details of the password authentication method registered to a user for authentication.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'passwordAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const phoneMethods = {
  /**
   * `GET /users/{user-id}/authentication/phoneMethods`
   *
   * Represents the phone registered to a user for authentication.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/phoneMethods']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/phoneMethods']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/phoneMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/authentication/phoneMethods`
   *
   * Add a new phone authentication method. A user may only have one phone of each type, captured in the phoneType property. This means, for example, adding a mobile phone to a user with a preexisting mobile phone will fail. Additionally, a user must always have a mobile phone before adding an alternateMobile phone. Adding a phone number makes it available for use in both Azure multifactor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a mobile number is added, the system attempts to register the number for use in that system.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/authentication/phoneMethods']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/phoneMethods',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
   *
   * Represents the phone registered to a user for authentication.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'phoneAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
   *
   * Update the phone number associated with a phone authentication method. You can&#x27;t change a phone&#x27;s type. To change a phone&#x27;s type, add a new number of the desired type and then delete the object with the original type. If a user is enabled by policy to use SMS to sign in and the mobile number is changed, the system attempts to register the number for use in that system. Self-service operations aren&#x27;t supported.
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
      paramDefs: {
        path: ['user-id', 'phoneAuthenticationMethod-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'phoneAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const requirements = {
  /**
   * `GET /users/{user-id}/authentication/requirements`
   *
   * Read the properties of a user&#x27;s authentication states. Use this API to retrieve the following information:
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/requirements']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/authentication/requirements']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/requirements',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/requirements`
   *
   * Update the properties of a user&#x27;s authentication method states. Use this API to update the following information:
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/requirements']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/requirements']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /users/{user-id}/authentication/requirements']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/requirements',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const signInPreferences = {
  /**
   * `GET /users/{user-id}/authentication/signInPreferences`
   *
   * Read the properties of a user&#x27;s authentication states. Use this API to retrieve the following information:
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/signInPreferences']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/signInPreferences']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/signInPreferences',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/signInPreferences`
   *
   * Update the properties of a user&#x27;s authentication method states. Use this API to update the following information:
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/signInPreferences']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/signInPreferences']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/signInPreferences']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/signInPreferences',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const softwareOathMethods = {
  /**
   * `GET /users/{user-id}/authentication/softwareOathMethods`
   *
   * The software OATH time-based one-time password (TOTP) applications registered to a user for authentication.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/softwareOathMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
   *
   * The software OATH time-based one-time password (TOTP) applications registered to a user for authentication.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'softwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
   *
   * Delete a user&#x27;s Software OATH token authentication method object.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'softwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const temporaryAccessPassMethods = {
  /**
   * `GET /users/{user-id}/authentication/temporaryAccessPassMethods`
   *
   * Retrieve a list of a user&#x27;s temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass (TAP) method.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/temporaryAccessPassMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/authentication/temporaryAccessPassMethods`
   *
   * Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that&#x27;s usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/temporaryAccessPassMethods']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/temporaryAccessPassMethods']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/temporaryAccessPassMethods']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/temporaryAccessPassMethods',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
   *
   * Retrieve a user&#x27;s single temporaryAccessPassAuthenticationMethod object.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'temporaryAccessPassAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
   *
   * Delete a users&#x27;s temporaryAccessPassAuthenticationMethod object.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'temporaryAccessPassAuthenticationMethod-id'],
      },
      params,
    };
  },
};
