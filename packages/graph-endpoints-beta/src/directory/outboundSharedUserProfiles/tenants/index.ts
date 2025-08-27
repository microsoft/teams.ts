export * as removePersonalData from './removePersonalData';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}',
    'delete'
  >;
  'GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants',
    'get'
  >;
  'GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}',
    'get'
  >;
  'PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}',
    'patch'
  >;
  'POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants': Operation<
    '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants',
    'post'
  >;
}

/**
 * `DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'outboundSharedUserProfile-userId', in: 'path' },
      { name: 'tenantReference-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants`
 *
 * List the tenant references of an outboundSharedUserProfile.
 */
export function list(
  params?: IEndpoints['GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outboundSharedUserProfile-userId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}`
 *
 * The collection of external Microsoft Entra tenants that the user shared profile data with. Read-only.
 */
export function get(
  params?: IEndpoints['GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'outboundSharedUserProfile-userId', in: 'path' },
      { name: 'tenantReference-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}']['body'],
  params?: IEndpoints['PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants/{tenantReference-tenantId}',
    paramDefs: [
      { name: 'outboundSharedUserProfile-userId', in: 'path' },
      { name: 'tenantReference-tenantId', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants`
 *
 */
export function create(
  body: IEndpoints['POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants']['body'],
  params?: IEndpoints['POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/outboundSharedUserProfiles/{outboundSharedUserProfile-userId}/tenants',
    paramDefs: [{ name: 'outboundSharedUserProfile-userId', in: 'path' }],
    params,
    body,
  };
}
