export * as clearEnrollmentTimeDeviceMembershipTarget from './clearEnrollmentTimeDeviceMembershipTarget';
export * as createToken from './createToken';
export * as retrieveEnrollmentTimeDeviceMembershipTarget from './retrieveEnrollmentTimeDeviceMembershipTarget';
export * as revokeToken from './revokeToken';
export * as setEnrollmentTimeDeviceMembershipTarget from './setEnrollmentTimeDeviceMembershipTarget';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
    'get'
  >;
  'GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles': Operation<
    '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'androidDeviceOwnerEnrollmentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles`
 *
 * Android device owner enrollment profile entities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
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
 * `GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}`
 *
 * Android device owner enrollment profile entities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidDeviceOwnerEnrollmentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles/{androidDeviceOwnerEnrollmentProfile-id}',
    paramDefs: [{ name: 'androidDeviceOwnerEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidDeviceOwnerEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidDeviceOwnerEnrollmentProfiles',
    paramDefs: [],
    params,
    body,
  };
}
