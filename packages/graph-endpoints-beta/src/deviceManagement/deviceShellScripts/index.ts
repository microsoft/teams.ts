export * as deviceRunStates from './deviceRunStates';
export * as userRunStates from './userRunStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceShellScripts': Operation<
    '/deviceManagement/deviceShellScripts',
    'get'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceShellScripts': Operation<
    '/deviceManagement/deviceShellScripts',
    'post'
  >;
  'POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign',
    'post'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
    'get'
  >;
  'POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
    'post'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary': Operation<
    '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceShellScript-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts`
 *
 * The list of device shell scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceShellScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}`
 *
 * The list of device shell scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    paramDefs: {
      path: ['deviceShellScript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}',
    paramDefs: {
      path: ['deviceShellScript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceShellScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceShellScripts']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceShellScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceShellScripts',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assign',
      paramDefs: {
        path: ['deviceShellScript-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments`
   *
   * The list of group assignments for the device management script.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceShellScript-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments',
      paramDefs: {
        path: ['deviceShellScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
   *
   * The list of group assignments for the device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceShellScript-id', 'deviceManagementScriptAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
      paramDefs: {
        path: ['deviceShellScript-id', 'deviceManagementScriptAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/assignments/{deviceManagementScriptAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceShellScript-id', 'deviceManagementScriptAssignment-id'],
      },
      params,
    };
  },
};

export const groupAssignments = {
  /**
   * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments`
   *
   * The list of group assignments for the device management script.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceShellScript-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments',
      paramDefs: {
        path: ['deviceShellScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
   *
   * The list of group assignments for the device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceShellScript-id', 'deviceManagementScriptGroupAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
      paramDefs: {
        path: ['deviceShellScript-id', 'deviceManagementScriptGroupAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceShellScript-id', 'deviceManagementScriptGroupAssignment-id'],
      },
      params,
    };
  },
};

export const runSummary = {
  /**
   * `GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary`
   *
   * Run summary for device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceShellScripts/{deviceShellScript-id}/runSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceShellScript-id'],
      },
      params,
    };
  },
};
