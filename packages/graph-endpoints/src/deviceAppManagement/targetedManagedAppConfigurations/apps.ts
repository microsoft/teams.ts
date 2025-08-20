import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
    'get'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps`
 *
 * List of apps to which the policy is deployed.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}`
 *
 * List of apps to which the policy is deployed.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/apps',
    paramDefs: [{ name: 'targetedManagedAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
