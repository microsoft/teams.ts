export * as accept from './accept';
export * as attachments from './attachments';
export * as calendar from './calendar';
export * as cancel from './cancel';
export * as decline from './decline';
export * as dismissReminder from './dismissReminder';
export * as extensions from './extensions';
export * as forward from './forward';
export * as instances from './instances';
export * as permanentDelete from './permanentDelete';
export * as snoozeReminder from './snoozeReminder';
export * as tentativelyAccept from './tentativelyAccept';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}',
    'delete'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events',
    'get'
  >;
  'GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}',
    'get'
  >;
  'PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}',
    'patch'
  >;
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events',
    'post'
  >;
}

/**
 * `DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function list(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events']['response']
> {
  return {
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events',
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
    ],
    params,
  };
}

/**
 * `GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}',
    paramDefs: [
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
 * `PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}',
    paramDefs: [
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events']['body'],
  params?: IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events']['response']
> {
  return {
    method: 'post',
    path: '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events',
    paramDefs: [
      { name: 'calendarGroup-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}
