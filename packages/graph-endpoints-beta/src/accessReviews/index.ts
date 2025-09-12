export * as instances from './instances';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}': Operation<
    '/accessReviews/{accessReview-id}',
    'delete'
  >;
  'GET /accessReviews': Operation<'/accessReviews', 'get'>;
  'GET /accessReviews/{accessReview-id}': Operation<'/accessReviews/{accessReview-id}', 'get'>;
  'PATCH /accessReviews/{accessReview-id}': Operation<'/accessReviews/{accessReview-id}', 'patch'>;
  'POST /accessReviews': Operation<'/accessReviews', 'post'>;
  'POST /accessReviews/{accessReview-id}/applyDecisions': Operation<
    '/accessReviews/{accessReview-id}/applyDecisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/decisions': Operation<
    '/accessReviews/{accessReview-id}/decisions',
    'get'
  >;
  'POST /accessReviews/{accessReview-id}/decisions': Operation<
    '/accessReviews/{accessReview-id}/decisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    'patch'
  >;
  'DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
    'delete'
  >;
  'GET /accessReviews/{accessReview-id}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/myDecisions',
    'get'
  >;
  'POST /accessReviews/{accessReview-id}/myDecisions': Operation<
    '/accessReviews/{accessReview-id}/myDecisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    'patch'
  >;
  'DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}': Operation<
    '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
    'delete'
  >;
  'POST /accessReviews/{accessReview-id}/resetDecisions': Operation<
    '/accessReviews/{accessReview-id}/resetDecisions',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/reviewers',
    'get'
  >;
  'POST /accessReviews/{accessReview-id}/reviewers': Operation<
    '/accessReviews/{accessReview-id}/reviewers',
    'post'
  >;
  'GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    'get'
  >;
  'PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    'patch'
  >;
  'DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}': Operation<
    '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
    'delete'
  >;
  'POST /accessReviews/{accessReview-id}/sendReminder': Operation<
    '/accessReviews/{accessReview-id}/sendReminder',
    'post'
  >;
  'POST /accessReviews/{accessReview-id}/stop': Operation<
    '/accessReviews/{accessReview-id}/stop',
    'post'
  >;
}

/**
 * `DELETE /accessReviews/{accessReview-id}`
 *
 * In the Microsoft Entra access reviews feature, delete an accessReview object.
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /accessReviews/{accessReview-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['accessReview-id'],
    },
    params,
  };
}

/**
 * `GET /accessReviews`
 *
 * Retrieve the accessReview objects for a particular businessFlowTemplate. A list of zero or more accessReview objects are returned, for each one-time and recurring access review that was created with that business flow template.  Business flow template IDs are case sensitive. If many access reviews match the filter, to improve efficiency and avoid timeouts, retrieve the result set in pages, by including both the $top query parameter with a page size, for example 100, and the $skip&#x3D;0 query parameter in the request. These parameters can be included even when you don&#x27;t anticipate that the request spans multiple pages. When a result set spans multiple pages, Microsoft Graph returns that page with an @odata.nextLink property in the response that contains a URL to the next page of results. If that property is present, continue making requests with the @odata.nextLink URL in each response, until all the results are returned, as described in paging Microsoft Graph data in your app. The accessReview objects returned by this API don&#x27;t include nested structure properties such as settings, or relationships.  To retrieve an access review settings or relationships, use the get accessReview API.
 */
