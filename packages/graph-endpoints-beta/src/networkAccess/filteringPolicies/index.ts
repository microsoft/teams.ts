import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    'delete'
  >;
  'GET /networkAccess/filteringPolicies': Operation<'/networkAccess/filteringPolicies', 'get'>;
  'GET /networkAccess/filteringPolicies/{filteringPolicy-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    'patch'
  >;
  'POST /networkAccess/filteringPolicies': Operation<'/networkAccess/filteringPolicies', 'post'>;
  'GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
    'get'
  >;
  'POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
    'post'
  >;
  'GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['filteringPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/filteringPolicies`
 *
 * Get a list of the microsoft.graph.networkaccess.filteringPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/filteringPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/filteringPolicies/{filteringPolicy-id}`
 *
 * Get a filteringPolicy object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    paramDefs: {
      path: ['filteringPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    paramDefs: {
      path: ['filteringPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/filteringPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/filteringPolicies']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/filteringPolicies',
    body,
  };
}

export const policyRules = {
  /**
   * `GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['filteringPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['body'],
    params?: IEndpoints['POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules',
      paramDefs: {
        path: ['filteringPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['filteringPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        path: ['filteringPolicy-id', 'policyRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['filteringPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
};
