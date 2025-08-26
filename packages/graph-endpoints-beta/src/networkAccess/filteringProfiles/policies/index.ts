export * as policy from './policy';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}',
    'delete'
  >;
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/policies',
    'get'
  >;
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}',
    'get'
  >;
  'PATCH /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}',
    'patch'
  >;
  'POST /networkAccess/filteringProfiles/{filteringProfile-id}/policies': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/policies',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}`
 *
 * Delete a tlsInspectionPolicyLink object. Used to unlink a tlsInspectionPolicy from a filtering profile.
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filteringProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies`
 *
 * Get a list of the threatIntelligencePolicyLink objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/policies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}`
 *
 * Get a tlsInspectionPolicyLink object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}`
 *
 * Update the properties of a threatIntelligencePolicyLink object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}',
    paramDefs: [
      { name: 'filteringProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/filteringProfiles/{filteringProfile-id}/policies`
 *
 * Create a new tlsInspectionPolicyLink to connect a filtering profile with a tlsInspectionPolicy. One 1 tlsInspectionPolicy is allowed for every filtering profile.
 */
export function create(
  body: IEndpoints['POST /networkAccess/filteringProfiles/{filteringProfile-id}/policies']['body'],
  params?: IEndpoints['POST /networkAccess/filteringProfiles/{filteringProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/filteringProfiles/{filteringProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/policies',
    paramDefs: [{ name: 'filteringProfile-id', in: 'path' }],
    params,
    body,
  };
}
