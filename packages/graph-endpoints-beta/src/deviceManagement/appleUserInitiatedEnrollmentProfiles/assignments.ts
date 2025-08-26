import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments': Operation<
    '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' },
      { name: 'appleEnrollmentProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments`
 *
 * The list of assignments for this profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}`
 *
 * The list of assignments for this profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' },
      { name: 'appleEnrollmentProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments/{appleEnrollmentProfileAssignment-id}',
    paramDefs: [
      { name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' },
      { name: 'appleEnrollmentProfileAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/appleUserInitiatedEnrollmentProfiles/{appleUserInitiatedEnrollmentProfile-id}/assignments',
    paramDefs: [{ name: 'appleUserInitiatedEnrollmentProfile-id', in: 'path' }],
    params,
    body,
  };
}
