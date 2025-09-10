export * as device from './device';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'delete'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods',
    'get'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    'get'
  >;
  'POST /users/{user-id}/authentication/hardwareOathMethods': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods',
    'post'
  >;
  'POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate',
    'post'
  >;
  'POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivate',
    'post'
  >;
  'POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
    'post'
  >;
  'POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'hardwareOathAuthenticationMethod-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods`
 *
 * The hardware OATH time-based one-time password (TOTP) devices assigned to a user for authentication.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}`
 *
 * The hardware OATH time-based one-time password (TOTP) devices assigned to a user for authentication.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}',
    paramDefs: {
      path: ['user-id', 'hardwareOathAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /users/{user-id}/authentication/hardwareOathMethods`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods']['body'],
  params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/authentication/hardwareOathMethods',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const activate = {
  /**
   * `POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate`
   *
   * Activate a hardware OATH token that is already assigned to a user. A user can self-activate their token or an admin can activate for a user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/activate',
      paramDefs: {
        path: ['user-id', 'hardwareOathAuthenticationMethod-id'],
      },
      params,
      body,
    };
  },
};

export const assignAndActivate = {
  /**
   * `POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate`
   *
   * Assign and activate a hardware token at the same time. This operation requires the device ID to activate it.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivate',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const assignAndActivateBySerialNumber = {
  /**
   * `POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber`
   *
   * Assign and activate a hardware token at the same time by hardware token serial number.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['body'],
    params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/hardwareOathMethods/assignAndActivateBySerialNumber',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const deactivate = {
  /**
   * `POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate`
   *
   * Deactive a hardware OATH token. It remains assigned to a user.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/deactivate',
      paramDefs: {
        path: ['user-id', 'hardwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
};
