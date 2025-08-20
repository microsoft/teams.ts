export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /me/calendars/{calendar-id}/events/{event-id}/attachments': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/attachments',
    'get'
  >;
  'GET /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /me/calendars/{calendar-id}/events/{event-id}/attachments': Operation<
    '/me/calendars/{calendar-id}/events/{event-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}/events/{event-id}/attachments`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/attachments']['response']
> {
  return {
    method: 'get',
    path: '/me/calendars/{calendar-id}/events/{event-id}/attachments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/calendars/{calendar-id}/events/{event-id}/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/attachments']['body'],
  params?: IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendars/{calendar-id}/events/{event-id}/attachments']['response']
> {
  return {
    method: 'post',
    path: '/me/calendars/{calendar-id}/events/{event-id}/attachments',
    paramDefs: [
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
