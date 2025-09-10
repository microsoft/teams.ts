export * as stages from './stages';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/acceptRecommendations': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/acceptRecommendations',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/applyDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/applyDecisions',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/batchRecordDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/batchRecordDecisions',
    'post'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
    'get'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
    'post'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition',
    'get'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/resetDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/resetDecisions',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stop': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stop',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions',
    'post'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
    },
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance`
 *
 * There&#x27;s exactly one accessReviewInstance associated with each decision. The instance is the parent of the decision item, representing the recurrence of the access review the decision is made on.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    paramDefs: {
      path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance',
    paramDefs: {
      path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
    },
    params,
    body,
  };
}

export const acceptRecommendations = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/acceptRecommendations`
   *
   * Allows the acceptance of recommendations on all accessReviewInstanceDecisionItem objects that haven&#x27;t been reviewed for an accessReviewInstance object for which the calling user is a reviewer. Recommendations are generated if recommendationsEnabled is true on the accessReviewScheduleDefinition object. If there isn&#x27;t a recommendation on an accessReviewInstanceDecisionItem object no decision will be recorded.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/acceptRecommendations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/acceptRecommendations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/acceptRecommendations',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
};

export const applyDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/applyDecisions`
   *
   * Apply review decisions on an accessReviewInstance if the decisions were not applied automatically because the autoApplyDecisionsEnabled property is false in the review&#x27;s accessReviewScheduleSettings. The status of the accessReviewInstance must be Completed to call this method.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/applyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/applyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/applyDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
};

export const batchRecordDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/batchRecordDecisions`
   *
   * Enables reviewers to review all accessReviewInstanceDecisionItem objects in batches by using principalId, resourceId, or neither.
   */
  create: function create(
    body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/batchRecordDecisions']['body'],
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/batchRecordDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/batchRecordDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/batchRecordDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
      body,
    };
  },
};

export const contactedReviewers = {
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers`
   *
   * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['body'],
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}`
   *
   * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewReviewer-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['body'],
    params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        path: [
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewReviewer-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'accessReviewInstance-id',
          'accessReviewInstanceDecisionItem-id',
          'accessReviewReviewer-id',
        ],
      },
      params,
    };
  },
};

export const definition = {
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition`
   *
   * There&#x27;s exactly one accessReviewScheduleDefinition associated with each instance. It&#x27;s the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.
   */
  get: function get(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
};

export const resetDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/resetDecisions`
   *
   * Resets decisions of all accessReviewInstanceDecisionItem objects on an accessReviewInstance to notReviewed.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/resetDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/resetDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/resetDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
};

export const sendReminder = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder`
   *
   * Send a reminder to the reviewers of a currently active accessReviewInstance.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/sendReminder',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stop`
   *
   * Stop a currently active accessReviewInstance. After the access review instance stops, the instance status will be Completed, the reviewers can no longer give input, and the access review decisions can be applied. Stopping an instance will not effect future instances. To prevent a recurring access review from starting future instances, update the schedule definition to change its scheduled end date.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stop',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
};

export const stopApplyDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stopApplyDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewInstanceDecisionItem-id'],
      },
      params,
    };
  },
};
