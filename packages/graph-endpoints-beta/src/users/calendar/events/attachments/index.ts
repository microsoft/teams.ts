export * as createUploadSession from './createUploadSession';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}': Operation<
    '/users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}',
    'delete'
  >;
  'GET /users/{user-id}/calendar/events/{event-id}/attachments': Operation<
    '/users/{user-id}/calendar/events/{event-id}/attachments',
    'get'
  >;
  'GET /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}': Operation<
    '/users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}',
    'get'
  >;
  'POST /users/{user-id}/calendar/events/{event-id}/attachments': Operation<
    '/users/{user-id}/calendar/events/{event-id}/attachments',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendar/events/{event-id}/attachments`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/calendar/events/{event-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendar/events/{event-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar/events/{event-id}/attachments',
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
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}`
 *
 * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/calendar/events/{event-id}/attachments/{attachment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
      { name: 'attachment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /users/{user-id}/calendar/events/{event-id}/attachments`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/calendar/events/{event-id}/attachments']['body'],
  params?: IEndpoints['POST /users/{user-id}/calendar/events/{event-id}/attachments']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/calendar/events/{event-id}/attachments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/calendar/events/{event-id}/attachments',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
