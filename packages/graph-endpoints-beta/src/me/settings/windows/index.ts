import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/windows/{windowsSetting-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}',
    'delete'
  >;
  'GET /me/settings/windows': Operation<'/me/settings/windows', 'get'>;
  'GET /me/settings/windows/{windowsSetting-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}',
    'get'
  >;
  'PATCH /me/settings/windows/{windowsSetting-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}',
    'patch'
  >;
  'POST /me/settings/windows': Operation<'/me/settings/windows', 'post'>;
  'GET /me/settings/windows/{windowsSetting-id}/instances': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances',
    'get'
  >;
  'POST /me/settings/windows/{windowsSetting-id}/instances': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances',
    'post'
  >;
  'GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'get'
  >;
  'PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'patch'
  >;
  'DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}': Operation<
    '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/settings/windows/{windowsSetting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/settings/windows/{windowsSetting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsSetting-id'],
    },
    params,
  };
}

/**
 * `GET /me/settings/windows`
 *
 * Get a list of windowsSetting objects and their properties for a user.
 */
export function list(
  params?: IEndpoints['GET /me/settings/windows']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/windows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/windows',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/settings/windows/{windowsSetting-id}`
 *
 * Read the properties and relationships of a windowsSetting object by passing the ID of the setting in the URL. This method gets the setting for a user.
 */
export function get(
  params?: IEndpoints['GET /me/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/windows/{windowsSetting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/settings/windows/{windowsSetting-id}',
    paramDefs: {
      path: ['windowsSetting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/settings/windows/{windowsSetting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}']['body'],
  params?: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/settings/windows/{windowsSetting-id}',
    paramDefs: {
      path: ['windowsSetting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/settings/windows`
 *
 */
export function create(
  body: IEndpoints['POST /me/settings/windows']['body']
): EndpointRequest<IEndpoints['POST /me/settings/windows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/settings/windows',
    body,
  };
}

export const instances = {
  /**
   * `GET /me/settings/windows/{windowsSetting-id}/instances`
   *
   * Get a list of windowsSettingInstance objects and their properties for a user.
   */
  list: function list(
    params?: IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/settings/windows/{windowsSetting-id}/instances',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsSetting-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/settings/windows/{windowsSetting-id}/instances`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/settings/windows/{windowsSetting-id}/instances']['body'],
    params?: IEndpoints['POST /me/settings/windows/{windowsSetting-id}/instances']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/settings/windows/{windowsSetting-id}/instances']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/settings/windows/{windowsSetting-id}/instances',
      paramDefs: {
        path: ['windowsSetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
   *
   * Read the properties and relationships of a windowsSettingInstance object by passing the Windows setting ID and Windows setting instance ID in the URL. This method gets a windowsSettingInstance for a user.
   */
  get: function get(
    params?: IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsSetting-id', 'windowsSettingInstance-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['body'],
    params?: IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
      paramDefs: {
        path: ['windowsSetting-id', 'windowsSettingInstance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/settings/windows/{windowsSetting-id}/instances/{windowsSettingInstance-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsSetting-id', 'windowsSettingInstance-id'],
      },
      params,
    };
  },
};