export function list(
  params?: IEndpoints['GET /accessReviews']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /accessReviews/{accessReview-id}`
 *
 * In the Microsoft Entra access reviews feature, retrieve an accessReview object.   To retrieve the reviewers of the access review, use the list accessReview reviewers API. To retrieve the decisions of the access review, use the list accessReview decisions API, or the list my accessReview decisions API. If this is a recurring access review, no decisions will be associated with the recurring access review series. Instead, use the instances relationship of that series to retrieve an accessReview collection of the past, current, and future instances of the access review. Each past and current instance will have decisions.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}',
    paramDefs: {
      path: ['accessReview-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}`
 *
 * In the Microsoft Entra access reviews feature, update an existing accessReview object to change one or more of its properties. This API is not intended to change the reviewers or decisions of a review.  To change the reviewers, use the addReviewer or removeReviewer APIs.  To stop an already-started one-time review, or an already-started instance of a recurring review, early, use the stop API. To apply the decisions to the target group or app access rights, use the apply API.
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /accessReviews/{accessReview-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}',
    paramDefs: {
      path: ['accessReview-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /accessReviews`
 *
 * In the Microsoft Entra access reviews feature, create a new accessReview object. Before making this request, the caller must have previously retrieved the list of business flow templates, to have the value of businessFlowTemplateId to include in the request. After making this request, the caller should create a programControl, to link the access review to a program.
 */
export function create(
  body: IEndpoints['POST /accessReviews']['body']
): EndpointRequest<IEndpoints['POST /accessReviews']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews',
    body,
  };
}

export const applyDecisions = {
  /**
   * `POST /accessReviews/{accessReview-id}/applyDecisions`
   *
   * In the Microsoft Entra access reviews feature, apply the decisions of a completed accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.   After an access review is finished, either because it reached the end date or an administrator stopped it manually, and auto-apply wasn&#x27;t configured for the review, you can call Apply to apply the changes. Until apply occurs, the decisions to remove access rights do not appear on the source resource, the users for instance retain their group memberships. By calling apply, the outcome of the review is implemented by updating the group or application. If a user&#x27;s access was denied in the review, when an administrator calls this API, Microsoft Entra ID removes their membership or application assignment.  After an access review is finished, and auto-apply was configured, then the status of the review will change from Completed through intermediate states and finally will change to state Applied. You should expect to see denied users, if any, being removed from the resource group membership or app assignment in a few minutes. A configured auto applying review, or selecting Apply doesn&#x27;t have an effect on a group that originates in an on-premises directory or a dynamic group. If you want to change a group that originates on-premises, download the results and apply those changes to the representation of the group in that directory.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/applyDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/applyDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/applyDecisions',
      paramDefs: {
        path: ['accessReview-id'],
      },
      params,
    };
  },
};

export const decisions = {
  /**
   * `GET /accessReviews/{accessReview-id}/decisions`
   *
   * In the Microsoft Entra access reviews feature, retrieve the decisions of an accessReview object. Note that a recurring access review will not have a decisions relationship.  Instead, the caller must navigate the instance relationship to find an accessReview object for a current or past instance of the access review.
   */
  list: function list(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/decisions']['parameters']
  ): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/decisions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/decisions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReview-id'],
      },
      params,
    };
  },
  /**
   * `POST /accessReviews/{accessReview-id}/decisions`
   *
   */
  create: function create(
    body: IEndpoints['POST /accessReviews/{accessReview-id}/decisions']['body'],
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/decisions']['parameters']
  ): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/decisions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/decisions',
      paramDefs: {
        path: ['accessReview-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
   *
   * The collection of decisions for this access review.
   */
  get: function get(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReview-id', 'accessReviewDecision-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['body'],
    params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
      paramDefs: {
        path: ['accessReview-id', 'accessReviewDecision-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/accessReviews/{accessReview-id}/decisions/{accessReviewDecision-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReview-id', 'accessReviewDecision-id'],
      },
      params,
    };
  },
};

export const myDecisions = {
  /**
   * `GET /accessReviews/{accessReview-id}/myDecisions`
   *
   * In the Microsoft Entra access reviews feature, retrieve the decisions of an accessReview object for the calling user as reviewer.
   */
  list: function list(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions']['parameters']
  ): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/myDecisions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReview-id'],
      },
      params,
    };
  },
  /**
   * `POST /accessReviews/{accessReview-id}/myDecisions`
   *
   */
  create: function create(
    body: IEndpoints['POST /accessReviews/{accessReview-id}/myDecisions']['body'],
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/myDecisions']['parameters']
  ): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/myDecisions']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/myDecisions',
      paramDefs: {
        path: ['accessReview-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}`
   *
   * The collection of decisions for the caller, if the caller is a reviewer.
   */
  get: function get(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReview-id', 'accessReviewDecision-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['body'],
    params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
      paramDefs: {
        path: ['accessReview-id', 'accessReviewDecision-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/accessReviews/{accessReview-id}/myDecisions/{accessReviewDecision-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReview-id', 'accessReviewDecision-id'],
      },
      params,
    };
  },
};

