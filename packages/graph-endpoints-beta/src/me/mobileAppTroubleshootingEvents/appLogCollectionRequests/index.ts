export * as createDownloadUrl from './createDownloadUrl';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    'delete'
  >;
  'GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    'get'
  >;
  'GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    'get'
  >;
  'PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    'patch'
  >;
  'POST /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    'post'
  >;
}

/**
 * `DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
      { name: 'appLogCollectionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests`
 *
 * Indicates collection of App Log Upload Request.
 */
export function list(
  params?: IEndpoints['GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}`
 *
 * Indicates collection of App Log Upload Request.
 */
export function get(
  params?: IEndpoints['GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
      { name: 'appLogCollectionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['body'],
  params?: IEndpoints['PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}',
    paramDefs: [
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
      { name: 'appLogCollectionRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['body'],
  params?: IEndpoints['POST /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests',
    paramDefs: [{ name: 'mobileAppTroubleshootingEvent-id', in: 'path' }],
    params,
    body,
  };
}
