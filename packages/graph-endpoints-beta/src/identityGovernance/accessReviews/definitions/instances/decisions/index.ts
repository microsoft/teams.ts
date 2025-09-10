export * as instance from './instance';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'delete'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions',
    'get'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'patch'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions',
    'post'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'get'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'post'
  >;
  'GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'get'
  >;
  'PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'patch'
  >;
  'DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'delete'
  >;
  'POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/recordAllDecisions': Operation<
    '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/recordAllDecisions',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions`
 *
 * Retrieve the accessReviewInstanceDecisionItem objects for a specific accessReviewInstance. A list of zero or more accessReviewInstanceDecisionItem objects are returned, including all of their nested properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions',
    paramDefs: {
      path: ['accessReviewScheduleDefinition-id', 'accessReviewInstance-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 * Read the properties and relationships of an accessReviewInstanceDecisionItem object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      path: [
        'accessReviewScheduleDefinition-id',
        'accessReviewInstance-id',
        'accessReviewInstanceDecisionItem-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions']['body'],
  params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions',
    paramDefs: {
      path: ['accessReviewScheduleDefinition-id', 'accessReviewInstance-id'],
    },
    params,
    body,
  };
}

export const insights = {
  /**
   * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'accessReviewScheduleDefinition-id',
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
        ],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['body'],
    params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
      paramDefs: {
        path: [
          'accessReviewScheduleDefinition-id',
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessReviewScheduleDefinition-id',
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
          'governanceInsight-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        path: [
          'accessReviewScheduleDefinition-id',
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
          'governanceInsight-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'accessReviewScheduleDefinition-id',
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
          'governanceInsight-id',
        ],
      },
      params,
    };
  },
};

export const recordAllDecisions = {
  /**
   * `POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/recordAllDecisions`
   *
   * As a reviewer of an access review, record a decision for an accessReviewInstanceDecisionItem that is assigned to you and that matches the principal or resource IDs specified. If no IDs are specified, the decisions will apply to every accessReviewInstanceDecisionItem for which you are the reviewer.
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/recordAllDecisions']['body'],
    params?: IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/recordAllDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/recordAllDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/recordAllDecisions',
      paramDefs: {
        path: ['accessReviewScheduleDefinition-id', 'accessReviewInstance-id'],
      },
      params,
      body,
    };
  },
};
