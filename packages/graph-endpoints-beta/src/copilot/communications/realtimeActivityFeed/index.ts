export * as meetings from './meetings';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/communications/realtimeActivityFeed': Operation<
    '/copilot/communications/realtimeActivityFeed',
    'delete'
  >;
  'GET /copilot/communications/realtimeActivityFeed': Operation<
    '/copilot/communications/realtimeActivityFeed',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed': Operation<
    '/copilot/communications/realtimeActivityFeed',
    'patch'
  >;
  'GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
    'get'
  >;
  'POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
    'post'
  >;
  'GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    'patch'
  >;
  'DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
    'delete'
  >;
}

/**
 * `DELETE /copilot/communications/realtimeActivityFeed`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed']['parameters']
): EndpointRequest<IEndpoints['DELETE /copilot/communications/realtimeActivityFeed']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/communications/realtimeActivityFeed',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed']['parameters']
): EndpointRequest<IEndpoints['GET /copilot/communications/realtimeActivityFeed']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/communications/realtimeActivityFeed`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed']['body']
): EndpointRequest<IEndpoints['PATCH /copilot/communications/realtimeActivityFeed']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/communications/realtimeActivityFeed',
    body,
  };
}

export const multiActivitySubscriptions = {
  /**
   * `GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions`
   *
   */
  create: function create(
    body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['body']
  ): EndpointRequest<
    IEndpoints['POST /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions',
      body,
    };
  },
  /**
   * `GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['multiActivitySubscription-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['body'],
    params?: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
      paramDefs: {
        path: ['multiActivitySubscription-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/copilot/communications/realtimeActivityFeed/multiActivitySubscriptions/{multiActivitySubscription-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['multiActivitySubscription-id'],
      },
      params,
    };
  },
};
