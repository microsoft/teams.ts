export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /dataClassification/sensitivityLabels': Operation<
    '/dataClassification/sensitivityLabels',
    'get'
  >;
  'GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /dataClassification/sensitivityLabels': Operation<
    '/dataClassification/sensitivityLabels',
    'post'
  >;
  'POST /dataClassification/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/dataClassification/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /dataClassification/sensitivityLabels/evaluate': Operation<
    '/dataClassification/sensitivityLabels/evaluate',
    'post'
  >;
  'GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /dataClassification/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['GET /dataClassification/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitivityLabels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /dataClassification/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/sensitivityLabels']['body']
): EndpointRequest<IEndpoints['POST /dataClassification/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/sensitivityLabels',
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /dataClassification/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/sensitivityLabels/computeRightsAndInheritance']['body']
  ): EndpointRequest<
    IEndpoints['POST /dataClassification/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/sensitivityLabels/computeRightsAndInheritance',
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /dataClassification/sensitivityLabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /dataClassification/sensitivityLabels/evaluate']['body']
  ): EndpointRequest<
    IEndpoints['POST /dataClassification/sensitivityLabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/sensitivityLabels/evaluate',
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id'],
      },
      params,
    };
  },
};
