import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsQualityUpdateProfiles': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles',
    'post'
  >;
  'POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign',
    'post'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsQualityUpdateProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdateProfiles`
 *
 * A collection of windows quality update profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdateProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}`
 *
 * A collection of windows quality update profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    paramDefs: {
      path: ['windowsQualityUpdateProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    paramDefs: {
      path: ['windowsQualityUpdateProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsQualityUpdateProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdateProfiles',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assign',
      paramDefs: {
        path: ['windowsQualityUpdateProfile-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments`
   *
   * The list of group assignments of the profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsQualityUpdateProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
      paramDefs: {
        path: ['windowsQualityUpdateProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}`
   *
   * The list of group assignments of the profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsQualityUpdateProfile-id', 'windowsQualityUpdateProfileAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
      paramDefs: {
        path: ['windowsQualityUpdateProfile-id', 'windowsQualityUpdateProfileAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsQualityUpdateProfile-id', 'windowsQualityUpdateProfileAssignment-id'],
      },
      params,
    };
  },
};
