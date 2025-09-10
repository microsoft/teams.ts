export * as deviceRunStates from './deviceRunStates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceHealthScripts': Operation<
    '/deviceManagement/deviceHealthScripts',
    'get'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceHealthScripts': Operation<
    '/deviceManagement/deviceHealthScripts',
    'post'
  >;
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign',
    'post'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
    'get'
  >;
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
    'post'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'patch'
  >;
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
    'delete'
  >;
  'POST /deviceManagement/deviceHealthScripts/enableGlobalScripts': Operation<
    '/deviceManagement/deviceHealthScripts/enableGlobalScripts',
    'post'
  >;
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion',
    'post'
  >;
  'GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    'get'
  >;
  'PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    'patch'
  >;
  'DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
    'delete'
  >;
  'POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript': Operation<
    '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceHealthScript-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts`
 *
 * The list of device health scripts associated with the tenant.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceHealthScripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}`
 *
 * The list of device health scripts associated with the tenant.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    paramDefs: {
      path: ['deviceHealthScript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}',
    paramDefs: {
      path: ['deviceHealthScript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceHealthScripts`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceHealthScripts']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceHealthScripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceHealthScripts',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assign',
      paramDefs: {
        path: ['deviceHealthScript-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments`
   *
   * The list of group assignments for the device health script
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceHealthScript-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments',
      paramDefs: {
        path: ['deviceHealthScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}`
   *
   * The list of group assignments for the device health script
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceHealthScript-id', 'deviceHealthScriptAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
      paramDefs: {
        path: ['deviceHealthScript-id', 'deviceHealthScriptAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/assignments/{deviceHealthScriptAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceHealthScript-id', 'deviceHealthScriptAssignment-id'],
      },
      params,
    };
  },
};

export const enableGlobalScripts = {
  /**
   * `POST /deviceManagement/deviceHealthScripts/enableGlobalScripts`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceHealthScripts/enableGlobalScripts']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceHealthScripts/enableGlobalScripts',
    };
  },
};

export const getGlobalScriptHighestAvailableVersion = {
  /**
   * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion`
   *
   * Update the Proprietary Device Health Script
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/getGlobalScriptHighestAvailableVersion',
      paramDefs: {
        path: ['deviceHealthScript-id'],
      },
      params,
    };
  },
};

export const runSummary = {
  /**
   * `GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary`
   *
   * High level run summary for device health script.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceHealthScript-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['body'],
    params?: IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
      paramDefs: {
        path: ['deviceHealthScript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/runSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['deviceHealthScript-id'],
      },
      params,
    };
  },
};

export const updateGlobalScript = {
  /**
   * `POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript`
   *
   * Update the Proprietary Device Health Script
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript']['body'],
    params?: IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/deviceHealthScripts/{deviceHealthScript-id}/updateGlobalScript',
      paramDefs: {
        path: ['deviceHealthScript-id'],
      },
      params,
      body,
    };
  },
};
