export * as instance from './instance';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions',
    'get'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions',
    'post'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'get'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
    'post'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'patch'
  >;
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
    'delete'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/recordAllDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/recordAllDecisions',
    'post'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
      ],
    },
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions`
 *
 * Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function list(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions',
    paramDefs: {
      path: ['accessReviewInstance-id', 'accessReviewStage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 * Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      path: [
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}',
    paramDefs: {
      path: [
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions']['body'],
  params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions',
    paramDefs: {
      path: ['accessReviewInstance-id', 'accessReviewStage-id'],
    },
    params,
    body,
  };
}

export const insights = {
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  list: function list(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
        ],
      },
      params,
    };
  },
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['body'],
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights',
      paramDefs: {
        path: [
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  get: function get(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
          'governanceInsight-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['body'],
    params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        path: [
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
          'governanceInsight-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'accessReviewInstance-id',
          'accessReviewStage-id',
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
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/recordAllDecisions`
   *
   * As a reviewer of an access review, record a decision for an accessReviewInstanceDecisionItem that is assigned to you and that matches the principal or resource IDs specified. If no IDs are specified, the decisions will apply to every accessReviewInstanceDecisionItem for which you are the reviewer.
   */
  create: function create(
    body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/recordAllDecisions']['body'],
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/recordAllDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/recordAllDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/recordAllDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewStage-id'],
      },
      params,
      body,
    };
  },
};
