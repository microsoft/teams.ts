import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/windows/{windowsSetting-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}',
    'delete'
  >;
  'GET /users/{user-id}/settings/windows': Operation<'/users/{user-id}/settings/windows', 'get'>;
  'GET /users/{user-id}/settings/windows/{windowsSetting-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}',
    'get'
  >;
  'PATCH /users/{user-id}/settings/windows/{windowsSetting-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}',
    'patch'
  >;
  'POST /users/{user-id}/settings/windows': Operation<'/users/{user-id}/settings/windows', 'post'>;
  'GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
    'get'
  >;
  'POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
    'post'
  >;
  'GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'get'
  >;
  'PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/windows/{windowsSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'windowsSetting-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/windows`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/settings/windows']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/windows']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/settings/windows',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/windows/{windowsSetting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}',
    paramDefs: {
      path: ['user-id', 'windowsSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/windows/{windowsSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/settings/windows/{windowsSetting-id}',
    paramDefs: {
      path: ['user-id', 'windowsSetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/settings/windows`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/settings/windows']['body'],
  params?: IEndpoints['POST /users/{user-id}/settings/windows']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/settings/windows']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/settings/windows',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const instances = {
  /**
   * `GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances`
   *
   * A collection of setting values for a given windowsSetting.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'windowsSetting-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['body'],
    params?: IEndpoints['POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/settings/windows/{windowsSetting-id}/instances']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances',
      paramDefs: {
        path: ['user-id', 'windowsSetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
   *
   * A collection of setting values for a given windowsSetting.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'windowsSetting-id', 'windowsSettingInstance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
      paramDefs: {
        path: ['user-id', 'windowsSetting-id', 'windowsSettingInstance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'windowsSetting-id', 'windowsSettingInstance-id'],
      },
      params,
    };
  },
};
