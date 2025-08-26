import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    'get'
  >;
  'PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    'put'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content`
 *
 * The attachment content.
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceUpdateMessage-id', in: 'path' },
      { name: 'serviceAnnouncementAttachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content`
 *
 * Read the properties and relationships of a serviceAnnouncementAttachment object.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    paramDefs: [
      { name: 'serviceUpdateMessage-id', in: 'path' },
      { name: 'serviceAnnouncementAttachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content`
 *
 * The attachment content.
 */
export function set(
  body: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['body'],
  params?: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}/content',
    paramDefs: [
      { name: 'serviceUpdateMessage-id', in: 'path' },
      { name: 'serviceAnnouncementAttachment-id', in: 'path' },
    ],
    params,
    body,
  };
}
