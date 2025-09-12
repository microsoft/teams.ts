export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/sensitivityLabels': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /users/{user-id}/informationProtection/sensitivityLabels': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
  'GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['user-id', 'sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['user-id', 'sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /users/{user-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/sensitivityLabels/evaluate',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sensitivityLabel-id'],
      },
      params,
    };
  },
};
