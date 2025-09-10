export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['site-id', 'sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['site-id', 'sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/sensitivityLabels/evaluate',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'sensitivityLabel-id'],
      },
      params,
    };
  },
};
