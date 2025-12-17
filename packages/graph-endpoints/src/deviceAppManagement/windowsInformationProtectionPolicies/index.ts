import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies',
    'get'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionPolicies': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies',
    'post'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    'get'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
    'post'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
    'get'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
    'post'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['windowsInformationProtectionPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies`
 *
 * Windows information protection for apps running on devices which are not MDM enrolled.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}`
 *
 * Windows information protection for apps running on devices which are not MDM enrolled.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    paramDefs: {
      path: ['windowsInformationProtectionPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}',
    paramDefs: {
      path: ['windowsInformationProtectionPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies',
    body,
  };
}

export const assignments = {
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments`
   *
   * Navigation property to list of security groups targeted for policy.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsInformationProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
      paramDefs: {
        path: ['windowsInformationProtectionPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   * Navigation property to list of security groups targeted for policy.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['windowsInformationProtectionPolicy-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        path: ['windowsInformationProtectionPolicy-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['windowsInformationProtectionPolicy-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
};

export const exemptAppLockerFiles = {
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles`
   *
   * Another way to input exempt apps through xml files
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsInformationProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['body'],
    params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles',
      paramDefs: {
        path: ['windowsInformationProtectionPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
   *
   * Another way to input exempt apps through xml files
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'windowsInformationProtectionPolicy-id',
          'windowsInformationProtectionAppLockerFile-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
      paramDefs: {
        path: [
          'windowsInformationProtectionPolicy-id',
          'windowsInformationProtectionAppLockerFile-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/exemptAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'windowsInformationProtectionPolicy-id',
          'windowsInformationProtectionAppLockerFile-id',
        ],
      },
      params,
    };
  },
};

export const protectedAppLockerFiles = {
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles`
   *
   * Another way to input protected apps through xml files
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['windowsInformationProtectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['body'],
    params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles',
      paramDefs: {
        path: ['windowsInformationProtectionPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
   *
   * Another way to input protected apps through xml files
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'windowsInformationProtectionPolicy-id',
          'windowsInformationProtectionAppLockerFile-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
      paramDefs: {
        path: [
          'windowsInformationProtectionPolicy-id',
          'windowsInformationProtectionAppLockerFile-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'windowsInformationProtectionPolicy-id',
          'windowsInformationProtectionAppLockerFile-id',
        ],
      },
      params,
    };
  },
};
