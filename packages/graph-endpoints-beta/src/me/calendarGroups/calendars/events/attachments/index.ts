export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments',
    'get'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments']['body'],
  params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/attachments',
    paramDefs: [
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
