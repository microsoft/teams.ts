export * as appLogCollectionRequests from './appLogCollectionRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /users/{user-id}/mobileAppTroubleshootingEvents': Operation<
    '/users/{user-id}/mobileAppTroubleshootingEvents',
    'get'
  >;
  'GET /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'patch'
  >;
  'POST /users/{user-id}/mobileAppTroubleshootingEvents': Operation<
    '/users/{user-id}/mobileAppTroubleshootingEvents',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/mobileAppTroubleshootingEvents`
 *
 * The list of mobile app troubleshooting events for this user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/mobileAppTroubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/mobileAppTroubleshootingEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mobileAppTroubleshootingEvents',
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
 * `GET /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 * The list of mobile app troubleshooting events for this user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/mobileAppTroubleshootingEvents`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/mobileAppTroubleshootingEvents']['body'],
  params?: IEndpoints['POST /users/{user-id}/mobileAppTroubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/mobileAppTroubleshootingEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/mobileAppTroubleshootingEvents',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
