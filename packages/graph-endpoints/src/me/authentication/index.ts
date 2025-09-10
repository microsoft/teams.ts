export * as methods from './methods';
export * as microsoftAuthenticatorMethods from './microsoftAuthenticatorMethods';
export * as phoneMethods from './phoneMethods';
export * as platformCredentialMethods from './platformCredentialMethods';
export * as windowsHelloForBusinessMethods from './windowsHelloForBusinessMethods';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication': Operation<'/me/authentication', 'delete'>;
  'GET /me/authentication': Operation<'/me/authentication', 'get'>;
  'PATCH /me/authentication': Operation<'/me/authentication', 'patch'>;
  'GET /me/authentication/emailMethods': Operation<'/me/authentication/emailMethods', 'get'>;
  'POST /me/authentication/emailMethods': Operation<'/me/authentication/emailMethods', 'post'>;
  'GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'get'
  >;
  'PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'patch'
  >;
  'DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}': Operation<
    '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/fido2Methods': Operation<'/me/authentication/fido2Methods', 'get'>;
  'GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'get'
  >;
  'DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}': Operation<
    '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/operations': Operation<'/me/authentication/operations', 'get'>;
  'POST /me/authentication/operations': Operation<'/me/authentication/operations', 'post'>;
  'GET /me/authentication/operations/{longRunningOperation-id}': Operation<
    '/me/authentication/operations/{longRunningOperation-id}',
    'get'
  >;
  'PATCH /me/authentication/operations/{longRunningOperation-id}': Operation<
    '/me/authentication/operations/{longRunningOperation-id}',
    'patch'
  >;
  'DELETE /me/authentication/operations/{longRunningOperation-id}': Operation<
    '/me/authentication/operations/{longRunningOperation-id}',
    'delete'
  >;
  'GET /me/authentication/passwordMethods': Operation<'/me/authentication/passwordMethods', 'get'>;
  'POST /me/authentication/passwordMethods': Operation<
    '/me/authentication/passwordMethods',
    'post'
  >;
  'GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}': Operation<
    '/me/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
    'get'
  >;
  'GET /me/authentication/softwareOathMethods': Operation<
    '/me/authentication/softwareOathMethods',
    'get'
  >;
  'GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'get'
  >;
  'DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/temporaryAccessPassMethods': Operation<
    '/me/authentication/temporaryAccessPassMethods',
    'get'
  >;
  'POST /me/authentication/temporaryAccessPassMethods': Operation<
    '/me/authentication/temporaryAccessPassMethods',
    'post'
  >;
  'GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'get'
  >;
  'DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}': Operation<
    '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
    'delete'
  >;
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
    paramDefs: {
      header: ['If-Match'],
    },
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
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/authentication`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/authentication']['body']
): EndpointRequest<IEndpoints['PATCH /me/authentication']['response']> {
  return {
    method: 'patch',
    path: '/me/authentication',
    body,
  };
}

export const emailMethods = {
  /**
   * `GET /me/authentication/emailMethods`
   *
   * Retrieve a list of a user&#x27;s email authentication method objects and their properties. This call only returns a single object referenced by ID 3ddfcfc8-9383-446f-83cc-3ab9be4be18f as only one email method can be set on users.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/emailMethods']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/authentication/emailMethods']['response']> {
    return {
      method: 'get',
      path: '/me/authentication/emailMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/authentication/emailMethods`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/emailMethods']['body']
  ): EndpointRequest<IEndpoints['POST /me/authentication/emailMethods']['response']> {
    return {
      method: 'post',
      path: '/me/authentication/emailMethods',
      body,
    };
  },
  /**
   * `GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}`
   *
   * Retrieve a user&#x27;s single email authentication method object.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['emailAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['body'],
    params?: IEndpoints['PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
      paramDefs: {
        path: ['emailAuthenticationMethod-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/authentication/emailMethods/{emailAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['emailAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const fido2Methods = {
  /**
   * `GET /me/authentication/fido2Methods`
   *
   * Retrieve a list of a user&#x27;s FIDO2 security key authentication method objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/fido2Methods']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/authentication/fido2Methods']['response']> {
    return {
      method: 'get',
      path: '/me/authentication/fido2Methods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
   *
   * Retrieve a user&#x27;s single FIDO2 security key authentication method object.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fido2AuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/authentication/fido2Methods/{fido2AuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['fido2AuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /me/authentication/operations`
   *
   * Represents the status of a long-running operation, such as a password reset operation.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/authentication/operations']['response']> {
    return {
      method: 'get',
      path: '/me/authentication/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/authentication/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/operations']['body']
  ): EndpointRequest<IEndpoints['POST /me/authentication/operations']['response']> {
    return {
      method: 'post',
      path: '/me/authentication/operations',
      body,
    };
  },
  /**
   * `GET /me/authentication/operations/{longRunningOperation-id}`
   *
   * Represents the status of a long-running operation, such as a password reset operation.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/operations/{longRunningOperation-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/authentication/operations/{longRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['longRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/authentication/operations/{longRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/authentication/operations/{longRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /me/authentication/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/authentication/operations/{longRunningOperation-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/authentication/operations/{longRunningOperation-id}',
      paramDefs: {
        path: ['longRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/authentication/operations/{longRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/authentication/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/authentication/operations/{longRunningOperation-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/authentication/operations/{longRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['longRunningOperation-id'],
      },
      params,
    };
  },
};

export const passwordMethods = {
  /**
   * `GET /me/authentication/passwordMethods`
   *
   * Retrieve a list of the passwords registered to a user, represented by a passwordAuthenticationMethod object. This API returns exactly one object referenced by ID 28c10230-6103-485e-b985-444c60001490, as a user can have exactly one password. For security, the password itself is never returned in the object and the password property is always null.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/passwordMethods']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/authentication/passwordMethods']['response']> {
    return {
      method: 'get',
      path: '/me/authentication/passwordMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/authentication/passwordMethods`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/passwordMethods']['body']
  ): EndpointRequest<IEndpoints['POST /me/authentication/passwordMethods']['response']> {
    return {
      method: 'post',
      path: '/me/authentication/passwordMethods',
      body,
    };
  },
  /**
   * `GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}`
   *
   * Retrieve a password that&#x27;s registered to a user, represented by a passwordAuthenticationMethod object. For security, the password itself will never be returned in the object and the password property is always null.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/authentication/passwordMethods/{passwordAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['passwordAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const softwareOathMethods = {
  /**
   * `GET /me/authentication/softwareOathMethods`
   *
   * Retrieve a list of a user&#x27;s software OATH token authentication method objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/softwareOathMethods']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/authentication/softwareOathMethods']['response']> {
    return {
      method: 'get',
      path: '/me/authentication/softwareOathMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
   *
   * Retrieve a user&#x27;s single Software OATH token authentication method object and its properties.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['softwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['softwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
};

export const temporaryAccessPassMethods = {
  /**
   * `GET /me/authentication/temporaryAccessPassMethods`
   *
   * Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/temporaryAccessPassMethods']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/authentication/temporaryAccessPassMethods']['response']> {
    return {
      method: 'get',
      path: '/me/authentication/temporaryAccessPassMethods',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/authentication/temporaryAccessPassMethods`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/temporaryAccessPassMethods']['body']
  ): EndpointRequest<IEndpoints['POST /me/authentication/temporaryAccessPassMethods']['response']> {
    return {
      method: 'post',
      path: '/me/authentication/temporaryAccessPassMethods',
      body,
    };
  },
  /**
   * `GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
   *
   * Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
   */
  get: function get(
    params?: IEndpoints['GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['temporaryAccessPassAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['temporaryAccessPassAuthenticationMethod-id'],
      },
      params,
    };
  },
};
