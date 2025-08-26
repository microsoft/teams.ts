export * as details from './details';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    'delete'
  >;
  'GET /security/attackSimulation/endUserNotifications': Operation<
    '/security/attackSimulation/endUserNotifications',
    'get'
  >;
  'GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    'patch'
  >;
  'POST /security/attackSimulation/endUserNotifications': Operation<
    '/security/attackSimulation/endUserNotifications',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'endUserNotification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/endUserNotifications`
 *
 * Get a list of endUserNotification objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/endUserNotifications']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/endUserNotifications']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/endUserNotifications',
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
 * `GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}`
 *
 * Represents an end user&#x27;s notification for an attack simulation training.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'endUserNotification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}',
    paramDefs: [{ name: 'endUserNotification-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/endUserNotifications`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/endUserNotifications']['body'],
  params?: IEndpoints['POST /security/attackSimulation/endUserNotifications']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/endUserNotifications']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/endUserNotifications',
    paramDefs: [],
    params,
    body,
  };
}
