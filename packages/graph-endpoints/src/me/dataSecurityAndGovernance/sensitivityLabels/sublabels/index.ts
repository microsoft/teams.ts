import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'delete'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'get'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'get'
  >;
  'PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'patch'
  >;
  'POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'post'
  >;
  'POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    'post'
  >;
  'GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights': Operation<
    '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
    'get'
  >;
}

/**
 * `DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
    },
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function list(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'get',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['body'],
  params?: IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function create(
  body: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['body'],
  params?: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    method: 'post',
    path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['body'],
    params?: IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['response']
  > {
    return {
      method: 'post',
      path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
      paramDefs: {
        path: ['sensitivityLabel-id'],
      },
      params,
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['response']
  > {
    return {
      method: 'get',
      path: '/me/dataSecurityAndGovernance/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
      },
      params,
    };
  },
};
