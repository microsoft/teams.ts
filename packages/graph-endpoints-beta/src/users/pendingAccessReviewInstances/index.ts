export * as decisions from './decisions';
export * as stages from './stages';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'delete'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances': Operation<
    '/users/{user-id}/pendingAccessReviewInstances',
    'get'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'get'
  >;
  'PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'patch'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances': Operation<
    '/users/{user-id}/pendingAccessReviewInstances',
    'post'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations',
    'post'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions',
    'post'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions',
    'post'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
    'get'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
    'post'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/definition': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/definition',
    'get'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions',
    'post'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder',
    'post'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stop': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stop',
    'post'
  >;
  'POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions': Operation<
    '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'accessReviewInstance-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances`
 *
 * Navigation property to get a list of access reviews pending approval by the reviewer.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 * Navigation property to get a list of access reviews pending approval by the reviewer.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: {
      path: ['user-id', 'accessReviewInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: {
      path: ['user-id', 'accessReviewInstance-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/pendingAccessReviewInstances`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances']['body'],
  params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/pendingAccessReviewInstances',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const acceptRecommendations = {
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations`
   *
   * Allows the acceptance of recommendations on all accessReviewInstanceDecisionItem objects that haven&#x27;t been reviewed for an accessReviewInstance object for which the calling user is a reviewer. Recommendations are generated if recommendationsEnabled is true on the accessReviewScheduleDefinition object. If there isn&#x27;t a recommendation on an accessReviewInstanceDecisionItem object no decision will be recorded.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const applyDecisions = {
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions`
   *
   * Apply review decisions on an accessReviewInstance if the decisions were not applied automatically because the autoApplyDecisionsEnabled property is false in the review&#x27;s accessReviewScheduleSettings. The status of the accessReviewInstance must be Completed to call this method.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const batchRecordDecisions = {
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions`
   *
   * Enables reviewers to review all accessReviewInstanceDecisionItem objects in batches by using principalId, resourceId, or neither.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions']['body'],
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
      body,
    };
  },
};

export const contactedReviewers = {
  /**
   * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers`
   *
   * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['body'],
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}`
   *
   * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'accessReviewInstance-id', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id', 'accessReviewReviewer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'accessReviewInstance-id', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
};

export const definition = {
  /**
   * `GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/definition`
   *
   * There&#x27;s exactly one accessReviewScheduleDefinition associated with each instance. It&#x27;s the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const resetDecisions = {
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions`
   *
   * Resets decisions of all accessReviewInstanceDecisionItem objects on an accessReviewInstance to notReviewed.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const sendReminder = {
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder`
   *
   * Send a reminder to the reviewers of a currently active accessReviewInstance.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stop`
   *
   * Stop a currently active accessReviewInstance. After the access review instance stops, the instance status will be Completed, the reviewers can no longer give input, and the access review decisions can be applied. Stopping an instance will not effect future instances. To prevent a recurring access review from starting future instances, update the schedule definition to change its scheduled end date.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stop',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const stopApplyDecisions = {
  /**
   * `POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions',
      paramDefs: {
        path: ['user-id', 'accessReviewInstance-id'],
      },
      params,
    };
  },
};
