import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'delete'
  >;
  'GET /users/{user-id}/insights/shared': Operation<'/users/{user-id}/insights/shared', 'get'>;
  'GET /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'get'
  >;
  'PATCH /users/{user-id}/insights/shared/{sharedInsight-id}': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}',
    'patch'
  >;
  'POST /users/{user-id}/insights/shared': Operation<'/users/{user-id}/insights/shared', 'post'>;
  'GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod',
    'get'
  >;
  'GET /users/{user-id}/insights/shared/{sharedInsight-id}/resource': Operation<
    '/users/{user-id}/insights/shared/{sharedInsight-id}/resource',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'sharedInsight-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/shared`
 *
 * Calculated relationship that identifies documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for work or school and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/insights/shared']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/insights/shared']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/shared',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 * Calculated relationship that identifies documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for work or school and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: {
      path: ['user-id', 'sharedInsight-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/insights/shared/{sharedInsight-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/insights/shared/{sharedInsight-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/insights/shared/{sharedInsight-id}',
    paramDefs: {
      path: ['user-id', 'sharedInsight-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/insights/shared`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/insights/shared']['body'],
  params?: IEndpoints['POST /users/{user-id}/insights/shared']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/insights/shared']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/insights/shared',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const lastSharedMethod = {
  /**
   * `GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sharedInsight-id'],
      },
      params,
    };
  },
};

export const resource = {
  /**
   * `GET /users/{user-id}/insights/shared/{sharedInsight-id}/resource`
   *
   * Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}/resource']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/insights/shared/{sharedInsight-id}/resource']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/insights/shared/{sharedInsight-id}/resource',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'sharedInsight-id'],
      },
      params,
    };
  },
};
