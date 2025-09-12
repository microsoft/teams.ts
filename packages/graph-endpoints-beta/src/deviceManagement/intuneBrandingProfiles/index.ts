import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/intuneBrandingProfiles': Operation<
    '/deviceManagement/intuneBrandingProfiles',
    'get'
  >;
  'GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/intuneBrandingProfiles': Operation<
    '/deviceManagement/intuneBrandingProfiles',
    'post'
  >;
  'POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign',
    'post'
  >;
  'GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['intuneBrandingProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/intuneBrandingProfiles`
 *
 * Intune branding profiles targeted to AAD groups
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/intuneBrandingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intuneBrandingProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}`
 *
 * Intune branding profiles targeted to AAD groups
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    paramDefs: {
      path: ['intuneBrandingProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    paramDefs: {
      path: ['intuneBrandingProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intuneBrandingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intuneBrandingProfiles']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/intuneBrandingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intuneBrandingProfiles',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assign',
      paramDefs: {
        path: ['intuneBrandingProfile-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments`
   *
   * The list of group assignments for the branding profile
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['intuneBrandingProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
      paramDefs: {
        path: ['intuneBrandingProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}`
   *
   * The list of group assignments for the branding profile
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['intuneBrandingProfile-id', 'intuneBrandingProfileAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
      paramDefs: {
        path: ['intuneBrandingProfile-id', 'intuneBrandingProfileAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['intuneBrandingProfile-id', 'intuneBrandingProfileAssignment-id'],
      },
      params,
    };
  },
};
