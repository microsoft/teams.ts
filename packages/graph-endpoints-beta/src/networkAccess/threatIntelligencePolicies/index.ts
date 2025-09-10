import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    'delete'
  >;
  'GET /networkAccess/threatIntelligencePolicies': Operation<
    '/networkAccess/threatIntelligencePolicies',
    'get'
  >;
  'GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    'patch'
  >;
  'POST /networkAccess/threatIntelligencePolicies': Operation<
    '/networkAccess/threatIntelligencePolicies',
    'post'
  >;
  'GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
    'get'
  >;
  'POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
    'post'
  >;
  'GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}`
 *
 * Delete a threatIntelligencePolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['threatIntelligencePolicy-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/threatIntelligencePolicies`
 *
 * Get a list of the threatIntelligencePolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/threatIntelligencePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/threatIntelligencePolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}`
 *
 * Read the properties and relationships of a threatIntelligencePolicy object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    paramDefs: {
      path: ['threatIntelligencePolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}`
 *
 * Update the properties of a threatIntelligencePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    paramDefs: {
      path: ['threatIntelligencePolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/threatIntelligencePolicies`
 *
 * Create a new threatIntelligencePolicy object.
 */
export function create(
  body: IEndpoints['POST /networkAccess/threatIntelligencePolicies']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/threatIntelligencePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/threatIntelligencePolicies',
    body,
  };
}

export const policyRules = {
  /**
   * `GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['threatIntelligencePolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules`
   *
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['body'],
    params?: IEndpoints['POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules',
      paramDefs: {
        path: ['threatIntelligencePolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}`
   *
   * Represents the definition of the policy ruleset that makes up the core definition of a policy.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['threatIntelligencePolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        path: ['threatIntelligencePolicy-id', 'policyRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['threatIntelligencePolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
};
