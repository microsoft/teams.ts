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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileAppTroubleshootingEvent-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'mobileAppTroubleshootingEvent-id', in: 'path' }],
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
  body: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents']['body'],
  params?: IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/mobileAppTroubleshootingEvents']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/mobileAppTroubleshootingEvents',
    paramDefs: [],
    params,
    body,
  };
}
