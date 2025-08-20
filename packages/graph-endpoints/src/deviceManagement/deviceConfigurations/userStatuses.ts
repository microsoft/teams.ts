import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}`
 *
 * Deletes a deviceConfigurationUserStatus.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'deviceConfigurationUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses`
 *
 * List properties and relationships of the deviceConfigurationUserStatus objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}`
 *
 * Read properties and relationships of the deviceConfigurationUserStatus object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'deviceConfigurationUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}`
 *
 * Update the properties of a deviceConfigurationUserStatus object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses/{deviceConfigurationUserStatus-id}',
    paramDefs: [
      { name: 'deviceConfiguration-id', in: 'path' },
      { name: 'deviceConfigurationUserStatus-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses`
 *
 * Create a new deviceConfigurationUserStatus object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatuses',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
