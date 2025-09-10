export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /me/authentication/hardwareOathMethods': Operation<
    '/me/authentication/hardwareOathMethods',
    'get'
  >;
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'get'
  >;
  'POST /me/authentication/hardwareOathMethods': Operation<
    '/me/authentication/hardwareOathMethods',
    'post'
  >;
  'POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate',
    'post'
  >;
  'POST /me/authentication/hardwareOathMethods/assignAndActivate': Operation<
    '/me/authentication/hardwareOathMethods/assignAndActivate',
    'post'
  >;
  'POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber': Operation<
    '/me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
    'post'
  >;
  'POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
    'post'
  >;
}

/**
 * `DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 * Unassign a hardware token from a user. The token remains in the directory and its details can be retrieved by List hardwareOathDevices API.
 */
export function del(
  params?: IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['hardwareOathAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/hardwareOathMethods`
 *
 * Get a list of the hardware tokens assigned to a user.
 */
export function list(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods']['parameters']
): EndpointRequest<IEndpoints['GET /me/authentication/hardwareOathMethods']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 * Get the details of the hardware token assigned to a user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: {
      path: ['hardwareOathAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /me/authentication/hardwareOathMethods`
 *
 * Assign a hardware token to a user without activation. To activate, use the activation API operation.
 */
export function create(
  body: IEndpoints['POST /me/authentication/hardwareOathMethods']['body']
): EndpointRequest<IEndpoints['POST /me/authentication/hardwareOathMethods']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/authentication/hardwareOathMethods',
    body,
  };
}

export const activate = {
  /**
   * `POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate`
   *
   * Activate a hardware OATH token that is already assigned to a user. A user can self-activate their token or an admin can activate for a user.
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['body'],
    params?: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate',
      paramDefs: {
        path: ['hardwareOathAuthenticationMethod-id'],
      },
      params,
      body,
    };
  },
};

export const assignAndActivate = {
  /**
   * `POST /me/authentication/hardwareOathMethods/assignAndActivate`
   *
   * Assign and activate a hardware token at the same time. This operation requires the device ID to activate it.
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivate']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/hardwareOathMethods/assignAndActivate',
      body,
    };
  },
};

export const assignAndActivateBySerialNumber = {
  /**
   * `POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber`
   *
   * Assign and activate a hardware token at the same time by hardware token serial number.
   */
  create: function create(
    body: IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
      body,
    };
  },
};

export const deactivate = {
  /**
   * `POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate`
   *
   * Deactive a hardware OATH token. It remains assigned to a user.
   */
  create: function create(
    params?: IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
      paramDefs: {
        path: ['hardwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
};
