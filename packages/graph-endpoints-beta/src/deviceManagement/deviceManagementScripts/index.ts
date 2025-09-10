export * as deviceRunStates from './deviceRunStates';
export * as userRunStates from './userRunStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementScripts': Operation<
    '/deviceManagement/deviceManagementScripts',
    'get'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceManagementScripts': Operation<
    '/deviceManagement/deviceManagementScripts',
    'post'
  >;
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign',
    'post'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
    'get'
  >;
  'POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
    'post'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/deviceManagementScripts/hasPayloadLinks': Operation<
    '/deviceManagement/deviceManagementScripts/hasPayloadLinks',
    'post'
  >;
  'GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary': Operation<
    '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceManagementScript-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts`
 *
 * The list of device management scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceManagementScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}`
 *
 * The list of device management scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    paramDefs: {
      path: ['deviceManagementScript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}',
    paramDefs: {
      path: ['deviceManagementScript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceManagementScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementScripts']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceManagementScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementScripts',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assign',
      paramDefs: {
        path: ['deviceManagementScript-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments`
   *
   * The list of group assignments for the device management script.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementScript-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments',
      paramDefs: {
        path: ['deviceManagementScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}`
   *
   * The list of group assignments for the device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementScript-id', 'deviceManagementScriptAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}',
      paramDefs: {
        path: ['deviceManagementScript-id', 'deviceManagementScriptAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/assignments/{deviceManagementScriptAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementScript-id', 'deviceManagementScriptAssignment-id'],
      },
      params,
    };
  },
};

export const groupAssignments = {
  /**
   * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments`
   *
   * The list of group assignments for the device management script.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceManagementScript-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments',
      paramDefs: {
        path: ['deviceManagementScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
   *
   * The list of group assignments for the device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementScript-id', 'deviceManagementScriptGroupAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
      paramDefs: {
        path: ['deviceManagementScript-id', 'deviceManagementScriptGroupAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/groupAssignments/{deviceManagementScriptGroupAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceManagementScript-id', 'deviceManagementScriptGroupAssignment-id'],
      },
      params,
    };
  },
};

export const hasPayloadLinks = {
  /**
   * `POST /deviceManagement/deviceManagementScripts/hasPayloadLinks`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceManagementScripts/hasPayloadLinks']['body']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceManagementScripts/hasPayloadLinks']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceManagementScripts/hasPayloadLinks',
      body,
    };
  },
};

export const runSummary = {
  /**
   * `GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary`
   *
   * Run summary for device management script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceManagementScripts/{deviceManagementScript-id}/runSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceManagementScript-id'],
      },
      params,
    };
  },
};
