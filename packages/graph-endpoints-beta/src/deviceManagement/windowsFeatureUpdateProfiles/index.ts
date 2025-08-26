export * as assign from './assign';
export * as assignments from './assignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsFeatureUpdateProfiles': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsFeatureUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsFeatureUpdateProfiles`
 *
 * A collection of windows feature update profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsFeatureUpdateProfiles',
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
 * `GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}`
 *
 * A collection of windows feature update profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsFeatureUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}',
    paramDefs: [{ name: 'windowsFeatureUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsFeatureUpdateProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsFeatureUpdateProfiles',
    paramDefs: [],
    params,
    body,
  };
}
