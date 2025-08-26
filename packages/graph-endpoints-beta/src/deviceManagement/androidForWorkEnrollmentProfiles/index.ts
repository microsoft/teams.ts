export * as createToken from './createToken';
export * as revokeToken from './revokeToken';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/androidForWorkEnrollmentProfiles': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles',
    'get'
  >;
  'GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/androidForWorkEnrollmentProfiles': Operation<
    '/deviceManagement/androidForWorkEnrollmentProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'androidForWorkEnrollmentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/androidForWorkEnrollmentProfiles`
 *
 * Android for Work enrollment profile entities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles',
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
 * `GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}`
 *
 * Android for Work enrollment profile entities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidForWorkEnrollmentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles/{androidForWorkEnrollmentProfile-id}',
    paramDefs: [{ name: 'androidForWorkEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/androidForWorkEnrollmentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkEnrollmentProfiles',
    paramDefs: [],
    params,
    body,
  };
}
