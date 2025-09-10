export * as decisions from './decisions';
export * as stages from './stages';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances': Operation<'/me/pendingAccessReviewInstances', 'get'>;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    'patch'
  >;
  'POST /me/pendingAccessReviewInstances': Operation<'/me/pendingAccessReviewInstances', 'post'>;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions',
    'post'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
    'get'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
    'post'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/definition': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/definition',
    'get'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop',
    'post'
  >;
  'POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions': Operation<
    '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions',
    'post'
  >;
}

/**
 * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReviewInstance-id'],
    },
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances`
 *
 * Retrieve the accessReviewInstance objects pending approval by the calling user. A list of zero or more accessReviewInstance objects are returned, of which the calling user is an assigned reviewer.
 */
export function list(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances']['parameters']
): EndpointRequest<IEndpoints['GET /me/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 * Navigation property to get a list of access reviews pending approval by the reviewer.
 */
export function get(
  params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: {
      path: ['accessReviewInstance-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['body'],
  params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}',
    paramDefs: {
      path: ['accessReviewInstance-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/pendingAccessReviewInstances`
 *
 */
export function create(
  body: IEndpoints['POST /me/pendingAccessReviewInstances']['body']
): EndpointRequest<IEndpoints['POST /me/pendingAccessReviewInstances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/pendingAccessReviewInstances',
    body,
  };
}

export const acceptRecommendations = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations`
   *
   * Allows the acceptance of recommendations on all accessReviewInstanceDecisionItem objects that haven&#x27;t been reviewed for an accessReviewInstance object for which the calling user is a reviewer. Recommendations are generated if recommendationsEnabled is true on the accessReviewScheduleDefinition object. If there isn&#x27;t a recommendation on an accessReviewInstanceDecisionItem object no decision will be recorded.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/acceptRecommendations',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const applyDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions`
   *
   * Apply review decisions on an accessReviewInstance if the decisions were not applied automatically because the autoApplyDecisionsEnabled property is false in the review&#x27;s accessReviewScheduleSettings. The status of the accessReviewInstance must be Completed to call this method.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/applyDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const batchRecordDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions`
   *
   * Enables reviewers to review all accessReviewInstanceDecisionItem objects in batches by using principalId, resourceId, or neither.
   */
  create: function create(
    body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions']['body'],
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/batchRecordDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
      body,
    };
  },
};

export const contactedReviewers = {
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers`
   *
   * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
   */
  list: function list(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['body'],
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}`
   *
   * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReviewInstance-id', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['body'],
    params?: IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        path: ['accessReviewInstance-id', 'accessReviewReviewer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReviewInstance-id', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
};

export const definition = {
  /**
   * `GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/definition`
   *
   * There&#x27;s exactly one accessReviewScheduleDefinition associated with each instance. It&#x27;s the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.
   */
  get: function get(
    params?: IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/definition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/definition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/definition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const resetDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions`
   *
   * Resets decisions of all accessReviewInstanceDecisionItem objects on an accessReviewInstance to notReviewed.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/resetDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const sendReminder = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder`
   *
   * Send a reminder to the reviewers of a currently active accessReviewInstance.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/sendReminder',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop`
   *
   * Stop a currently active accessReviewInstance. After the access review instance stops, the instance status will be Completed, the reviewers can no longer give input, and the access review decisions can be applied. Stopping an instance will not effect future instances. To prevent a recurring access review from starting future instances, update the schedule definition to change its scheduled end date.
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stop',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
};

export const stopApplyDecisions = {
  /**
   * `POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/pendingAccessReviewInstances/{accessReviewInstance-id}/stopApplyDecisions',
      paramDefs: {
        path: ['accessReviewInstance-id'],
      },
      params,
    };
  },
};
