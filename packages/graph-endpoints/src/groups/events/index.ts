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
  'DELETE /groups/{group-id}/events/{event-id}': Operation<
    '/groups/{group-id}/events/{event-id}',
    'delete'
  >;
  'GET /groups/{group-id}/events': Operation<'/groups/{group-id}/events', 'get'>;
  'GET /groups/{group-id}/events/{event-id}': Operation<
    '/groups/{group-id}/events/{event-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/events/{event-id}': Operation<
    '/groups/{group-id}/events/{event-id}',
    'patch'
  >;
  'POST /groups/{group-id}/events': Operation<'/groups/{group-id}/events', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/events/{event-id}`
 *
 * Delete an event object.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/events/{event-id}']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/events/{event-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/events`
 *
 * Retrieve a list of event objects.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/events']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/events']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/events',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/events/{event-id}`
 *
 * Get an event object.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/events/{event-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/events/{event-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/events/{event-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/events/{event-id}']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/events/{event-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/events`
 *
 * Use this API to create a new event.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/events']['body'],
  params?: IEndpoints['POST /groups/{group-id}/events']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/events']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/events',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
