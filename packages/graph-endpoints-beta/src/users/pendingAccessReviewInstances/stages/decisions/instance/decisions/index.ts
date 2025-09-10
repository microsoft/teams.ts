import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    'delete'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
    'get'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    'get'
  >;
  'PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    'patch'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
    'post'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
    'get'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
    'post'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
    'delete'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'user-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
        'accessReviewInstanceDecisionItem-id1',
      ],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions`
 *
 * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
    paramDefs: {
      path: [
        'user-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
      ],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 * Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: {
      path: [
        'user-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
        'accessReviewInstanceDecisionItem-id1',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}',
    paramDefs: {
      path: [
        'user-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
        'accessReviewInstanceDecisionItem-id1',
      ],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions',
    paramDefs: {
      path: [
        'user-id',
        'accessReviewInstance-id',
        'accessReviewStage-id',
        'accessReviewInstanceDecisionItem-id',
      ],
    },
    params,
    body,
  };
}

export const insights = {
  /**
   * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'user-id',
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewInstanceDecisionItem-id1',
        ],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['body'],
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights',
      paramDefs: {
        path: [
          'user-id',
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewInstanceDecisionItem-id1',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}`
   *
   * Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'user-id',
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewInstanceDecisionItem-id1',
          'governanceInsight-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
      paramDefs: {
        path: [
          'user-id',
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewInstanceDecisionItem-id1',
          'governanceInsight-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'user-id',
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
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
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions`
   *
   * As a reviewer of an access review, record a decision for an accessReviewInstanceDecisionItem that is assigned to you and that matches the principal or resource IDs specified. If no IDs are specified, the decisions will apply to every accessReviewInstanceDecisionItem for which you are the reviewer.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions']['body'],
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/recordAllDecisions',
      paramDefs: {
        path: [
          'user-id',
          'accessReviewInstance-id',
          'accessReviewStage-id',
          'accessReviewInstanceDecisionItem-id',
        ],
      },
      params,
      body,
    };
  },
};
