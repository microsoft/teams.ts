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
  'DELETE /me/calendar/events/{event-id}': Operation<'/me/calendar/events/{event-id}', 'delete'>;
  'GET /me/calendar/events': Operation<'/me/calendar/events', 'get'>;
  'GET /me/calendar/events/{event-id}': Operation<'/me/calendar/events/{event-id}', 'get'>;
  'PATCH /me/calendar/events/{event-id}': Operation<'/me/calendar/events/{event-id}', 'patch'>;
  'POST /me/calendar/events': Operation<'/me/calendar/events', 'post'>;
}

/**
 * `DELETE /me/calendar/events/{event-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendar/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/calendar/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendar/events/{event-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /me/calendar/events`
  *
  * Retrieve a list of events in a calendar.  The calendar can be one for a user, or the default calendar of a Microsoft 365 group. The list of events contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, or
get the instances of an event.
  */
export function list(
  params?: IEndpoints['GET /me/calendar/events']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar/events']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendar/events',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/calendar/events/{event-id}`
 *
 * The events in the calendar. Navigation property. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/calendar/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendar/events/{event-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendar/events/{event-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendar/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /me/calendar/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/calendar/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendar/events/{event-id}',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/calendar/events`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendar/events']['body'],
  params?: IEndpoints['POST /me/calendar/events']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/events']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendar/events',
    paramDefs: [],
    params,
    body,
  };
}
