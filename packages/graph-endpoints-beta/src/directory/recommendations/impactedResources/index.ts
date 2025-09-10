import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    'delete'
  >;
  'GET /directory/recommendations/{recommendation-id}/impactedResources': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources',
    'get'
  >;
  'GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    'get'
  >;
  'PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    'patch'
  >;
  'POST /directory/recommendations/{recommendation-id}/impactedResources': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources',
    'post'
  >;
  'POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete',
    'post'
  >;
  'POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss',
    'post'
  >;
  'POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/postpone': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/postpone',
    'post'
  >;
  'POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/reactivate': Operation<
    '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/reactivate',
    'post'
  >;
}

/**
 * `DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['recommendation-id', 'impactedResource-id'],
    },
    params,
  };
}

/**
 * `GET /directory/recommendations/{recommendation-id}/impactedResources`
 *
 * Get the impactedResource objects for a recommendation.
 */
export function list(
  params?: IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations/{recommendation-id}/impactedResources',
    paramDefs: {
      path: ['recommendation-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}`
 *
 * Read the properties and relationships of an impactedResource object.
 */
export function get(
  params?: IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    paramDefs: {
      path: ['recommendation-id', 'impactedResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['body'],
  params?: IEndpoints['PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}',
    paramDefs: {
      path: ['recommendation-id', 'impactedResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/recommendations/{recommendation-id}/impactedResources`
 *
 */
export function create(
  body: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources']['body'],
  params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/recommendations/{recommendation-id}/impactedResources',
    paramDefs: {
      path: ['recommendation-id'],
    },
    params,
    body,
  };
}

export const complete = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete`
   *
   * Complete an impactedResource object and update its status to completedByUser.
   */
  create: function create(
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/complete',
      paramDefs: {
        path: ['recommendation-id', 'impactedResource-id'],
      },
      params,
    };
  },
};

export const dismiss = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss`
   *
   * Dismiss an impactedResources object and update its status to dismissed.
   */
  create: function create(
    body: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss']['body'],
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/dismiss',
      paramDefs: {
        path: ['recommendation-id', 'impactedResource-id'],
      },
      params,
      body,
    };
  },
};

export const postpone = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/postpone`
   *
   * Postpone action on an impactedResource object to a specified future date and time by marking its status as postponed. On the specified date and time, Microsoft Entra ID will automatically mark the status of the impactedResource object to active.
   */
  create: function create(
    body: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/postpone']['body'],
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/postpone']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/postpone']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/postpone',
      paramDefs: {
        path: ['recommendation-id', 'impactedResource-id'],
      },
      params,
      body,
    };
  },
};

export const reactivate = {
  /**
   * `POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/reactivate`
   *
   * Reactivate an accidentally dismissed, completed, or postponed impactedResource object. This action updates the status of the resource to active. This method is relevant only if the status of the impactedResource object is dismissed, postponed, or completedByUser.
   */
  create: function create(
    params?: IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/reactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/reactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/recommendations/{recommendation-id}/impactedResources/{impactedResource-id}/reactivate',
      paramDefs: {
        path: ['recommendation-id', 'impactedResource-id'],
      },
      params,
    };
  },
};