export const resetDecisions = {
  /**
   * `POST /accessReviews/{accessReview-id}/resetDecisions`
   *
   * In the Microsoft Entra access reviews feature, reset the decisions of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  Previous decisions are no longer recorded, but reviewers can continue to update decisions.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/resetDecisions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /accessReviews/{accessReview-id}/resetDecisions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/resetDecisions',
      paramDefs: {
        path: ['accessReview-id'],
      },
      params,
    };
  },
};

export const reviewers = {
  /**
   * `GET /accessReviews/{accessReview-id}/reviewers`
   *
   * In the Microsoft Entra access reviews feature, retrieve the reviewers of an accessReview object.
   */
  list: function list(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/reviewers']['parameters']
  ): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}/reviewers']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/reviewers',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['accessReview-id'],
      },
      params,
    };
  },
  /**
   * `POST /accessReviews/{accessReview-id}/reviewers`
   *
   * In the Microsoft Entra access reviews feature, update an existing accessReview object to add another user as a reviewer.  This operation is only permitted for an access review that isn&#x27;t yet completed, and only for an access review where the reviewers are explicitly specified. This operation isn&#x27;t permitted for an access review in which users review their own access, and not intended for an access review in which the group owners are assigned as the reviewers.
   */
  create: function create(
    body: IEndpoints['POST /accessReviews/{accessReview-id}/reviewers']['body'],
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/reviewers']['parameters']
  ): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/reviewers']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/reviewers',
      paramDefs: {
        path: ['accessReview-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}`
   *
   * The collection of reviewers for an access review, if access review reviewerType is of type delegated.
   */
  get: function get(
    params?: IEndpoints['GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['accessReview-id', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['body'],
    params?: IEndpoints['PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
      paramDefs: {
        path: ['accessReview-id', 'accessReviewReviewer-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}`
   *
   * In the Microsoft Entra access reviews feature, update an existing accessReview object to remove a user as a reviewer.  This operation is only permitted for an access review that isn&#x27;t yet completed, and only for an access review where the reviewers are explicitly specified. This operation isn&#x27;t permitted for an access review in which users review their own access, and not intended for an access review in which the group owners are assigned as the reviewers.
   */
  del: function del(
    params?: IEndpoints['DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/accessReviews/{accessReview-id}/reviewers/{accessReviewReviewer-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['accessReview-id', 'accessReviewReviewer-id'],
      },
      params,
    };
  },
};

export const sendReminder = {
  /**
   * `POST /accessReviews/{accessReview-id}/sendReminder`
   *
   * In the Microsoft Entra access reviews feature, send a reminder to the reviewers of a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/sendReminder']['parameters']
  ): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/sendReminder']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/sendReminder',
      paramDefs: {
        path: ['accessReview-id'],
      },
      params,
    };
  },
};

export const stop = {
  /**
   * `POST /accessReviews/{accessReview-id}/stop`
   *
   * In the Microsoft Entra access reviews feature, stop a currently active accessReview.  The target object can be either a one-time access review, or an instance of a recurring access review.  (To prevent a recurring access review from starting future instances, update it to change its scheduled end date).  After the access review stops, reviewers can no longer give input, and the access review decisions can be applied.
   */
  create: function create(
    params?: IEndpoints['POST /accessReviews/{accessReview-id}/stop']['parameters']
  ): EndpointRequest<IEndpoints['POST /accessReviews/{accessReview-id}/stop']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/accessReviews/{accessReview-id}/stop',
      paramDefs: {
        path: ['accessReview-id'],
      },
      params,
    };
  },
};
