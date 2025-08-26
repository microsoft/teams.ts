import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'intuneBrandingProfile-id', in: 'path' },
      { name: 'intuneBrandingProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments`
 *
 * The list of group assignments for the branding profile
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intuneBrandingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}`
 *
 * The list of group assignments for the branding profile
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intuneBrandingProfile-id', in: 'path' },
      { name: 'intuneBrandingProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments/{intuneBrandingProfileAssignment-id}',
    paramDefs: [
      { name: 'intuneBrandingProfile-id', in: 'path' },
      { name: 'intuneBrandingProfileAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}/assignments',
    paramDefs: [{ name: 'intuneBrandingProfile-id', in: 'path' }],
    params,
    body,
  };
}
