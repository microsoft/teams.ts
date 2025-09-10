import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    'delete'
  >;
  'GET /deviceManagement/elevationRequests': Operation<
    '/deviceManagement/elevationRequests',
    'get'
  >;
  'GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    'get'
  >;
  'PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    'patch'
  >;
  'POST /deviceManagement/elevationRequests': Operation<
    '/deviceManagement/elevationRequests',
    'post'
  >;
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve',
    'post'
  >;
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny',
    'post'
  >;
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests',
    'post'
  >;
  'POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke': Operation<
    '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegeManagementElevationRequest-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/elevationRequests`
 *
 * List of elevation requests
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/elevationRequests']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/elevationRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/elevationRequests',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}`
 *
 * List of elevation requests
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    paramDefs: {
      path: ['privilegeManagementElevationRequest-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}',
    paramDefs: {
      path: ['privilegeManagementElevationRequest-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/elevationRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/elevationRequests']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/elevationRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/elevationRequests',
    body,
  };
}

export const approve = {
  /**
   * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve']['body'],
    params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/approve',
      paramDefs: {
        path: ['privilegeManagementElevationRequest-id'],
      },
      params,
      body,
    };
  },
};

export const deny = {
  /**
   * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny']['body'],
    params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/deny',
      paramDefs: {
        path: ['privilegeManagementElevationRequest-id'],
      },
      params,
      body,
    };
  },
};

export const getAllElevationRequests = {
  /**
   * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests`
   *
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/getAllElevationRequests',
      paramDefs: {
        path: ['privilegeManagementElevationRequest-id'],
      },
      params,
    };
  },
};

export const revoke = {
  /**
   * `POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke']['body'],
    params?: IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/elevationRequests/{privilegeManagementElevationRequest-id}/revoke',
      paramDefs: {
        path: ['privilegeManagementElevationRequest-id'],
      },
      params,
      body,
    };
  },
};
