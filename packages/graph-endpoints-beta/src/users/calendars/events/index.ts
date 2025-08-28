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

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/calendars/{calendar-id}/events/{event-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}/events/{event-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendars/{calendar-id}/events': Operation<
    '/users/{user-id}/calendars/{calendar-id}/events',
    'get'
  >;
  'GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}/events/{event-id}',
    'get'
  >;
  'PATCH /users/{user-id}/calendars/{calendar-id}/events/{event-id}': Operation<
    '/users/{user-id}/calendars/{calendar-id}/events/{event-id}',
    'patch'
  >;
  'POST /users/{user-id}/calendars/{calendar-id}/events': Operation<
    '/users/{user-id}/calendars/{calendar-id}/events',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/calendars/{calendar-id}/events/{event-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/calendars/{calendar-id}/events/{event-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/calendars/{calendar-id}/events/{event-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendars/{calendar-id}/events`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/events']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendars/{calendar-id}/events',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendars/{calendar-id}/events/{event-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendars/{calendar-id}/events/{event-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/calendars/{calendar-id}/events/{event-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}/events/{event-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/calendars/{calendar-id}/events/{event-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/calendars/{calendar-id}/events/{event-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/calendars/{calendar-id}/events`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/events']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/events']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/calendars/{calendar-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendars/{calendar-id}/events',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'calendar-id', in: 'path' },
    ],
    params,
    body,
  };
}
