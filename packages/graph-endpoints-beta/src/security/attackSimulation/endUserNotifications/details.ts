import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    'delete'
  >;
  'GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
    'get'
  >;
  'GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    'patch'
  >;
  'POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details': Operation<
    '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'endUserNotification-id', in: 'path' },
      { name: 'endUserNotificationDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details`
 *
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'endUserNotification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'endUserNotification-id', in: 'path' },
      { name: 'endUserNotificationDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details/{endUserNotificationDetail-id}',
    paramDefs: [
      { name: 'endUserNotification-id', in: 'path' },
      { name: 'endUserNotificationDetail-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details`
 *
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['body'],
  params?: IEndpoints['POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/attackSimulation/endUserNotifications/{endUserNotification-id}/details']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/endUserNotifications/{endUserNotification-id}/details',
    paramDefs: [{ name: 'endUserNotification-id', in: 'path' }],
    params,
    body,
  };
}
