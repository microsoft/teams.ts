export * as attachments from './attachments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/messages': Operation<
    '/admin/serviceAnnouncement/messages',
    'get'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    'patch'
  >;
  'POST /admin/serviceAnnouncement/messages': Operation<
    '/admin/serviceAnnouncement/messages',
    'post'
  >;
  'POST /admin/serviceAnnouncement/messages/archive': Operation<
    '/admin/serviceAnnouncement/messages/archive',
    'post'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    'get'
  >;
  'PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    'put'
  >;
  'DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    'delete'
  >;
  'POST /admin/serviceAnnouncement/messages/favorite': Operation<
    '/admin/serviceAnnouncement/messages/favorite',
    'post'
  >;
  'POST /admin/serviceAnnouncement/messages/markRead': Operation<
    '/admin/serviceAnnouncement/messages/markRead',
    'post'
  >;
  'POST /admin/serviceAnnouncement/messages/markUnread': Operation<
    '/admin/serviceAnnouncement/messages/markUnread',
    'post'
  >;
  'POST /admin/serviceAnnouncement/messages/unarchive': Operation<
    '/admin/serviceAnnouncement/messages/unarchive',
    'post'
  >;
  'POST /admin/serviceAnnouncement/messages/unfavorite': Operation<
    '/admin/serviceAnnouncement/messages/unfavorite',
    'post'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['serviceUpdateMessage-id'],
    },
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages`
 *
 * Retrieve the serviceUpdateMessage resources from the messages navigation property. This operation retrieves all service update messages that exist for the tenant.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages']['parameters']
): EndpointRequest<IEndpoints['GET /admin/serviceAnnouncement/messages']['response']> {
  return {
    method: 'get',
    path: '/admin/serviceAnnouncement/messages',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}`
 *
 * Retrieve the properties and relationships of a serviceUpdateMessage object. This operation retrieves a specified service update message for the tenant. The operation returns an error if the message does not exist for the tenant.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['response']
> {
  return {
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    paramDefs: {
      path: ['serviceUpdateMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}',
    paramDefs: {
      path: ['serviceUpdateMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/serviceAnnouncement/messages`
 *
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages']['body']
): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages']['response']> {
  return {
    method: 'post',
    path: '/admin/serviceAnnouncement/messages',
    body,
  };
}

export const archive = {
  /**
   * `POST /admin/serviceAnnouncement/messages/archive`
   *
   * Archive a list of serviceUpdateMessages for the signed in user.
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/messages/archive']['body']
  ): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/archive']['response']> {
    return {
      method: 'post',
      path: '/admin/serviceAnnouncement/messages/archive',
      body,
    };
  },
};

export const attachmentsArchive = {
  /**
   * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive`
   *
   * Get the list of attachments associated with a service message.
   */
  get: function get(
    params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['response']
  > {
    return {
      method: 'get',
      path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
      paramDefs: {
        path: ['serviceUpdateMessage-id'],
      },
      params,
    };
  },
  /**
   * `PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive`
   *
   * The zip file that contains all attachments for a message.
   */
  set: function set(
    body: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['body'],
    params?: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['response']
  > {
    return {
      method: 'put',
      path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
      paramDefs: {
        path: ['serviceUpdateMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive`
   *
   * The zip file that contains all attachments for a message.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['response']
  > {
    return {
      method: 'delete',
      path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
      paramDefs: {
        header: ['If-Match'],
        path: ['serviceUpdateMessage-id'],
      },
      params,
    };
  },
};

export const favorite = {
  /**
   * `POST /admin/serviceAnnouncement/messages/favorite`
   *
   * Change the status of a list of serviceUpdateMessages to favorite for the signed in user.
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/messages/favorite']['body']
  ): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/favorite']['response']> {
    return {
      method: 'post',
      path: '/admin/serviceAnnouncement/messages/favorite',
      body,
    };
  },
};

export const markRead = {
  /**
   * `POST /admin/serviceAnnouncement/messages/markRead`
   *
   * Mark a list of serviceUpdateMessages as read for the signed in user.
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/messages/markRead']['body']
  ): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/markRead']['response']> {
    return {
      method: 'post',
      path: '/admin/serviceAnnouncement/messages/markRead',
      body,
    };
  },
};

export const markUnread = {
  /**
   * `POST /admin/serviceAnnouncement/messages/markUnread`
   *
   * Mark a list of serviceUpdateMessages as unread for the signed in user.
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/messages/markUnread']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/serviceAnnouncement/messages/markUnread']['response']
  > {
    return {
      method: 'post',
      path: '/admin/serviceAnnouncement/messages/markUnread',
      body,
    };
  },
};

export const unarchive = {
  /**
   * `POST /admin/serviceAnnouncement/messages/unarchive`
   *
   * Unarchive a list of serviceUpdateMessages for the signed in user.
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/messages/unarchive']['body']
  ): EndpointRequest<IEndpoints['POST /admin/serviceAnnouncement/messages/unarchive']['response']> {
    return {
      method: 'post',
      path: '/admin/serviceAnnouncement/messages/unarchive',
      body,
    };
  },
};

export const unfavorite = {
  /**
   * `POST /admin/serviceAnnouncement/messages/unfavorite`
   *
   * Remove the favorite status of serviceUpdateMessages for the signed in user.
   */
  create: function create(
    body: IEndpoints['POST /admin/serviceAnnouncement/messages/unfavorite']['body']
  ): EndpointRequest<
    IEndpoints['POST /admin/serviceAnnouncement/messages/unfavorite']['response']
  > {
    return {
      method: 'post',
      path: '/admin/serviceAnnouncement/messages/unfavorite',
      body,
    };
  },
};
