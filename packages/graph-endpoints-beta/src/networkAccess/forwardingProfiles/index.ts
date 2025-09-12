export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    'delete'
  >;
  'GET /networkAccess/forwardingProfiles': Operation<'/networkAccess/forwardingProfiles', 'get'>;
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    'get'
  >;
  'PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    'patch'
  >;
  'POST /networkAccess/forwardingProfiles': Operation<'/networkAccess/forwardingProfiles', 'post'>;
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    'get'
  >;
}

/**
 * `DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['forwardingProfile-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/forwardingProfiles`
 *
 * Retrieve a list of forwarding profiles.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/forwardingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}`
 *
 * Retrieve information about a specific forwarding profile.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      path: ['forwardingProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}`
 *
 * Update an existing forwarding profile.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      path: ['forwardingProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/forwardingProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/forwardingProfiles']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/forwardingProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/forwardingProfiles',
    body,
  };
}

export const servicePrincipal = {
  /**
   * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal`
   *
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['forwardingProfile-id'],
      },
      params,
    };
  },
};
