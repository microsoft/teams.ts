import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
    'get'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/appleUserInitiatedEnrollmentProfiles': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
    'post'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['appleUserInitiatedEnrollmentProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles`
 *
 * Apple user initiated enrollment profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}`
 *
 * Apple user initiated enrollment profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    paramDefs: {
      path: ['appleUserInitiatedEnrollmentProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    paramDefs: {
      path: ['appleUserInitiatedEnrollmentProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/appleUserInitiatedEnrollmentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
    body,
  };
}

export const assignments = {
  /**
   * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments`
   *
   * The list of assignments for this profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['appleUserInitiatedEnrollmentProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
      paramDefs: {
        path: ['appleUserInitiatedEnrollmentProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}`
   *
   * The list of assignments for this profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['appleUserInitiatedEnrollmentProfile-id', 'appleEnrollmentProfileAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
      paramDefs: {
        path: ['appleUserInitiatedEnrollmentProfile-id', 'appleEnrollmentProfileAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['appleUserInitiatedEnrollmentProfile-id', 'appleEnrollmentProfileAssignment-id'],
      },
      params,
    };
  },
};

export const setPriority = {
  /**
   * `POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority']['body'],
    params?: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/setPriority',
      paramDefs: {
        path: ['appleUserInitiatedEnrollmentProfile-id'],
      },
      params,
      body,
    };
  },
};
