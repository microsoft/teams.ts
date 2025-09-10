export * as assignedDevices from './assignedDevices';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles',
    'post'
  >;
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assign': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assign',
    'post'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsAutopilotDeploymentProfile-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles`
 *
 * Windows auto pilot deployment profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}`
 *
 * Windows auto pilot deployment profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    paramDefs: {
      path: ['windowsAutopilotDeploymentProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    paramDefs: {
      path: ['windowsAutopilotDeploymentProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsAutopilotDeploymentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assign',
      paramDefs: {
        path: ['windowsAutopilotDeploymentProfile-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments`
   *
   * The list of group assignments for the profile.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsAutopilotDeploymentProfile-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
      paramDefs: {
        path: ['windowsAutopilotDeploymentProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}`
   *
   * The list of group assignments for the profile.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'windowsAutopilotDeploymentProfile-id',
          'windowsAutopilotDeploymentProfileAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
      paramDefs: {
        path: [
          'windowsAutopilotDeploymentProfile-id',
          'windowsAutopilotDeploymentProfileAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'windowsAutopilotDeploymentProfile-id',
          'windowsAutopilotDeploymentProfileAssignment-id',
        ],
      },
      params,
    };
  },
};

export const hasPayloadLinks = {
  /**
   * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/windowsAutopilotDeploymentProfiles/hasPayloadLinks',
      body,
    };
  },
};
