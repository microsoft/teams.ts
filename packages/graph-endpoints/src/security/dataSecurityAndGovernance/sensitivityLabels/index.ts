export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /security/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels',
    'get'
  >;
  'GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /security/dataSecurityAndGovernance/sensitivityLabels': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels',
    'post'
  >;
  'POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels`
 *
 * List the sensitivity labels available for the entire tenant.
 */
export function list(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 * Get a sensitivity label available for the entire tenant.
 */
export function get(
  params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/dataSecurityAndGovernance/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels']['body']
): EndpointRequest<
  IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels']['response']
> {
  return {
    method: 'post',
    path: '/security/dataSecurityAndGovernance/sensitivityLabels',
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['body']
  ): EndpointRequest<
    IEndpoints['POST /security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      method: 'post',
      path: '/security/dataSecurityAndGovernance/sensitivityLabels/computeRightsAndInheritance',
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   * Get the usage rights granted to the calling user for a specific sensitivity label that has admin-defined permissions.
   */
  list: function list(
    params?: IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      method: 'get',
      path: '/security/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id'],
      },
      params,
    };
  },
};
