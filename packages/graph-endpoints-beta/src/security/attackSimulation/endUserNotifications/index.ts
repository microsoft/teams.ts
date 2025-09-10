import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    'delete'
  >;
  'GET /security/attackSimulation/endUserNotifications': Operation<
    '/security/attackSimulation/endUserNotifications',
    'get'
  >;
  'GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    'patch'
  >;
  'POST /security/attackSimulation/endUserNotifications': Operation<
    '/security/attackSimulation/endUserNotifications',
    'post'
  >;
  'GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
    'get'
  >;
  'POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
    'post'
  >;
  'GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    'patch'
  >;
  'DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['endUserNotification-id'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/endUserNotifications`
 *
 * Get a list of endUserNotification objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/endUserNotifications']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/endUserNotifications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/endUserNotifications',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}`
 *
 * Represents an end user&#x27;s notification for an attack simulation training.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    paramDefs: {
      path: ['endUserNotification-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    paramDefs: {
      path: ['endUserNotification-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/endUserNotifications`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/endUserNotifications']['body']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/endUserNotifications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/endUserNotifications',
    body,
  };
}

export const details = {
  /**
   * `GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details`
   *
   */
  list: function list(
    params?: IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['endUserNotification-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['body'],
    params?: IEndpoints['POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
      paramDefs: {
        path: ['endUserNotification-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['endUserNotification-id', 'endUserNotificationDetail-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['body'],
    params?: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
      paramDefs: {
        path: ['endUserNotification-id', 'endUserNotificationDetail-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['endUserNotification-id', 'endUserNotificationDetail-id'],
      },
      params,
    };
  },
};
