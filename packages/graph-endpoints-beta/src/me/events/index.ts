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

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/events/{event-id}': Operation<'/me/events/{event-id}', 'delete'>;
  'GET /me/events': Operation<'/me/events', 'get'>;
  'GET /me/events/{event-id}': Operation<'/me/events/{event-id}', 'get'>;
  'PATCH /me/events/{event-id}': Operation<'/me/events/{event-id}', 'patch'>;
  'POST /me/events': Operation<'/me/events', 'post'>;
}

/**
 * `DELETE /me/events/{event-id}`
 *
 * Removes the specified event from the containing calendar.  If the event is a meeting, deleting the event on the organizer&#x27;s calendar sends a cancellation message to the meeting attendees.
 */
export function del(
  params?: IEndpoints['DELETE /me/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/events/{event-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /me/events`
  *
  * Get a list of event objects from the user&#x27;s default calendar or
from a specified calendar. The list contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, or
get the instances of an event. There are two scenarios where an app can get events in another user&#x27;s calendar:
  */
export function list(
  params?: IEndpoints['GET /me/events']['parameters']
): EndpointRequest<IEndpoints['GET /me/events']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/events',
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
 * `GET /me/events/{event-id}`
 *
 * Get the properties and relationships of the specified event object. An app can get an event in another user&#x27;s calendar if: Because the event resource supports extensions, you can also use the GET operation to get custom properties and extension data in an event instance.
 */
export function get(
  params?: IEndpoints['GET /me/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/events/{event-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/events/{event-id}`
 *
 * Update the properties of the event object.
 */
export function update(
  body: IEndpoints['PATCH /me/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /me/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/events/{event-id}',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /me/events`
  *
  * Create an event in the user&#x27;s default calendar or specified calendar. By default, the allowNewTimeProposals property is set to true when an event is created, which means invitees can propose a different date/time for the event. See Propose new meeting times for more information on how to propose a time, and how to receive and accept a new time proposal. You can specify the time zone for each of the start and end times of the event as part of their values, because the
start and end properties are of dateTimeTimeZone type. First find the supported time zones to make sure you set only time zones that have been configured for the user&#x27;s mailbox server. When an event is sent, the server sends invitations to all the attendees. Setting the location in an event An Exchange administrator can set up a mailbox and an email address for a resource such as a meeting room, or equipment
like a projector. Users can then invite the resource as an attendee to a meeting. On behalf of the resource, the server accepts or rejects
the meeting request based on the free/busy schedule of the resource.
If the server accepts a meeting for the resource, it creates an event for the meeting in the resource&#x27;s calendar. If the meeting is rescheduled,
the server automatically updates the event in the resource&#x27;s calendar. Another advantage of setting up a mailbox for a resource is to control scheduling of the resource, for example, only executives
or their delegates can book a private meeting room. If you&#x27;re organizing an event that involves a meeting location: Additionally, if the meeting location has been set up as a resource, or if the event involves some equipment that has been set up as a resource:
  */
export function create(
  body: IEndpoints['POST /me/events']['body'],
  params?: IEndpoints['POST /me/events']['parameters']
): EndpointRequest<IEndpoints['POST /me/events']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/events',
    paramDefs: [],
    params,
    body,
  };
}
