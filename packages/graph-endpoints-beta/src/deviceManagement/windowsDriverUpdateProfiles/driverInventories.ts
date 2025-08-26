import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
    'get'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
      { name: 'windowsDriverUpdateInventory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories`
 *
 * Driver inventories for this profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}`
 *
 * Driver inventories for this profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
      { name: 'windowsDriverUpdateInventory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories/{windowsDriverUpdateInventory-id}',
    paramDefs: [
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
      { name: 'windowsDriverUpdateInventory-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/driverInventories',
    paramDefs: [{ name: 'windowsDriverUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
