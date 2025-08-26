import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsQualityUpdateProfile-id', in: 'path' },
      { name: 'windowsQualityUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments`
 *
 * The list of group assignments of the profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsQualityUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}`
 *
 * The list of group assignments of the profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsQualityUpdateProfile-id', in: 'path' },
      { name: 'windowsQualityUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments/{windowsQualityUpdateProfileAssignment-id}',
    paramDefs: [
      { name: 'windowsQualityUpdateProfile-id', in: 'path' },
      { name: 'windowsQualityUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile-id}/assignments',
    paramDefs: [{ name: 'windowsQualityUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
