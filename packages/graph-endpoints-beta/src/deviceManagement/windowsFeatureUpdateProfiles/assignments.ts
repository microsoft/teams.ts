import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments': Operation<
    '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsFeatureUpdateProfile-id', in: 'path' },
      { name: 'windowsFeatureUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments`
 *
 * The list of group assignments of the profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsFeatureUpdateProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}`
 *
 * The list of group assignments of the profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsFeatureUpdateProfile-id', in: 'path' },
      { name: 'windowsFeatureUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments/{windowsFeatureUpdateProfileAssignment-id}',
    paramDefs: [
      { name: 'windowsFeatureUpdateProfile-id', in: 'path' },
      { name: 'windowsFeatureUpdateProfileAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsFeatureUpdateProfiles/{windowsFeatureUpdateProfile-id}/assignments',
    paramDefs: [{ name: 'windowsFeatureUpdateProfile-id', in: 'path' }],
    params,
    body,
  };
}
