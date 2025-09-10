import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions',
    'get'
  >;
  'GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}',
    'patch'
  >;
  'POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions',
    'post'
  >;
  'GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
    'get'
  >;
  'POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
    'post'
  >;
  'GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
    'patch'
  >;
  'DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
    'delete'
  >;
  'POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/recordAllDecisions': Operation<
    '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/recordAllDecisions',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessReviewInstanceDecisionItem-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id1',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions`
 *
 * Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions',
    paramDefs: {
      path: ['accessReviewInstanceDecisionItem-id', 'accessReviewStage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 * Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: {
      path: [
        'accessReviewInstanceDecisionItem-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id1',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: {
      path: [
        'accessReviewInstanceDecisionItem-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id1',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions']['body'],
  params?: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions',
    paramDefs: {
      path: ['accessReviewInstanceDecisionItem-id', 'accessReviewStage-id'],
    },
    params,
    body,
  };
}

export const insights = {
  /**
   * `GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'accessReviewInstanceDecisionItem-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id1',
        ],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['body'],
    params?: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
      paramDefs: {
        path: [
          'accessReviewInstanceDecisionItem-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id1',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessReviewInstanceDecisionItem-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id1',
          'governanceInsight-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
      paramDefs: {
        path: [
          'accessReviewInstanceDecisionItem-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id1',
          'governanceInsight-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'accessReviewInstanceDecisionItem-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id1',
          'governanceInsight-id',
        ],
      },
      params,
    };
  },
};

export const recordAllDecisions = {
  /**
   * `POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/recordAllDecisions`
   *
   * As a reviewer of an access review, record a decision for an accessReviewInstanceDecisionItem that is assigned to you and that matches the principal or resource IDs specified. If no IDs are specified, the decisions will apply to every accessReviewInstanceDecisionItem for which you are the reviewer.
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/recordAllDecisions']['body'],
    params?: IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/recordAllDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/recordAllDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/recordAllDecisions',
      paramDefs: {
        path: ['accessReviewInstanceDecisionItem-id', 'accessReviewStage-id'],
      },
      params,
      body,
    };
  },
};
