export * as commands from './commands';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/devices/{device-id}': Operation<
    '/users/{user-id}/devices/{device-id}',
    'delete'
  >;
  'GET /users/{user-id}/devices': Operation<'/users/{user-id}/devices', 'get'>;
  'GET /users/{user-id}/devices/{device-id}': Operation<
    '/users/{user-id}/devices/{device-id}',
    'get'
  >;
  'PATCH /users/{user-id}/devices/{device-id}': Operation<
    '/users/{user-id}/devices/{device-id}',
    'patch'
  >;
  'POST /users/{user-id}/devices': Operation<'/users/{user-id}/devices', 'post'>;
  'GET /users/{user-id}/devices/{device-id}/deviceTemplate': Operation<
    '/users/{user-id}/devices/{device-id}/deviceTemplate',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}': Operation<
    '/users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/extensions': Operation<
    '/users/{user-id}/devices/{device-id}/extensions',
    'get'
  >;
  'POST /users/{user-id}/devices/{device-id}/extensions': Operation<
    '/users/{user-id}/devices/{device-id}/extensions',
    'post'
  >;
  'GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}': Operation<
    '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /users/{user-id}/devices/{device-id}/memberOf': Operation<
    '/users/{user-id}/devices/{device-id}/memberOf',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/registeredOwners': Operation<
    '/users/{user-id}/devices/{device-id}/registeredOwners',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/registeredUsers': Operation<
    '/users/{user-id}/devices/{device-id}/registeredUsers',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/transitiveMemberOf': Operation<
    '/users/{user-id}/devices/{device-id}/transitiveMemberOf',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
  'GET /users/{user-id}/devices/{device-id}/usageRights': Operation<
    '/users/{user-id}/devices/{device-id}/usageRights',
    'get'
  >;
  'POST /users/{user-id}/devices/{device-id}/usageRights': Operation<
    '/users/{user-id}/devices/{device-id}/usageRights',
    'post'
  >;
  'GET /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}': Operation<
    '/users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/devices/{device-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/devices/{device-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'device-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/devices`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/devices']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/devices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/devices/{device-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/devices/{device-id}',
    paramDefs: {
      path: ['user-id', 'device-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/devices/{device-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/devices/{device-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/devices/{device-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/devices/{device-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/devices/{device-id}',
    paramDefs: {
      path: ['user-id', 'device-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/devices`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/devices']['body'],
  params?: IEndpoints['POST /users/{user-id}/devices']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/devices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/devices',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const deviceTemplate = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/deviceTemplate`
   *
   * Device template used to instantiate this device. Nullable. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/deviceTemplate',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'device-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}`
   *
   * Device template used to instantiate this device. Nullable. Read-only.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/deviceTemplate/{deviceTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'device-id', 'deviceTemplate-id'],
      },
      params,
    };
  },
};

export const extensions = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/extensions`
   *
   * The collection of open extensions defined for the device. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/extensions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'device-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/devices/{device-id}/extensions`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/devices/{device-id}/extensions']['body'],
    params?: IEndpoints['POST /users/{user-id}/devices/{device-id}/extensions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/devices/{device-id}/extensions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/devices/{device-id}/extensions',
      paramDefs: {
        path: ['user-id', 'device-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the device. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'device-id', 'extension-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        path: ['user-id', 'device-id', 'extension-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/devices/{device-id}/extensions/{extension-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/devices/{device-id}/extensions/{extension-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'device-id', 'extension-id'],
      },
      params,
    };
  },
};

export const memberOf = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/memberOf`
   *
   * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/memberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'device-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}`
   *
   * Groups and administrative units that this device is a member of. Read-only. Nullable. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/memberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'device-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const registeredOwners = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/registeredOwners`
   *
   * The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/registeredOwners']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/registeredOwners']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/registeredOwners',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'device-id'],
      },
      params,
    };
  },
};

export const registeredUsers = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/registeredUsers`
   *
   * Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/registeredUsers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/registeredUsers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/registeredUsers',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'device-id'],
      },
      params,
    };
  },
};

export const transitiveMemberOf = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/transitiveMemberOf`
   *
   * Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/transitiveMemberOf',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'device-id'],
      },
      params,
    };
  },
  /**
   * `GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}`
   *
   * Groups and administrative units that this device is a member of. This operation is transitive. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/transitiveMemberOf/{directoryObject-id}',
      paramDefs: {
        header: ['ConsistencyLevel'],
        query: ['$select', '$expand'],
        path: ['user-id', 'device-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const usageRights = {
  /**
   * `GET /users/{user-id}/devices/{device-id}/usageRights`
   *
   * Represents the usage rights a device has been granted.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/usageRights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/usageRights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/usageRights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'device-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/devices/{device-id}/usageRights`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/devices/{device-id}/usageRights']['body'],
    params?: IEndpoints['POST /users/{user-id}/devices/{device-id}/usageRights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/devices/{device-id}/usageRights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/devices/{device-id}/usageRights',
      paramDefs: {
        path: ['user-id', 'device-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}`
   *
   * Represents the usage rights a device has been granted.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'device-id', 'usageRight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}',
      paramDefs: {
        path: ['user-id', 'device-id', 'usageRight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/devices/{device-id}/usageRights/{usageRight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'device-id', 'usageRight-id'],
      },
      params,
    };
  },
};
