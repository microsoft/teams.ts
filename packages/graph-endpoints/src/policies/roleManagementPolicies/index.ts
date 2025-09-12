import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/roleManagementPolicies': Operation<'/policies/roleManagementPolicies', 'get'>;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/roleManagementPolicies': Operation<'/policies/roleManagementPolicies', 'post'>;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
    'get'
  >;
  'POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
    'post'
  >;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    'get'
  >;
  'PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    'patch'
  >;
  'DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
    'delete'
  >;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
    'get'
  >;
  'POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
    'post'
  >;
  'GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    'get'
  >;
  'PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    'patch'
  >;
  'DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}': Operation<
    '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleManagementPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/roleManagementPolicies`
 *
 * Get the details of the policies in PIM that can be applied to Microsoft Entra roles or group membership or ownership. To retrieve policies that apply to Azure RBAC, use the Azure REST PIM API for role management policies.
 */
export function list(
  params?: IEndpoints['GET /policies/roleManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/roleManagementPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}`
 *
 * Retrieve the details of a role management policy.
 */
export function get(
  params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    paramDefs: {
      path: ['unifiedRoleManagementPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}',
    paramDefs: {
      path: ['unifiedRoleManagementPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/roleManagementPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/roleManagementPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/roleManagementPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/roleManagementPolicies',
    body,
  };
}

export const effectiveRules = {
  /**
   * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules`
   *
   * The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
   */
  list: function list(
    params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['response']
  > {
    return {
      method: 'get',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleManagementPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['body'],
    params?: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules']['response']
  > {
    return {
      method: 'post',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules',
      paramDefs: {
        path: ['unifiedRoleManagementPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}`
   *
   * The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleManagementPolicy-id', 'unifiedRoleManagementPolicyRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['body'],
    params?: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
      paramDefs: {
        path: ['unifiedRoleManagementPolicy-id', 'unifiedRoleManagementPolicyRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleManagementPolicy-id', 'unifiedRoleManagementPolicyRule-id'],
      },
      params,
    };
  },
};

export const rules = {
  /**
   * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules`
   *
   * Get the rules or settings defined for a role management policy. The rules are a collection of following types that are derived from the unifiedRoleManagementPolicyRule object:
   */
  list: function list(
    params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['response']
  > {
    return {
      method: 'get',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleManagementPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules`
   *
   */
  create: function create(
    body: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['body'],
    params?: IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules']['response']
  > {
    return {
      method: 'post',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules',
      paramDefs: {
        path: ['unifiedRoleManagementPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}`
   *
   * Retrieve a rule or settings defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object:
   */
  get: function get(
    params?: IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleManagementPolicy-id', 'unifiedRoleManagementPolicyRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}`
   *
   * Update a rule defined for a role management policy. The rule can be one of the following types that are derived from the unifiedRoleManagementPolicyRule object: For more information about rules for Microsoft Entra roles and examples of updating rules, see the following articles:
   */
  update: function update(
    body: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['body'],
    params?: IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
      paramDefs: {
        path: ['unifiedRoleManagementPolicy-id', 'unifiedRoleManagementPolicyRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleManagementPolicy-id', 'unifiedRoleManagementPolicyRule-id'],
      },
      params,
    };
  },
};
