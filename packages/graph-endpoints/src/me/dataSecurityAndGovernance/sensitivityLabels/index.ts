export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels',
    'get'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /me/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels',
    'post'
  >;
  'POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels']['response']> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels']['body']
): EndpointRequest<IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels']['response']> {
  return {
    method: 'post',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels',
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      method: 'post',
      path: '/me/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      method: 'get',
      path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id'],
      },
      params,
    };
  },
};
