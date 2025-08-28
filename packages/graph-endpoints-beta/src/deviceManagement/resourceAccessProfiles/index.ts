export * as assign from './assign';
export * as assignments from './assignments';
export * as queryByPlatformType from './queryByPlatformType';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    'delete'
  >;
  'GET /deviceManagement/resourceAccessProfiles': Operation<
    '/deviceManagement/resourceAccessProfiles',
    'get'
  >;
  'GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    'get'
  >;
  'PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}': Operation<
    '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    'patch'
  >;
  'POST /deviceManagement/resourceAccessProfiles': Operation<
    '/deviceManagement/resourceAccessProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/resourceAccessProfiles`
 *
 * Collection of resource access settings associated with account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/resourceAccessProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/resourceAccessProfiles',
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
 * `GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}`
 *
 * Collection of resource access settings associated with account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/resourceAccessProfiles/{deviceManagementResourceAccessProfileBase-id}',
    paramDefs: [{ name: 'deviceManagementResourceAccessProfileBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/resourceAccessProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/resourceAccessProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/resourceAccessProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/resourceAccessProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/resourceAccessProfiles',
    paramDefs: [],
    params,
    body,
  };
}
