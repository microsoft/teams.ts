export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /informationProtection/sensitivityLabels': Operation<
    '/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /informationProtection/sensitivityLabels': Operation<
    '/informationProtection/sensitivityLabels',
    'post'
  >;
  'POST /informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /informationProtection/sensitivityLabels/evaluate': Operation<
    '/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
  'GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['GET /informationProtection/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/sensitivityLabels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /informationProtection/sensitivityLabels']['body']
): EndpointRequest<IEndpoints['POST /informationProtection/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/sensitivityLabels',
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /informationProtection/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/sensitivityLabels/computeRightsAndInheritance']['body']
  ): EndpointRequest<
    IEndpoints['POST /informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/sensitivityLabels/computeRightsAndInheritance',
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /informationProtection/sensitivityLabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/sensitivityLabels/evaluate']['body']
  ): EndpointRequest<
    IEndpoints['POST /informationProtection/sensitivityLabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/sensitivityLabels/evaluate',
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id'],
      },
      params,
    };
  },
};
