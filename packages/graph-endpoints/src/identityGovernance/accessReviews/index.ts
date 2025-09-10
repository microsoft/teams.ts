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
}

/**
 * `DELETE /identityGovernance/accessReviews`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/accessReviews']['response']> {
  return {
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
    method: 'patch',
    path: '/identityGovernance/accessReviews',
    body,
  };
}
