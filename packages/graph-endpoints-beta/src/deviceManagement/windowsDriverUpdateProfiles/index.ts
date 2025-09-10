import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles',
    'post'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign',
    'post'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
    'get'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
    'post'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    'delete'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction',
    'post'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsDriverUpdateProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsDriverUpdateProfiles`
 *
 * A collection of windows driver update profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}`
 *
 * A collection of windows driver update profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    paramDefs: {
      path: ['windowsDriverUpdateProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    paramDefs: {
      path: ['windowsDriverUpdateProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsDriverUpdateProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsDriverUpdateProfiles',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assign',
      paramDefs: {
        path: ['windowsDriverUpdateProfile-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments`
   *
   * The list of group assignments of the profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsDriverUpdateProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
      paramDefs: {
        path: ['windowsDriverUpdateProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}`
   *
   * The list of group assignments of the profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsDriverUpdateProfile-id', 'windowsDriverUpdateProfileAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
      paramDefs: {
        path: ['windowsDriverUpdateProfile-id', 'windowsDriverUpdateProfileAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsDriverUpdateProfile-id', 'windowsDriverUpdateProfileAssignment-id'],
      },
      params,
    };
  },
};

export const driverInventories = {
  /**
   * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories`
   *
   * Driver inventories for this profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsDriverUpdateProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
      paramDefs: {
        path: ['windowsDriverUpdateProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}`
   *
   * Driver inventories for this profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsDriverUpdateProfile-id', 'windowsDriverUpdateInventory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
      paramDefs: {
        path: ['windowsDriverUpdateProfile-id', 'windowsDriverUpdateInventory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsDriverUpdateProfile-id', 'windowsDriverUpdateInventory-id'],
      },
      params,
    };
  },
};

export const executeAction = {
  /**
   * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/executeAction',
      paramDefs: {
        path: ['windowsDriverUpdateProfile-id'],
      },
      params,
      body,
    };
  },
};

export const syncInventory = {
  /**
   * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory`
   *
   * Sync the driver inventory of a WindowsDriverUpdateProfile.
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/syncInventory',
      paramDefs: {
        path: ['windowsDriverUpdateProfile-id'],
      },
      params,
    };
  },
};
