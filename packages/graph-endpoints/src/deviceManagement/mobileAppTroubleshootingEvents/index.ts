export * as appLogCollectionRequests from './appLogCollectionRequests';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'delete'
  >;
  'GET /deviceManagement/mobileAppTroubleshootingEvents': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents',
    'get'
  >;
  'GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'get'
  >;
  'PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    'patch'
  >;
  'POST /deviceManagement/mobileAppTroubleshootingEvents': Operation<
    '/deviceManagement/mobileAppTroubleshootingEvents',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 * Deletes a mobileAppTroubleshootingEvent.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['mobileAppTroubleshootingEvent-id'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/mobileAppTroubleshootingEvents`
 *
 * List properties and relationships of the mobileAppTroubleshootingEvent objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/mobileAppTroubleshootingEvents',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 * Read properties and relationships of the mobileAppTroubleshootingEvent object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: {
      path: ['mobileAppTroubleshootingEvent-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}`
 *
 * Update the properties of a mobileAppTroubleshootingEvent object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}',
    paramDefs: {
      path: ['mobileAppTroubleshootingEvent-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/mobileAppTroubleshootingEvents`
 *
 * Create a new mobileAppTroubleshootingEvent object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents']['body']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/mobileAppTroubleshootingEvents',
    body,
  };
}
