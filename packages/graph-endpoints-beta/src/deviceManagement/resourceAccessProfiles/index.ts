import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    'delete'
  >;
  'GET /deviceManagement/resourceAccessProfiles': Operation<
    '/deviceManagement/resourceAccessProfiles',
    'get'
  >;
  'GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    'get'
  >;
  'PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    'patch'
  >;
  'POST /deviceManagement/resourceAccessProfiles': Operation<
    '/deviceManagement/resourceAccessProfiles',
    'post'
  >;
  'POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign',
    'post'
  >;
  'GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/resourceAccessProfiles/queryByPlatformType': Operation<
    '/deviceManagement/resourceAccessProfiles/queryByPlatformType',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementResourceAccessProfileBase-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/resourceAccessProfiles`
 *
 * Collection of resource access settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/resourceAccessProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/resourceAccessProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}`
 *
 * Collection of resource access settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    paramDefs: {
      path: ['deviceManagementResourceAccessProfileBase-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    paramDefs: {
      path: ['deviceManagementResourceAccessProfileBase-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/resourceAccessProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/resourceAccessProfiles']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/resourceAccessProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/resourceAccessProfiles',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assign',
      paramDefs: {
        path: ['deviceManagementResourceAccessProfileBase-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments`
   *
   * The list of assignments for the device configuration profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementResourceAccessProfileBase-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments',
      paramDefs: {
        path: ['deviceManagementResourceAccessProfileBase-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}`
   *
   * The list of assignments for the device configuration profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deviceManagementResourceAccessProfileBase-id',
          'deviceManagementResourceAccessProfileAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
      paramDefs: {
        path: [
          'deviceManagementResourceAccessProfileBase-id',
          'deviceManagementResourceAccessProfileAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}/assignments/{deviceManagementResourceAccessProfileAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deviceManagementResourceAccessProfileBase-id',
          'deviceManagementResourceAccessProfileAssignment-id',
        ],
      },
      params,
    };
  },
};

export const queryByPlatformType = {
  /**
   * `POST /deviceManagement/resourceAccessProfiles/queryByPlatformType`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/resourceAccessProfiles/queryByPlatformType']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/resourceAccessProfiles/queryByPlatformType']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/resourceAccessProfiles/queryByPlatformType',
      body,
    };
  },
};
