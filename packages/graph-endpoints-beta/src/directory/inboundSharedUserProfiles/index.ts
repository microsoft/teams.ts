export * as exportPersonalData from './exportPersonalData';
export * as removePersonalData from './removePersonalData';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    'delete'
  >;
  'GET /directory/inboundSharedUserProfiles': Operation<
    '/directory/inboundSharedUserProfiles',
    'get'
  >;
  'GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    'get'
  >;
  'PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}': Operation<
    '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    'patch'
  >;
  'POST /directory/inboundSharedUserProfiles': Operation<
    '/directory/inboundSharedUserProfiles',
    'post'
  >;
}

/**
 * `DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'inboundSharedUserProfile-userId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/inboundSharedUserProfiles`
 *
 * Retrieve the properties of all inboundSharedUserProfiles.
 */
export function list(
  params?: IEndpoints['GET /directory/inboundSharedUserProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /directory/inboundSharedUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/inboundSharedUserProfiles',
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
 * `GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}`
 *
 * Read the properties of an inboundSharedUserProfile.
 */
export function get(
  params?: IEndpoints['GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'inboundSharedUserProfile-userId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['body'],
  params?: IEndpoints['PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/inboundSharedUserProfiles/{inboundSharedUserProfile-userId}',
    paramDefs: [{ name: 'inboundSharedUserProfile-userId', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/inboundSharedUserProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /directory/inboundSharedUserProfiles']['body'],
  params?: IEndpoints['POST /directory/inboundSharedUserProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /directory/inboundSharedUserProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/inboundSharedUserProfiles',
    paramDefs: [],
    params,
    body,
  };
}
