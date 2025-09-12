export * as decisions from './decisions';
export * as definitions from './definitions';
export * as historyDefinitions from './historyDefinitions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews': Operation<
    '/identityGovernance/accessReviews',
    'delete'
  >;
  'GET /identityGovernance/accessReviews': Operation<'/identityGovernance/accessReviews', 'get'>;
  'PATCH /identityGovernance/accessReviews': Operation<
    '/identityGovernance/accessReviews',
    'patch'
  >;
  'GET /identityGovernance/accessReviews/policy': Operation<
    '/identityGovernance/accessReviews/policy',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/policy': Operation<
    '/identityGovernance/accessReviews/policy',
    'patch'
  >;
  'DELETE /identityGovernance/accessReviews/policy': Operation<
    '/identityGovernance/accessReviews/policy',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/accessReviews']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/accessReviews']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/accessReviews']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/accessReviews',
    body,
  };
}

export const policy = {
  /**
   * `GET /identityGovernance/accessReviews/policy`
   *
   * Read the properties and relationships of an accessReviewPolicy object.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/accessReviews/policy']['parameters']
  ): EndpointRequest<IEndpoints['GET /identityGovernance/accessReviews/policy']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/accessReviews/policy',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/accessReviews/policy`
   *
   * Update the properties of an accessReviewPolicy object.
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/accessReviews/policy']['body']
  ): EndpointRequest<IEndpoints['PATCH /identityGovernance/accessReviews/policy']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/accessReviews/policy',
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/accessReviews/policy`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/accessReviews/policy']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /identityGovernance/accessReviews/policy']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/accessReviews/policy',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
