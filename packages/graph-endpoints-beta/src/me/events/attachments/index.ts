export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/events/{event-id}/attachments/{attachment-id}': Operation<
    '/me/events/{event-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /me/events/{event-id}/attachments': Operation<'/me/events/{event-id}/attachments', 'get'>;
  'GET /me/events/{event-id}/attachments/{attachment-id}': Operation<
    '/me/events/{event-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /me/events/{event-id}/attachments': Operation<'/me/events/{event-id}/attachments', 'post'>;
}

/**
 * `DELETE /me/events/{event-id}/attachments/{attachment-id}`
 *
 * Delete an attachment from a user calendar event, message, Outlook task, or post.
 */
export function del(
  params?: IEndpoints['DELETE /me/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/events/{event-id}/attachments`
 *
 * Retrieve a list of attachment objects attached to an event.
 */
export function list(
  params?: IEndpoints['GET /me/events/{event-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['GET /me/events/{event-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/events/{event-id}/attachments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/events/{event-id}/attachments/{attachment-id}`
 *
 * Read the properties, relationships, or raw contents of an attachment that is attached to a user event, message, Outlook task, or group post. An attachment can be one of the following types: All these types of attachments are derived from the attachment resource.
 */
export function get(
  params?: IEndpoints['GET /me/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/events/{event-id}/attachments`
 *
 * Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.
 */
export function create(
  body: IEndpoints['POST /me/events/{event-id}/attachments']['body'],
  params?: IEndpoints['POST /me/events/{event-id}/attachments']['parameters']
): EndpointRequest<IEndpoints['POST /me/events/{event-id}/attachments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/events/{event-id}/attachments',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}
