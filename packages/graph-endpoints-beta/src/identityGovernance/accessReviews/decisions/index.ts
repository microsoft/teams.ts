export * as instance from './instance';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/decisions': Operation<
    '/identityGovernance/accessReviews/decisions',
    'get'
  >;
  'GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}',
    'patch'
  >;
  'POST /identityGovernance/accessReviews/decisions': Operation<
    '/identityGovernance/accessReviews/decisions',
    'post'
  >;
  'GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'get'
  >;
  'POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'post'
  >;
  'GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'patch'
  >;
  'DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'delete'
  >;
  'POST /identityGovernance/accessReviews/decisions/recordAllDecisions': Operation<
    '/identityGovernance/accessReviews/decisions/recordAllDecisions',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReviewInstanceDecisionItem-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/decisions`
 *
 * Represents a Microsoft Entra access review decision on an instance of a review.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/decisions']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/accessReviews/decisions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/decisions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 * Represents a Microsoft Entra access review decision on an instance of a review.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      path: ['accessReviewInstanceDecisionItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      path: ['accessReviewInstanceDecisionItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/accessReviews/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/decisions']['body']
): EndpointRequest<IEndpoints['POST /identityGovernance/accessReviews/decisions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/accessReviews/decisions',
    body,
  };
}

export const insights = {
  /**
   * `GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights']['body'],
    params?: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights',
      paramDefs: {
        path: ['accessReviewInstanceDecisionItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReviewInstanceDecisionItem-id', 'governanceInsight-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        path: ['accessReviewInstanceDecisionItem-id', 'governanceInsight-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReviewInstanceDecisionItem-id', 'governanceInsight-id'],
      },
      params,
    };
  },
};

export const recordAllDecisions = {
  /**
   * `POST /identityGovernance/accessReviews/decisions/recordAllDecisions`
   *
   * As a reviewer of an access review, record a decision for an accessReviewInstanceDecisionItem that is assigned to you and that matches the principal or resource IDs specified. If no IDs are specified, the decisions will apply to every accessReviewInstanceDecisionItem for which you are the reviewer.
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/accessReviews/decisions/recordAllDecisions']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/decisions/recordAllDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/decisions/recordAllDecisions',
      body,
    };
  },
};
