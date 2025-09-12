export * as tenants from './tenants';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}',
    'delete'
  >;
  'GET /directory/outboundSharedUserProfiles': Operation<
    '/directory/outboundSharedUserProfiles',
    'get'
  >;
  'GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}',
    'get'
  >;
  'PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}',
    'patch'
  >;
  'POST /directory/outboundSharedUserProfiles': Operation<
    '/directory/outboundSharedUserProfiles',
    'post'
  >;
}

/**
 * `DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}',
    paramDefs: {
      header: ['If-Match'],
      path: ['outboundSharedUserProfile-userId'],
    },
    params,
  };
}

/**
 * `GET /directory/outboundSharedUserProfiles`
 *
 * Retrieve the properties of all outboundSharedUserProfiles.
 */
export function list(
  params?: IEndpoints['GET /directory/outboundSharedUserProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /directory/outboundSharedUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/outboundSharedUserProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}`
 *
 * Get the details of an outboundSharedUserProfile.
 */
export function get(
  params?: IEndpoints['GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}',
    paramDefs: {
      path: ['outboundSharedUserProfile-userId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}']['body'],
  params?: IEndpoints['PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}',
    paramDefs: {
      path: ['outboundSharedUserProfile-userId'],
    },
    params,
    body,
  };
}

/**
 * `POST /directory/outboundSharedUserProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /directory/outboundSharedUserProfiles']['body']
): EndpointRequest<IEndpoints['POST /directory/outboundSharedUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/outboundSharedUserProfiles',
    body,
  };
}
