import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    'delete'
  >;
  'GET /deviceManagement/notificationMessageTemplates': Operation<
    '/deviceManagement/notificationMessageTemplates',
    'get'
  >;
  'GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    'get'
  >;
  'PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    'patch'
  >;
  'POST /deviceManagement/notificationMessageTemplates': Operation<
    '/deviceManagement/notificationMessageTemplates',
    'post'
  >;
  'GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
    'get'
  >;
  'POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
    'post'
  >;
  'GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    'get'
  >;
  'PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    'patch'
  >;
  'DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
    'delete'
  >;
  'POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage': Operation<
    '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['notificationMessageTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/notificationMessageTemplates`
 *
 * The Notification Message Templates.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/notificationMessageTemplates']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/notificationMessageTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}`
 *
 * The Notification Message Templates.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    paramDefs: {
      path: ['notificationMessageTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}',
    paramDefs: {
      path: ['notificationMessageTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/notificationMessageTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/notificationMessageTemplates']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/notificationMessageTemplates']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/notificationMessageTemplates',
    body,
  };
}

export const localizedNotificationMessages = {
  /**
   * `GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages`
   *
   * The list of localized messages for this Notification Message Template.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['notificationMessageTemplate-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['body'],
    params?: IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages',
      paramDefs: {
        path: ['notificationMessageTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}`
   *
   * The list of localized messages for this Notification Message Template.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['notificationMessageTemplate-id', 'localizedNotificationMessage-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['body'],
    params?: IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
      paramDefs: {
        path: ['notificationMessageTemplate-id', 'localizedNotificationMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/localizedNotificationMessages/{localizedNotificationMessage-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['notificationMessageTemplate-id', 'localizedNotificationMessage-id'],
      },
      params,
    };
  },
};

export const sendTestMessage = {
  /**
   * `POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage`
   *
   * Sends test message using the specified notificationMessageTemplate in the default locale
   */
  create: function create(
    params?: IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage']['response']
  > {
    return {
      method: 'post',
      path: '/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate-id}/sendTestMessage',
      paramDefs: {
        path: ['notificationMessageTemplate-id'],
      },
      params,
    };
  },
};
