export * as appLogCollectionRequests from './appLogCollectionRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /me/mobileAppTroubleshootingEvents': Operation<'/me/mobileAppTroubleshootingEvents', 'get'>;
  'GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'patch'
  >;
  'POST /me/mobileAppTroubleshootingEvents': Operation<
    '/me/mobileAppTroubleshootingEvents',
    'post'
  >;
}

/**
 * `DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mobileAppTroubleshootingEvents`
 *
 * The list of mobile app troubleshooting events for this user.
 */
export function list(
  params?: IEndpoints['GET /me/mobileAppTroubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['GET /me/mobileAppTroubleshootingEvents']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mobileAppTroubleshootingEvents',
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
 * `GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 * The list of mobile app troubleshooting events for this user.
 */
export function get(
  params?: IEndpoints['GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['body'],
  params?: IEndpoints['PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: [{ name: 'mobileAppTroubleshootingEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/mobileAppTroubleshootingEvents`
 *
 */
export function create(
  body: IEndpoints['POST /me/mobileAppTroubleshootingEvents']['body'],
  params?: IEndpoints['POST /me/mobileAppTroubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['POST /me/mobileAppTroubleshootingEvents']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mobileAppTroubleshootingEvents',
    paramDefs: [],
    params,
    body,
  };
}
