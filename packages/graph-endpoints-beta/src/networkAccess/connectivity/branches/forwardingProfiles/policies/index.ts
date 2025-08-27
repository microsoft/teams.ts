export * as policy from './policy';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    'get'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies`
 *
 * The traffic forwarding policies associated with this profile.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * The traffic forwarding policies associated with this profile.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: [
      { name: 'branchSite-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    paramDefs: [
      { name: 'branchSite-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
    ],
    params,
    body,
  };
}
