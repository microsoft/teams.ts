export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/evaluate': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['body'],
    params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/evaluate',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'sensitivityLabel-id'],
      },
      params,
    };
  },
};
