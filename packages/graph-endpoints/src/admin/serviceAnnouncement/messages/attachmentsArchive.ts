import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    'delete'
  >;
  'GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    'get'
  >;
  'PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive': Operation<
    '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    'put'
  >;
}

/**
 * `DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive`
 *
 * The zip file that contains all attachments for a message.
 */
export function del(
  params?: IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['response']
> {
  return {
    method: 'delete',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'serviceUpdateMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive`
 *
 * Get the list of attachments associated with a service message.
 */
export function get(
  params?: IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['response']
> {
  return {
    method: 'get',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    paramDefs: [{ name: 'serviceUpdateMessage-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive`
 *
 * The zip file that contains all attachments for a message.
 */
export function set(
  body: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['body'],
  params?: IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['parameters']
): EndpointRequest<
  IEndpoints['PUT /admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive']['response']
> {
  return {
    method: 'put',
    path: '/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}/attachmentsArchive',
    paramDefs: [{ name: 'serviceUpdateMessage-id', in: 'path' }],
    params,
    body,
  };
}
