import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'delete'
  >;
  'GET /directory/featureRolloutPolicies': Operation<'/directory/featureRolloutPolicies', 'get'>;
  'GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'get'
  >;
  'PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'patch'
  >;
  'POST /directory/featureRolloutPolicies': Operation<'/directory/featureRolloutPolicies', 'post'>;
  'GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'get'
  >;
  'POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'post'
  >;
}

/**
 * `DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['featureRolloutPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /directory/featureRolloutPolicies`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /directory/featureRolloutPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /directory/featureRolloutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/featureRolloutPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: {
      path: ['featureRolloutPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['body'],
  params?: IEndpoints['PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: {
      path: ['featureRolloutPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/featureRolloutPolicies`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /directory/featureRolloutPolicies']['body']
): EndpointRequest<IEndpoints['POST /directory/featureRolloutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/featureRolloutPolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
   *
   * Nullable. Specifies a list of directoryObject resources that feature is enabled for.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['featureRolloutPolicy-id'],
      },
      params,
    };
  },
  /**
   * `POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['body'],
    params?: IEndpoints['POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
      paramDefs: {
        path: ['featureRolloutPolicy-id'],
      },
      params,
      body,
    };
  },
};
