export * as assign from './assign';
export * as assignments from './assignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/intuneBrandingProfiles': Operation<
    '/deviceManagement/intuneBrandingProfiles',
    'get'
  >;
  'GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}': Operation<
    '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/intuneBrandingProfiles': Operation<
    '/deviceManagement/intuneBrandingProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'intuneBrandingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intuneBrandingProfiles`
 *
 * Intune branding profiles targeted to AAD groups
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/intuneBrandingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intuneBrandingProfiles',
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
 * `GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}`
 *
 * Intune branding profiles targeted to AAD groups
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'intuneBrandingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intuneBrandingProfiles/{intuneBrandingProfile-id}',
    paramDefs: [{ name: 'intuneBrandingProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intuneBrandingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intuneBrandingProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/intuneBrandingProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/intuneBrandingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intuneBrandingProfiles',
    paramDefs: [],
    params,
    body,
  };
}
