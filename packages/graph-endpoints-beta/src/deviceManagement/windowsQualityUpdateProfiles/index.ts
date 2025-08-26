export * as assign from './assign';
export * as assignments from './assignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsQualityUpdateProfiles': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsQualityUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdateProfiles`
 *
 * A collection of windows quality update profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdateProfiles',
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
 * `GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}`
 *
 * A collection of windows quality update profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsQualityUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}',
    paramDefs: [{ name: 'windowsQualityUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsQualityUpdateProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdateProfiles',
    paramDefs: [],
    params,
    body,
  };
}
