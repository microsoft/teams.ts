export * as commands from './commands';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/devices/{device-id}': Operation<'/me/devices/{device-id}', 'delete'>;
  'GET /me/devices': Operation<'/me/devices', 'get'>;
  'GET /me/devices/{device-id}': Operation<'/me/devices/{device-id}', 'get'>;
  'PATCH /me/devices/{device-id}': Operation<'/me/devices/{device-id}', 'patch'>;
  'POST /me/devices': Operation<'/me/devices', 'post'>;
  'GET /me/devices/{device-id}/deviceTemplate': Operation<
    '/me/devices/{device-id}/deviceTemplate',
    'get'
  >;
  'GET /me/devices/{device-id}/deviceTemplate/{deviceTemplate-id}': Operation<
    '/me/devices/{device-id}/deviceTemplate/{deviceTemplate-id}',
    'get'
  >;
  'GET /me/devices/{device-id}/extensions': Operation<'/me/devices/{device-id}/extensions', 'get'>;
  'POST /me/devices/{device-id}/extensions': Operation<
    '/me/devices/{device-id}/extensions',
    'post'
  >;
  'GET /me/devices/{device-id}/extensions/{extension-id}': Operation<
    '/me/devices/{device-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/devices/{device-id}/extensions/{extension-id}': Operation<
    '/me/devices/{device-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /me/devices/{device-id}/extensions/{extension-id}': Operation<
    '/me/devices/{device-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/devices/{device-id}/memberOf': Operation<'/me/devices/{device-id}/memberOf', 'get'>;
  'GET /me/devices/{device-id}/memberOf/{directoryObject-id}': Operation<
    '/me/devices/{device-id}/memberOf/{directoryObject-id}',
    'get'
  >;
  'GET /me/devices/{device-id}/registeredOwners': Operation<
    '/me/devices/{device-id}/registeredOwners',
    'get'
  >;
  'GET /me/devices/{device-id}/registeredUsers': Operation<
    '/me/devices/{device-id}/registeredUsers',
    'get'
  >;
  'GET /me/devices/{device-id}/transitiveMemberOf': Operation<
    '/me/devices/{device-id}/transitiveMemberOf',
    'get'
  >;
  'GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'GET /me/devices/{device-id}/usageRights': Operation<
    '/me/devices/{device-id}/usageRights',
    'get'
  >;
  'POST /me/devices/{device-id}/usageRights': Operation<
    '/me/devices/{device-id}/usageRights',
    'post'
  >;
  'GET /me/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/me/devices/{device-id}/usageRights/{usageRight-id}',
    'get'
  >;
  'PATCH /me/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/me/devices/{device-id}/usageRights/{usageRight-id}',
    'patch'
  >;
  'DELETE /me/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/me/devices/{device-id}/usageRights/{usageRight-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/devices/{device-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/devices/{device-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['device-id'],
    },
    params,
  };
}

/**
 * `GET /me/devices`
 *
 */
export function list(
  params?: IEndpoints['GET /me/devices']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/devices/{device-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/devices/{device-id}',
    paramDefs: {
      path: ['device-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/devices/{device-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/devices/{device-id}']['body'],
  params?: IEndpoints['PATCH /me/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/devices/{device-id}',
    paramDefs: {
      path: ['device-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/devices`
 *
 */
export function create(
  body: IEndpoints['POST /me/devices']['body']
): EndpointRequest<IEndpoints['POST /me/devices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/devices',
    body,
  };
}

export const deviceTemplate = {
  /**
   * `GET /me/devices/{device-id}/deviceTemplate`
   *
   * Device template used to instantiate this device. Nullable. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/devices/{device-id}/deviceTemplate']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/deviceTemplate']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/deviceTemplate',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/devices/{device-id}/deviceTemplate/{deviceTemplate-id}`
   *
   * Device template used to instantiate this device. Nullable. Read-only.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/devices/{device-id}/deviceTemplate/{deviceTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/devices/{device-id}/deviceTemplate/{deviceTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/deviceTemplate/{deviceTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['device-id', 'deviceTemplate-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /me/devices/{device-id}/extensions`
   *
   * The collection of open extensions defined for the device. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/devices/{device-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/devices/{device-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/devices/{device-id}/extensions']['body'],
    params?: IEndpoints['POST /me/devices/{device-id}/extensions']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/devices/{device-id}/extensions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/devices/{device-id}/extensions',
      paramDefs: {
        path: ['device-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/devices/{device-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the device. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['device-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/devices/{device-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/devices/{device-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /me/devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['device-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/devices/{device-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['device-id', 'extension-id'],
      },
      params,
    };
  },
};

export const memberOf = {
  /**
   * `GET /me/devices/{device-id}/memberOf`
   *
   * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/devices/{device-id}/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/memberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/devices/{device-id}/memberOf/{directoryObject-id}`
   *
   * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/devices/{device-id}/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/devices/{device-id}/memberOf/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['device-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const registeredOwners = {
  /**
   * `GET /me/devices/{device-id}/registeredOwners`
   *
   * The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /me/devices/{device-id}/registeredOwners']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/registeredOwners']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/registeredOwners',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
};

export const registeredUsers = {
  /**
   * `GET /me/devices/{device-id}/registeredUsers`
   *
   * Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /me/devices/{device-id}/registeredUsers']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/registeredUsers']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/registeredUsers',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /me/devices/{device-id}/transitiveMemberOf`
   *
   * Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /me/devices/{device-id}/transitiveMemberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/transitiveMemberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}`
   *
   * Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['device-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const usageRights = {
  /**
   * `GET /me/devices/{device-id}/usageRights`
   *
   * Represents the usage rights a device has been granted.
   */
  list: function list(
    params?: IEndpoints['GET /me/devices/{device-id}/usageRights']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/devices/{device-id}/usageRights']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/usageRights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['device-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/devices/{device-id}/usageRights`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/devices/{device-id}/usageRights']['body'],
    params?: IEndpoints['POST /me/devices/{device-id}/usageRights']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/devices/{device-id}/usageRights']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/devices/{device-id}/usageRights',
      paramDefs: {
        path: ['device-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/devices/{device-id}/usageRights/{usageRight-id}`
   *
   * Represents the usage rights a device has been granted.
   */
  get: function get(
    params?: IEndpoints['GET /me/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/devices/{device-id}/usageRights/{usageRight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/devices/{device-id}/usageRights/{usageRight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['device-id', 'usageRight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/devices/{device-id}/usageRights/{usageRight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/devices/{device-id}/usageRights/{usageRight-id}']['body'],
    params?: IEndpoints['PATCH /me/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/devices/{device-id}/usageRights/{usageRight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/devices/{device-id}/usageRights/{usageRight-id}',
      paramDefs: {
        path: ['device-id', 'usageRight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/devices/{device-id}/usageRights/{usageRight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/devices/{device-id}/usageRights/{usageRight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/devices/{device-id}/usageRights/{usageRight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['device-id', 'usageRight-id'],
      },
      params,
    };
  },
};
