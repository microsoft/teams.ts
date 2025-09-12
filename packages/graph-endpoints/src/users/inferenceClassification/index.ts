import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/inferenceClassification': Operation<
    '/users/{user-id}/inferenceClassification',
    'get'
  >;
  'PATCH /users/{user-id}/inferenceClassification': Operation<
    '/users/{user-id}/inferenceClassification',
    'patch'
  >;
  'GET /users/{user-id}/inferenceClassification/overrides': Operation<
    '/users/{user-id}/inferenceClassification/overrides',
    'get'
  >;
  'POST /users/{user-id}/inferenceClassification/overrides': Operation<
    '/users/{user-id}/inferenceClassification/overrides',
    'post'
  >;
  'GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'get'
  >;
  'PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}': Operation<
    '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
    'delete'
  >;
}

/**
 * `GET /users/{user-id}/inferenceClassification`
 *
 * Relevance classification of the user&#x27;s messages based on explicit designations that override inferred relevance or importance.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/inferenceClassification']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/inferenceClassification']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/inferenceClassification',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/inferenceClassification`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/inferenceClassification']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/inferenceClassification']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/inferenceClassification']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/inferenceClassification',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const overrides = {
  /**
   * `GET /users/{user-id}/inferenceClassification/overrides`
   *
   * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/inferenceClassification/overrides']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/inferenceClassification/overrides']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/inferenceClassification/overrides',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/inferenceClassification/overrides`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/inferenceClassification/overrides']['body'],
    params?: IEndpoints['POST /users/{user-id}/inferenceClassification/overrides']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/inferenceClassification/overrides']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/inferenceClassification/overrides',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
   *
   * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'inferenceClassificationOverride-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
      paramDefs: {
        path: ['user-id', 'inferenceClassificationOverride-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'inferenceClassificationOverride-id'],
      },
      params,
    };
  },
};
