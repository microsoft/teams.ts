export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceStatusSummary from './deviceStatusSummary';
export * as deviceStatuses from './deviceStatuses';
export * as userStatusSummary from './userStatusSummary';
export * as userStatuses from './userStatuses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations': Operation<
    '/deviceAppManagement/mobileAppConfigurations',
    'get'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations': Operation<
    '/deviceAppManagement/mobileAppConfigurations',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}`
 *
 * Deletes a iosMobileAppConfiguration.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations`
 *
 * List properties and relationships of the iosMobileAppConfiguration objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/mobileAppConfigurations']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations',
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
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}`
 *
 * Read properties and relationships of the iosMobileAppConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}`
 *
 * Update the properties of a iosMobileAppConfiguration object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}',
    paramDefs: [{ name: 'managedDeviceMobileAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileAppConfigurations`
 *
 * Create a new iosMobileAppConfiguration object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/mobileAppConfigurations']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mobileAppConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
