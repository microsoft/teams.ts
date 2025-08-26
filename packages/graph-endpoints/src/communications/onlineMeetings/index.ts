export * as attendanceReports from './attendanceReports';
export * as attendeeReport from './attendeeReport';
export * as createOrGet from './createOrGet';
export * as recordings from './recordings';
export * as sendVirtualAppointmentReminderSms from './sendVirtualAppointmentReminderSms';
export * as sendVirtualAppointmentSms from './sendVirtualAppointmentSms';
export * as transcripts from './transcripts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings': Operation<'/communications/onlineMeetings', 'get'>;
  'GET /communications/onlineMeetings/{onlineMeeting-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings': Operation<'/communications/onlineMeetings', 'post'>;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetings`
 *
 * Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report (deprecated) and Teams live event recordings (deprecated) are online meeting artifacts. For more information, see Online meeting artifacts and permissions.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['GET /communications/onlineMeetings']['response']> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings',
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
 * `GET /communications/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeeting-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}',
    paramDefs: [{ name: 'onlineMeeting-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings']['parameters']
): EndpointRequest<IEndpoints['POST /communications/onlineMeetings']['response']> {
  return {
    method: 'post',
    path: '/communications/onlineMeetings',
    paramDefs: [],
    params,
    body,
  };
}
