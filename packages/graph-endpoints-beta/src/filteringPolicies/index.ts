import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /filteringPolicies/{filteringPolicy-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}',
    'delete'
  >;
  'GET /filteringPolicies': Operation<'/filteringPolicies', 'get'>;
  'GET /filteringPolicies/{filteringPolicy-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}',
    'get'
  >;
  'PATCH /filteringPolicies/{filteringPolicy-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}',
    'patch'
  >;
  'POST /filteringPolicies': Operation<'/filteringPolicies', 'post'>;
  'GET /filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules',
    'get'
  >;
  'POST /filteringPolicies/{filteringPolicy-id}/policyRules': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules',
    'post'
  >;
  'GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /filteringPolicies/{filteringPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/filteringPolicies/{filteringPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['filteringPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /filteringPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /filteringPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/filteringPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /filteringPolicies/{filteringPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<IEndpoints['GET /filteringPolicies/{filteringPolicy-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/filteringPolicies/{filteringPolicy-id}',
    paramDefs: {
      path: ['filteringPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /filteringPolicies/{filteringPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}']['body'],
  params?: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/filteringPolicies/{filteringPolicy-id}',
    paramDefs: {
      path: ['filteringPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /filteringPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /filteringPolicies']['body']
): EndpointRequest<IEndpoints['POST /filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/filteringPolicies',
    body,
  };
}

export const policyRules = {
  /**
   * `GET /filteringPolicies/{filteringPolicy-id}/policyRules`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  list: function list(
    params?: IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/filteringPolicies/{filteringPolicy-id}/policyRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['filteringPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /filteringPolicies/{filteringPolicy-id}/policyRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /filteringPolicies/{filteringPolicy-id}/policyRules']['body'],
    params?: IEndpoints['POST /filteringPolicies/{filteringPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /filteringPolicies/{filteringPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/filteringPolicies/{filteringPolicy-id}/policyRules',
      paramDefs: {
        path: ['filteringPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  get: function get(
    params?: IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['filteringPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['body'],
    params?: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        path: ['filteringPolicy-id', 'policyRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/filteringPolicies/{filteringPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['filteringPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
};
