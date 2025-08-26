import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/calendar/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/calendar/events/{event-id}/extensions/{extension-id}',
    'delete'
  >;
  'GET /me/calendar/events/{event-id}/extensions': Operation<
    '/me/calendar/events/{event-id}/extensions',
    'get'
  >;
  'GET /me/calendar/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/calendar/events/{event-id}/extensions/{extension-id}',
    'get'
  >;
  'PATCH /me/calendar/events/{event-id}/extensions/{extension-id}': Operation<
    '/me/calendar/events/{event-id}/extensions/{extension-id}',
    'patch'
  >;
  'POST /me/calendar/events/{event-id}/extensions': Operation<
    '/me/calendar/events/{event-id}/extensions',
    'post'
  >;
}

/**
 * `DELETE /me/calendar/events/{event-id}/extensions/{extension-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/calendar/events/{event-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/calendar/events/{event-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/calendar/events/{event-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'event-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendar/events/{event-id}/extensions`
 *
 * The collection of open extensions defined for the event. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/calendar/events/{event-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['GET /me/calendar/events/{event-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendar/events/{event-id}/extensions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/calendar/events/{event-id}/extensions/{extension-id}`
 *
 * The collection of open extensions defined for the event. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/calendar/events/{event-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/calendar/events/{event-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/calendar/events/{event-id}/extensions/{extension-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/calendar/events/{event-id}/extensions/{extension-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/calendar/events/{event-id}/extensions/{extension-id}']['body'],
  params?: IEndpoints['PATCH /me/calendar/events/{event-id}/extensions/{extension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/calendar/events/{event-id}/extensions/{extension-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/calendar/events/{event-id}/extensions/{extension-id}',
    paramDefs: [
      { name: 'event-id', in: 'path' },
      { name: 'extension-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/calendar/events/{event-id}/extensions`
 *
 */
export function create(
  body: IEndpoints['POST /me/calendar/events/{event-id}/extensions']['body'],
  params?: IEndpoints['POST /me/calendar/events/{event-id}/extensions']['parameters']
): EndpointRequest<IEndpoints['POST /me/calendar/events/{event-id}/extensions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/calendar/events/{event-id}/extensions',
    paramDefs: [{ name: 'event-id', in: 'path' }],
    params,
    body,
  };
}
