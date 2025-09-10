import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    'delete'
  >;
  'GET /networkAccess/tlsInspectionPolicies': Operation<
    '/networkAccess/tlsInspectionPolicies',
    'get'
  >;
  'GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    'patch'
  >;
  'POST /networkAccess/tlsInspectionPolicies': Operation<
    '/networkAccess/tlsInspectionPolicies',
    'post'
  >;
  'GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
    'get'
  >;
  'POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
    'post'
  >;
  'GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    'get'
  >;
  'PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    'patch'
  >;
  'DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}': Operation<
    '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
    'delete'
  >;
}

/**
 * `DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}`
 *
 * Delete a tlsInspectionPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['tlsInspectionPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/tlsInspectionPolicies`
 *
 * Get a list of the tlsInspectionPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/tlsInspectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tlsInspectionPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}`
 *
 * Get a tlsInspectionPolicy object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    paramDefs: {
      path: ['tlsInspectionPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}`
 *
 * Update the properties of a tlsInspectionPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}',
    paramDefs: {
      path: ['tlsInspectionPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/tlsInspectionPolicies`
 *
 * Create a new tlsInspectionPolicy object.
 */
export function create(
  body: IEndpoints['POST /networkAccess/tlsInspectionPolicies']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/tlsInspectionPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/tlsInspectionPolicies',
    body,
  };
}

export const policyRules = {
  /**
   * `GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules`
   *
   * Get a list of the tlsInspectionRule objects in a tlsInspectionPolicy.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['tlsInspectionPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules`
   *
   * Create a new tlsInspectionRule object in a tlsInspectionPolicy.
   */
  create: function create(
    body: IEndpoints['POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['body'],
    params?: IEndpoints['POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules',
      paramDefs: {
        path: ['tlsInspectionPolicy-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}`
   *
   * Get a tlsInspectionRule object.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['tlsInspectionPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}`
   *
   * Update the properties of a tlsInspectionRule object.
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['body'],
    params?: IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        path: ['tlsInspectionPolicy-id', 'policyRule-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}`
   *
   * Delete a tlsInspectionRule object.
   */
  del: function del(
    params?: IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/networkAccess/tlsInspectionPolicies/{tlsInspectionPolicy-id}/policyRules/{policyRule-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['tlsInspectionPolicy-id', 'policyRule-id'],
      },
      params,
    };
  },
};
