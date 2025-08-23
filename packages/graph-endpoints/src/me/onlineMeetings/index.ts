export * as attendanceReports from './attendanceReports';
export * as attendeeReport from './attendeeReport';
export * as createOrGet from './createOrGet';
export * as recordings from './recordings';
export * as sendVirtualAppointmentReminderSms from './sendVirtualAppointmentReminderSms';
export * as sendVirtualAppointmentSms from './sendVirtualAppointmentSms';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /me/onlineMeetings': Operation<'/me/onlineMeetings', 'get'>;
  'GET /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /me/onlineMeetings': Operation<'/me/onlineMeetings', 'post'>;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Delete an onlineMeeting object.
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/onlineMeetings`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For more information, see Online meeting artifacts and permissions.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings']['response']> {
  return {
    method: 'get',
    path: '/me/onlineMeetings',
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
 * `GET /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For more information, see Online meeting artifacts and permissions.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}`
 *
 * Update the properties of the specified onlineMeeting object. For the list of properties that support updating, see the Request body section.
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings`
 *
 * Create an online meeting on behalf of a user.
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings']['body'],
  params?: IEndpoints['POST /me/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /me/onlineMeetings']['response']> {
  return {
    method: 'post',
    path: '/me/onlineMeetings',
    paramDefs: [],
    params,
    body,
  };
}
