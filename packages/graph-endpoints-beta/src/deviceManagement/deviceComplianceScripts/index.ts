export * as deviceRunStates from './deviceRunStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceComplianceScripts': Operation<
    '/deviceManagement/deviceComplianceScripts',
    'get'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceComplianceScripts': Operation<
    '/deviceManagement/deviceComplianceScripts',
    'post'
  >;
  'POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign',
    'post'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary',
    'get'
  >;
  'PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary',
    'patch'
  >;
  'DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary': Operation<
    '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary',
    'delete'
  >;
}

/**
 * `DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceComplianceScript-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts`
 *
 * The list of device compliance scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceComplianceScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}`
 *
 * The list of device compliance scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    paramDefs: {
      path: ['deviceComplianceScript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}',
    paramDefs: {
      path: ['deviceComplianceScript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceComplianceScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceComplianceScripts']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceComplianceScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceComplianceScripts',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assign',
      paramDefs: {
        path: ['deviceComplianceScript-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments`
   *
   * The list of group assignments for the device compliance script
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceComplianceScript-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments',
      paramDefs: {
        path: ['deviceComplianceScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}`
   *
   * The list of group assignments for the device compliance script
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceComplianceScript-id', 'deviceHealthScriptAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
      paramDefs: {
        path: ['deviceComplianceScript-id', 'deviceHealthScriptAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/assignments/{deviceHealthScriptAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceComplianceScript-id', 'deviceHealthScriptAssignment-id'],
      },
      params,
    };
  },
};

export const runSummary = {
  /**
   * `GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary`
   *
   * High level run summary for device compliance script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceComplianceScript-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary',
      paramDefs: {
        path: ['deviceComplianceScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceComplianceScripts/{deviceComplianceScript-id}/runSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceComplianceScript-id'],
      },
      params,
    };
  },
};
