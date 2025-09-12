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
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'mobileAppTroubleshootingEvent-id'],
    },
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
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id', 'mobileAppTroubleshootingEvent-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['user-id', 'mobileAppTroubleshootingEvent-id'],
    },
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
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}
