import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    'delete'
  >;
  'GET /networkAccess/forwardingPolicies': Operation<'/networkAccess/forwardingPolicies', 'get'>;
  'GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    'patch'
  >;
  'POST /networkAccess/forwardingPolicies': Operation<'/networkAccess/forwardingPolicies', 'post'>;
  'GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
    'get'
  >;
  'POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
    'post'
  >;
  'GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['forwardingPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/forwardingPolicies`
 *
 * Retrieve a list of forwarding policies associated with a specific traffic forwarding profile.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/forwardingPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/forwardingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}`
 *
 * Retrieve information about a specific forwarding policy.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    paramDefs: {
      path: ['forwardingPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}',
    paramDefs: {
      path: ['forwardingPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/forwardingPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/forwardingPolicies']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/forwardingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/forwardingPolicies',
    body,
  };
}

export const policyRules = {
  /**
   * `GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['forwardingPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['body'],
    params?: IEndpoints['POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules',
      paramDefs: {
        path: ['forwardingPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['forwardingPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}`
   *
   * Update an existing forwarding rule within a forwarding policy.
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        path: ['forwardingPolicy-id', 'policyRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/forwardingPolicies/{forwardingPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['forwardingPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
};
