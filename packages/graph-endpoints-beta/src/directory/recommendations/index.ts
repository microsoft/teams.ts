export * as impactedResources from './impactedResources';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/recommendations/{recommendation-id}': Operation<
    '/directory/recommendations/{recommendation-id}',
    'delete'
  >;
  'GET /directory/recommendations': Operation<'/directory/recommendations', 'get'>;
  'GET /directory/recommendations/{recommendation-id}': Operation<
    '/directory/recommendations/{recommendation-id}',
    'get'
  >;
  'PATCH /directory/recommendations/{recommendation-id}': Operation<
    '/directory/recommendations/{recommendation-id}',
    'patch'
  >;
  'POST /directory/recommendations': Operation<'/directory/recommendations', 'post'>;
  'POST /directory/recommendations/{recommendation-id}/complete': Operation<
    '/directory/recommendations/{recommendation-id}/complete',
    'post'
  >;
  'POST /directory/recommendations/{recommendation-id}/dismiss': Operation<
    '/directory/recommendations/{recommendation-id}/dismiss',
    'post'
  >;
  'POST /directory/recommendations/{recommendation-id}/postpone': Operation<
    '/directory/recommendations/{recommendation-id}/postpone',
    'post'
  >;
  'POST /directory/recommendations/{recommendation-id}/reactivate': Operation<
    '/directory/recommendations/{recommendation-id}/reactivate',
    'post'
  >;
}

/**
 * `DELETE /directory/recommendations/{recommendation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/recommendations/{recommendation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/recommendations/{recommendation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/recommendations/{recommendation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['recommendation-id'],
    },
    params,
  };
}

/**
 * `GET /directory/recommendations`
 *
 * Get a list of the recommendation objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/recommendations']['parameters']
): EndpointRequest<IEndpoints['GET /directory/recommendations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/recommendations/{recommendation-id}`
 *
 * Read the properties and relationships of a recommendation object.
 */
export function get(
  params?: IEndpoints['GET /directory/recommendations/{recommendation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /directory/recommendations/{recommendation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations/{recommendation-id}',
    paramDefs: {
      path: ['recommendation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/recommendations/{recommendation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/recommendations/{recommendation-id}']['body'],
  params?: IEndpoints['PATCH /directory/recommendations/{recommendation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /directory/recommendations/{recommendation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/recommendations/{recommendation-id}',
    paramDefs: {
      path: ['recommendation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/recommendations`
 *
 */
export function create(
  body: IEndpoints['POST /directory/recommendations']['body']
): EndpointRequest<IEndpoints['POST /directory/recommendations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations',
    body,
  };
}

export const complete = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/complete`
   *
   * Complete a recommendation object and update its status to completedByUser.
   */
  create: function create(
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/complete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/complete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/complete',
      paramDefs: {
        path: ['recommendation-id'],
      },
      params,
    };
  },
};

export const dismiss = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/dismiss`
   *
   * Dismiss a recommendation object that you consider to be inapplicable to your tenant and update its status to dismissed .
   */
  create: function create(
    body: IEndpoints['POST /directory/recommendations/{recommendation-id}/dismiss']['body'],
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/dismiss']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/dismiss']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/dismiss',
      paramDefs: {
        path: ['recommendation-id'],
      },
      params,
      body,
    };
  },
};

export const postpone = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/postpone`
   *
   * Postpone action on a recommendation object to a specified future date and time by marking its status as postponed. On the date and time provided, Microsoft Entra ID will automatically update the status of the recommendation object to active again.
   */
  create: function create(
    body: IEndpoints['POST /directory/recommendations/{recommendation-id}/postpone']['body'],
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/postpone']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/postpone']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/postpone',
      paramDefs: {
        path: ['recommendation-id'],
      },
      params,
      body,
    };
  },
};

export const reactivate = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/reactivate`
   *
   * Reactivate a completed, dismissed, or postponed recommendation object. This action updates the status of the recommendation to active. This method only works when the status of the recommendation is completedByUser, dismissed, or postponed.
   */
  create: function create(
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/reactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/reactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/reactivate',
      paramDefs: {
        path: ['recommendation-id'],
      },
      params,
    };
  },
};
