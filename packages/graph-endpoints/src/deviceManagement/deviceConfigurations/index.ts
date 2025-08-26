export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceSettingStateSummaries from './deviceSettingStateSummaries';
export * as deviceStatusOverview from './deviceStatusOverview';
export * as deviceStatuses from './deviceStatuses';
export * as userStatusOverview from './userStatusOverview';
export * as userStatuses from './userStatuses';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations': Operation<
    '/deviceManagement/deviceConfigurations',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurations': Operation<
    '/deviceManagement/deviceConfigurations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}`
 *
 * Deletes a androidWorkProfileCustomConfiguration.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations`
 *
 * List properties and relationships of the androidWorkProfileGeneralDeviceConfiguration objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceConfigurations']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations',
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
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}`
 *
 * Read properties and relationships of the iosCustomConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}`
 *
 * Update the properties of a iosDeviceFeaturesConfiguration object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurations`
 *
 * Create a new androidGeneralDeviceConfiguration object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceConfigurations']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
