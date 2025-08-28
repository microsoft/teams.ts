import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments`
 *
 * The list of group assignemenets for app configration.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}`
 *
 * The list of group assignemenets for app configration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments/{managedDeviceMobileAppConfigurationAssignment-id}',
    paramDefs: [
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/assignments',
    paramDefs: [{ name: 'managedDeviceMobileAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
