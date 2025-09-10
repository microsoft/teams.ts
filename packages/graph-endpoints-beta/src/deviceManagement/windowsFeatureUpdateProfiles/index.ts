import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsFeatureUpdateProfiles': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles',
    'post'
  >;
  'POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign',
    'post'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsFeatureUpdateProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsFeatureUpdateProfiles`
 *
 * A collection of windows feature update profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsFeatureUpdateProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}`
 *
 * A collection of windows feature update profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    paramDefs: {
      path: ['windowsFeatureUpdateProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    paramDefs: {
      path: ['windowsFeatureUpdateProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsFeatureUpdateProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsFeatureUpdateProfiles',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assign',
      paramDefs: {
        path: ['windowsFeatureUpdateProfile-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments`
   *
   * The list of group assignments of the profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsFeatureUpdateProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
      paramDefs: {
        path: ['windowsFeatureUpdateProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}`
   *
   * The list of group assignments of the profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsFeatureUpdateProfile-id', 'windowsFeatureUpdateProfileAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
      paramDefs: {
        path: ['windowsFeatureUpdateProfile-id', 'windowsFeatureUpdateProfileAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsFeatureUpdateProfile-id', 'windowsFeatureUpdateProfileAssignment-id'],
      },
      params,
    };
  },
};
