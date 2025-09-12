import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments',
    'get'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    'get'
  >;
  'PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    'patch'
  >;
  'POST /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments',
    'post'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    'get'
  >;
  'PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    'put'
  >;
  'DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['serviceUpdateMessage-id', 'serviceAnnouncementAttachment-id'],
    },
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments`
 *
 * Get a list of attachments associated with a service message.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments',
    paramDefs: {
      path: ['serviceUpdateMessage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}`
 *
 * Read the properties and relationships of a serviceAnnouncementAttachment object.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    paramDefs: {
      path: ['serviceUpdateMessage-id', 'serviceAnnouncementAttachment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}']['body'],
  params?: IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    paramDefs: {
      path: ['serviceUpdateMessage-id', 'serviceAnnouncementAttachment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments']['body'],
  params?: IEndpoints['POST /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments',
    paramDefs: {
      path: ['serviceUpdateMessage-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content`
   *
   * Read the properties and relationships of a serviceAnnouncementAttachment object.
   */
  get: function get(
    params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
      paramDefs: {
        path: ['serviceUpdateMessage-id', 'serviceAnnouncementAttachment-id'],
      },
      params,
    };
  },
  /**
   * `PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content`
   *
   * The attachment content.
   */
  set: function set(
    body: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['body'],
    params?: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
      paramDefs: {
        path: ['serviceUpdateMessage-id', 'serviceAnnouncementAttachment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content`
   *
   * The attachment content.
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['serviceUpdateMessage-id', 'serviceAnnouncementAttachment-id'],
      },
      params,
    };
  },
};
