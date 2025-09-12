import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/instances': Operation<
    '/accessReviews/{accessReview-id}/instances',
    'get'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    'patch'
  >;
  'POST /accessReviews/{accessReview-id}/instances': Operation<
    '/accessReviews/{accessReview-id}/instances',
    'post'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
    'get'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    'patch'
  >;
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
    'get'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
    'patch'
  >;
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
    'delete'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/resetDecisions': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/resetDecisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
    'get'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder',
    'post'
  >;
  'POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/stop': Operation<
    '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/stop',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReview-id', 'accessReview-id1'],
    },
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/instances`
 *
 * The collection of access reviews instances past, present, and future, if this object is a recurring access review.
 */
export function list(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/instances']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances',
    paramDefs: {
      path: ['accessReview-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}`
 *
 * The collection of access reviews instances past, present, and future, if this object is a recurring access review.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    paramDefs: {
      path: ['accessReview-id', 'accessReview-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}',
    paramDefs: {
      path: ['accessReview-id', 'accessReview-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /accessReviews/{accessReview-id}/instances`
 *
 */
export function create(
  body: IEndpoints['POST /accessReviews/{accessReview-id}/instances']['body'],
  params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/instances']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews/{accessReview-id}/instances',
    paramDefs: {
      path: ['accessReview-id'],
    },
    params,
    body,
  };
}

export const applyDecisions = {
  /**
   * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions`
   *
   * In the Microsoft Entra access reviews feature, apply the decisions of a completed accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.   After an access review is finished, either because it reached the end date or an administrator stopped it manually, and auto-apply wasn&#x27;t configured for the review, you can call Apply to apply the changes. Until apply occurs, the decisions to remove access rights do not appear on the source resource, the users for instance retain their group memberships. By calling apply, the outcome of the review is implemented by updating the group or application. If a user&#x27;s access was denied in the review, when an administrator calls this API, Microsoft Entra ID removes their membership or application assignment.  After an access review is finished, and auto-apply was configured, then the status of the review will change from Completed through intermediate states and finally will change to state Applied. You should expect to see denied users, if any, being removed from the resource group membership or app assignment in a few minutes. A configured auto applying review, or selecting Apply doesn&#x27;t have an effect on a group that originates in an on-premises directory or a dynamic group. If you want to change a group that originates on-premises, download the results and apply those changes to the representation of the group in that directory.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/applyDecisions',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
    };
  },
};

export const decisions = {
  /**
   * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions`
   *
   * The collection of decisions for this access review.
   */
  list: function list(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
    };
  },
  /**
   * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions`
   *
   */
  create: function create(
    body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['body'],
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}`
   *
   * The collection of decisions for this access review.
   */
  get: function get(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewDecision-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['body'],
    params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewDecision-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/decisions/{accessReviewDecision-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewDecision-id'],
      },
      params,
    };
  },
};

export const myDecisions = {
  /**
   * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions`
   *
   * The collection of decisions for the caller, if the caller is a reviewer.
   */
  list: function list(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
    };
  },
  /**
   * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions`
   *
   */
  create: function create(
    body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['body'],
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`
   *
   * The collection of decisions for the caller, if the caller is a reviewer.
   */
  get: function get(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewDecision-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['body'],
    params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewDecision-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewDecision-id'],
      },
      params,
    };
  },
};

export const resetDecisions = {
  /**
   * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/resetDecisions`
   *
   * In the Microsoft Entra access reviews feature, reset the decisions of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  Previous decisions are no longer recorded, but reviewers can continue to update decisions.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/resetDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/resetDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/resetDecisions',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
    };
  },
};

export const reviewers = {
  /**
   * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers`
   *
   * The collection of reviewers for an access review, if access review reviewerType is of type delegated.
   */
  list: function list(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
    };
  },
  /**
   * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers`
   *
   */
  create: function create(
    body: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['body'],
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}`
   *
   * The collection of reviewers for an access review, if access review reviewerType is of type delegated.
   */
  get: function get(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['body'],
    params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewReviewer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers/{accessReviewReviewer-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReview-id', 'accessReview-id1', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
};

export const sendReminder = {
  /**
   * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder`
   *
   * In the Microsoft Entra access reviews feature, send a reminder to the reviewers of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/sendReminder',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/stop`
   *
   * In the Microsoft Entra access reviews feature, stop a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  (To prevent a recurring access review from starting future instances, update it to change its scheduled end date).  After the access review stops, reviewers can no longer give input, and the access review decisions can be applied.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/stop']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/instances/{accessReview-id1}/stop']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/instances/{accessReview-id1}/stop',
      paramDefs: {
        path: ['accessReview-id', 'accessReview-id1'],
      },
      params,
    };
  },
};
