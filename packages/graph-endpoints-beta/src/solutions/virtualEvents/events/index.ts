export * as cancel from './cancel';
export * as presenters from './presenters';
export * as publish from './publish';
export * as sessions from './sessions';
export * as setExternalEventInformation from './setExternalEventInformation';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents/events/{virtualEvent-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}',
    'delete'
  >;
  'GET /solutions/virtualEvents/events': Operation<'/solutions/virtualEvents/events', 'get'>;
  'GET /solutions/virtualEvents/events/{virtualEvent-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}',
    'get'
  >;
  'PATCH /solutions/virtualEvents/events/{virtualEvent-id}': Operation<
    '/solutions/virtualEvents/events/{virtualEvent-id}',
    'patch'
  >;
  'POST /solutions/virtualEvents/events': Operation<'/solutions/virtualEvents/events', 'post'>;
}

/**
 * `DELETE /solutions/virtualEvents/events/{virtualEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/virtualEvents/events/{virtualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'virtualEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/virtualEvents/events`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents/events']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents/events']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events',
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
 * `GET /solutions/virtualEvents/events/{virtualEvent-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/virtualEvents/events/{virtualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'virtualEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents/events/{virtualEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['body'],
  params?: IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/virtualEvents/events/{virtualEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/virtualEvents/events/{virtualEvent-id}',
    paramDefs: [{ name: 'virtualEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /solutions/virtualEvents/events`
 *
 */
export function create(
  body: IEndpoints['POST /solutions/virtualEvents/events']['body'],
  params?: IEndpoints['POST /solutions/virtualEvents/events']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/virtualEvents/events']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/virtualEvents/events',
    paramDefs: [],
    params,
    body,
  };
}
