export * as content from './content';

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
    method: 'delete',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceUpdateMessage-id', in: 'path' },
      { name: 'serviceAnnouncementAttachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments`
 *
 * Get the list of attachments associated with a service message.
 */
export function list(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments']['response']
> {
  return {
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceUpdateMessage-id', in: 'path' },
    ],
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
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'serviceUpdateMessage-id', in: 'path' },
      { name: 'serviceAnnouncementAttachment-id', in: 'path' },
    ],
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
    method: 'patch',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments/{serviceAnnouncementAttachment-id}',
    paramDefs: [
      { name: 'serviceUpdateMessage-id', in: 'path' },
      { name: 'serviceAnnouncementAttachment-id', in: 'path' },
    ],
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
    method: 'post',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachments',
    paramDefs: [{ name: 'serviceUpdateMessage-id', in: 'path' }],
    params,
    body,
  };
}
