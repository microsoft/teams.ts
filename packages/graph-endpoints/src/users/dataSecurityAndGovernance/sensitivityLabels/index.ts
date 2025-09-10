export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    'get'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    'post'
  >;
  'POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['user-id', 'sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['user-id', 'sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['body'],
  params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['body'],
    params?: IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
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
   * `GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sensitivityLabel-id'],
      },
      params,
    };
  },
};
