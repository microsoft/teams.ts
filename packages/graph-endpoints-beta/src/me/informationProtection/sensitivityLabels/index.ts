export * as sublabels from './sublabels';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'delete'
  >;
  'GET /me/informationProtection/sensitivityLabels': Operation<
    '/me/informationProtection/sensitivityLabels',
    'get'
  >;
  'GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'get'
  >;
  'PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    'patch'
  >;
  'POST /me/informationProtection/sensitivityLabels': Operation<
    '/me/informationProtection/sensitivityLabels',
    'post'
  >;
  'POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/me/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /me/informationProtection/sensitivityLabels/evaluate': Operation<
    '/me/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
  'GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights': Operation<
    '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
    'get'
  >;
}

/**
 * `DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/sensitivityLabels`
 *
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/sensitivityLabels']['parameters']
): EndpointRequest<IEndpoints['GET /me/informationProtection/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/sensitivityLabels',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/sensitivityLabels`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/sensitivityLabels']['body']
): EndpointRequest<IEndpoints['POST /me/informationProtection/sensitivityLabels']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/sensitivityLabels',
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/sensitivityLabels/computeRightsAndInheritance',
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /me/informationProtection/sensitivityLabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/sensitivityLabels/evaluate']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/sensitivityLabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/sensitivityLabels/evaluate',
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/informationProtection/sensitivityLabels/{sensitivityLabel-id}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id'],
      },
      params,
    };
  },
};
