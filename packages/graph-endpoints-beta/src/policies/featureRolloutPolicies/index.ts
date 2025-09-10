import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'delete'
  >;
  'GET /policies/featureRolloutPolicies': Operation<'/policies/featureRolloutPolicies', 'get'>;
  'GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'get'
  >;
  'PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'patch'
  >;
  'POST /policies/featureRolloutPolicies': Operation<'/policies/featureRolloutPolicies', 'post'>;
  'GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'get'
  >;
  'POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'post'
  >;
}

/**
 * `DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * Delete a featureRolloutPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['featureRolloutPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/featureRolloutPolicies`
 *
 * Retrieve a list of featureRolloutPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/featureRolloutPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/featureRolloutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/featureRolloutPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * Retrieve the properties and relationships of a featureRolloutPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: {
      path: ['featureRolloutPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * Update the properties of featureRolloutPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: {
      path: ['featureRolloutPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/featureRolloutPolicies`
 *
 * Create a new featureRolloutPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/featureRolloutPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/featureRolloutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/featureRolloutPolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
   *
   * Nullable. Specifies a list of directoryObject resources that feature is enabled for.
   */
  get: function get(
    params?: IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['featureRolloutPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
   *
   * Add an appliesTo on a featureRolloutPolicy object to specify the directoryObject to which the featureRolloutPolicy should be applied.
   */
  create: function create(
    body: IEndpoints['POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['body'],
    params?: IEndpoints['POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
      paramDefs: {
        path: ['featureRolloutPolicy-id'],
      },
      params,
      body,
    };
  },
};
