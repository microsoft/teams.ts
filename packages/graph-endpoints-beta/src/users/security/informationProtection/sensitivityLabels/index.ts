import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /users/{user-id}/security/informationProtection/sensitivityLabels': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /users/{user-id}/security/informationProtection/sensitivityLabels': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels',
    'post'
  >;
  'GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'get'
  >;
  'PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'patch'
  >;
  'DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent': Operation<
    '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/security/informationProtection/sensitivityLabels`
 *
 * Get a list of sensitivityLabel objects associated with a user or organization.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 * Read the Microsoft Purview Information Protection labels for the user or organization.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['user-id', 'sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['user-id', 'sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/security/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/security/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /users/{user-id}/security/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/security/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/security/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const parent = {
  /**
   * `GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sensitivityLabel-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
      paramDefs: {
        path: ['user-id', 'sensitivityLabel-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/security/informationProtection/sensitivityLabels/{sensitivityLabel-id}/parent',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'sensitivityLabel-id'],
      },
      params,
    };
  },
};
