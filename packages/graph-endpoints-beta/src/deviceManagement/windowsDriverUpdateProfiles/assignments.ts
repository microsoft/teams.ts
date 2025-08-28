import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
      { name: 'windowsDriverUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments`
 *
 * The list of group assignments of the profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
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
 * `GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}`
 *
 * The list of group assignments of the profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
      { name: 'windowsDriverUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments/{windowsDriverUpdateProfileAssignment-id}',
    paramDefs: [
      { name: 'windowsDriverUpdateProfile-id', in: 'path' },
      { name: 'windowsDriverUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsDriverUpdateProfiles/{windowsDriverUpdateProfile-id}/assignments',
    paramDefs: [{ name: 'windowsDriverUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
