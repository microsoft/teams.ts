export * as deviceStatuses from './deviceStatuses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies',
    'get'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/wdacSupplementalPolicies': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies',
    'post'
  >;
  'POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign',
    'post'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    'get'
  >;
  'PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/wdacSupplementalPolicies`
 *
 * The collection of Windows Defender Application Control Supplemental Policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}`
 *
 * The collection of Windows Defender Application Control Supplemental Policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    paramDefs: {
      path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}',
    paramDefs: {
      path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/wdacSupplementalPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/wdacSupplementalPolicies',
    body,
  };
}

export const assign = {
  /**
   * `POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign']['body'],
    params?: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assign',
      paramDefs: {
        path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
      },
      params,
      body,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments`
   *
   * The associated group assignments for the Windows Defender Application Control Supplemental Policy.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
      paramDefs: {
        path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}`
   *
   * The associated group assignments for the Windows Defender Application Control Supplemental Policy.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'windowsDefenderApplicationControlSupplementalPolicy-id',
          'windowsDefenderApplicationControlSupplementalPolicyAssignment-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
      paramDefs: {
        path: [
          'windowsDefenderApplicationControlSupplementalPolicy-id',
          'windowsDefenderApplicationControlSupplementalPolicyAssignment-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'windowsDefenderApplicationControlSupplementalPolicy-id',
          'windowsDefenderApplicationControlSupplementalPolicyAssignment-id',
        ],
      },
      params,
    };
  },
};

export const deploySummary = {
  /**
   * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary`
   *
   * WindowsDefenderApplicationControl supplemental policy deployment summary.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
      paramDefs: {
        path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/deploySummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsDefenderApplicationControlSupplementalPolicy-id'],
      },
      params,
    };
  },
};
