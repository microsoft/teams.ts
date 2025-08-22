export * as assign from './assign';
export * as assignments from './assignments';
export * as categories from './categories';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileApps/{mobileApp-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileApps': Operation<'/deviceAppManagement/mobileApps', 'get'>;
  'GET /deviceAppManagement/mobileApps/{mobileApp-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileApps/{mobileApp-id}': Operation<
    '/deviceAppManagement/mobileApps/{mobileApp-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileApps': Operation<'/deviceAppManagement/mobileApps', 'post'>;
}

/**
 * `DELETE /deviceAppManagement/mobileApps/{mobileApp-id}`
 *
 * Deletes a windowsAppX.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileApps/{mobileApp-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileApps`
 *
 * List properties and relationships of the windowsWebApp objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileApps']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileApps',
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
 * `GET /deviceAppManagement/mobileApps/{mobileApp-id}`
 *
 * Read properties and relationships of the managedAndroidStoreApp object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileApps/{mobileApp-id}']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileApps/{mobileApp-id}`
 *
 * Update the properties of a androidLobApp object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement/mobileApps/{mobileApp-id}']['response']> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/mobileApps/{mobileApp-id}',
    paramDefs: [{ name: 'mobileApp-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileApps`
 *
 * Create a new windowsMicrosoftEdgeApp object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileApps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileApps']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileApps']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mobileApps',
    paramDefs: [],
    params,
    body,
  };
}
