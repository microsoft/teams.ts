export * as conditionalAccessPolicies from './conditionalAccessPolicies';
export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/filteringProfiles/{filteringProfile-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}',
    'delete'
  >;
  'GET /networkAccess/filteringProfiles': Operation<'/networkAccess/filteringProfiles', 'get'>;
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}',
    'get'
  >;
  'PATCH /networkAccess/filteringProfiles/{filteringProfile-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}',
    'patch'
  >;
  'POST /networkAccess/filteringProfiles': Operation<'/networkAccess/filteringProfiles', 'post'>;
}

/**
 * `DELETE /networkAccess/filteringProfiles/{filteringProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/filteringProfiles/{filteringProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/filteringProfiles/{filteringProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filteringProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/filteringProfiles`
 *
 * Get a list of the filteringProfile objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/filteringProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/filteringProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles',
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
 * `GET /networkAccess/filteringProfiles/{filteringProfile-id}`
 *
 * A filtering profile associates network access policies with Microsoft Entra ID Conditional Access policies, so that access policies can be applied to users and groups.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/filteringProfiles/{filteringProfile-id}`
 *
 * Update the properties of a filteringProfile object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}',
    paramDefs: [{ name: 'filteringProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/filteringProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/filteringProfiles']['body'],
  params?: IEndpoints['POST /networkAccess/filteringProfiles']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/filteringProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/filteringProfiles',
    paramDefs: [],
    params,
    body,
  };
}
