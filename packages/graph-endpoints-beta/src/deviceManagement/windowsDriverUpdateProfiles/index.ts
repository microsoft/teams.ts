export * as assign from './assign';
export * as assignments from './assignments';
export * as driverInventories from './driverInventories';
export * as executeAction from './executeAction';
export * as syncInventory from './syncInventory';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsDriverUpdateProfiles`
 *
 * A collection of windows driver update profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles',
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
 * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}`
 *
 * A collection of windows driver update profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}',
    paramDefs: [{ name: 'windowsDriverUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsDriverUpdateProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsDriverUpdateProfiles',
    paramDefs: [],
    params,
    body,
  };
}
