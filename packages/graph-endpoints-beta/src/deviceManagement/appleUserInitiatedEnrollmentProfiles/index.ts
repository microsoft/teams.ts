export * as assignments from './assignments';
export * as setPriority from './setPriority';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
    'get'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/appleUserInitiatedEnrollmentProfiles': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles`
 *
 * Apple user initiated enrollment profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
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
 * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}`
 *
 * Apple user initiated enrollment profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}',
    paramDefs: [{ name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/appleUserInitiatedEnrollmentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles',
    paramDefs: [],
    params,
    body,
  };
}
