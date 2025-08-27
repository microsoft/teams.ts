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
  'DELETE /users/{user-id}/events/{event-id}': Operation<
    '/users/{user-id}/events/{event-id}',
    'delete'
  >;
  'GET /users/{user-id}/events': Operation<'/users/{user-id}/events', 'get'>;
  'GET /users/{user-id}/events/{event-id}': Operation<'/users/{user-id}/events/{event-id}', 'get'>;
  'PATCH /users/{user-id}/events/{event-id}': Operation<
    '/users/{user-id}/events/{event-id}',
    'patch'
  >;
  'POST /users/{user-id}/events': Operation<'/users/{user-id}/events', 'post'>;
}

/**
 * `DELETE /users/{user-id}/events/{event-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/events/{event-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/events`
 *
 * The user&#x27;s events. The default is to show events under the Default Calendar. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/events']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/events',
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
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/events/{event-id}`
 *
 * The user&#x27;s events. The default is to show events under the Default Calendar. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/events/{event-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/events/{event-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/events/{event-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/events/{event-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/events/{event-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/events/{event-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/events`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/events']['body'],
  params?: IEndpoints['POST /users/{user-id}/events']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/events']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/events',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
