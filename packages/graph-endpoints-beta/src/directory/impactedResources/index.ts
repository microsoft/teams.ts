import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/impactedResources/{impactedResource-id}': Operation<
    '/directory/impactedResources/{impactedResource-id}',
    'delete'
  >;
  'GET /directory/impactedResources': Operation<'/directory/impactedResources', 'get'>;
  'GET /directory/impactedResources/{impactedResource-id}': Operation<
    '/directory/impactedResources/{impactedResource-id}',
    'get'
  >;
  'PATCH /directory/impactedResources/{impactedResource-id}': Operation<
    '/directory/impactedResources/{impactedResource-id}',
    'patch'
  >;
  'POST /directory/impactedResources': Operation<'/directory/impactedResources', 'post'>;
  'POST /directory/impactedResources/{impactedResource-id}/complete': Operation<
    '/directory/impactedResources/{impactedResource-id}/complete',
    'post'
  >;
  'POST /directory/impactedResources/{impactedResource-id}/dismiss': Operation<
    '/directory/impactedResources/{impactedResource-id}/dismiss',
    'post'
  >;
  'POST /directory/impactedResources/{impactedResource-id}/postpone': Operation<
    '/directory/impactedResources/{impactedResource-id}/postpone',
    'post'
  >;
  'POST /directory/impactedResources/{impactedResource-id}/reactivate': Operation<
    '/directory/impactedResources/{impactedResource-id}/reactivate',
    'post'
  >;
}

/**
 * `DELETE /directory/impactedResources/{impactedResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/impactedResources/{impactedResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['impactedResource-id'],
    },
    params,
  };
}

/**
 * `GET /directory/impactedResources`
 *
 */
export function list(
  params?: IEndpoints['GET /directory/impactedResources']['parameters']
): EndpointRequest<IEndpoints['GET /directory/impactedResources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/impactedResources',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/impactedResources/{impactedResource-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /directory/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/impactedResources/{impactedResource-id}',
    paramDefs: {
      path: ['impactedResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/impactedResources/{impactedResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/impactedResources/{impactedResource-id}']['body'],
  params?: IEndpoints['PATCH /directory/impactedResources/{impactedResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/impactedResources/{impactedResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/impactedResources/{impactedResource-id}',
    paramDefs: {
      path: ['impactedResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/impactedResources`
 *
 */
export function create(
  body: IEndpoints['POST /directory/impactedResources']['body']
): EndpointRequest<IEndpoints['POST /directory/impactedResources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/impactedResources',
    body,
  };
}

export const complete = {
  /**
   * `POST /directory/impactedResources/{impactedResource-id}/complete`
   *
   * Complete an impactedResource object and update its status to completedByUser.
   */
  create: function create(
    params?: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/complete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/impactedResources/{impactedResource-id}/complete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/impactedResources/{impactedResource-id}/complete',
      paramDefs: {
        path: ['impactedResource-id'],
      },
      params,
    };
  },
};

export const dismiss = {
  /**
   * `POST /directory/impactedResources/{impactedResource-id}/dismiss`
   *
   * Dismiss an impactedResources object and update its status to dismissed.
   */
  create: function create(
    body: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/dismiss']['body'],
    params?: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/dismiss']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/impactedResources/{impactedResource-id}/dismiss']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/impactedResources/{impactedResource-id}/dismiss',
      paramDefs: {
        path: ['impactedResource-id'],
      },
      params,
      body,
    };
  },
};

export const postpone = {
  /**
   * `POST /directory/impactedResources/{impactedResource-id}/postpone`
   *
   * Postpone action on an impactedResource object to a specified future date and time by marking its status as postponed. On the specified date and time, Microsoft Entra ID will automatically mark the status of the impactedResource object to active.
   */
  create: function create(
    body: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/postpone']['body'],
    params?: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/postpone']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/impactedResources/{impactedResource-id}/postpone']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/impactedResources/{impactedResource-id}/postpone',
      paramDefs: {
        path: ['impactedResource-id'],
      },
      params,
      body,
    };
  },
};

export const reactivate = {
  /**
   * `POST /directory/impactedResources/{impactedResource-id}/reactivate`
   *
   * Reactivate an accidentally dismissed, completed, or postponed impactedResource object. This action updates the status of the resource to active. This method is relevant only if the status of the impactedResource object is dismissed, postponed, or completedByUser.
   */
  create: function create(
    params?: IEndpoints['POST /directory/impactedResources/{impactedResource-id}/reactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /directory/impactedResources/{impactedResource-id}/reactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/directory/impactedResources/{impactedResource-id}/reactivate',
      paramDefs: {
        path: ['impactedResource-id'],
      },
      params,
    };
  },
};
